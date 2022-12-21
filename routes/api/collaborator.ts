import { HandlerContext } from "$fresh/server.ts";

interface Collaborator {
  name: string;
  email: string;
  skill: string;
  created_at: string;
}

export async function handler(
  req: Request
): Promise<Response> {
  switch (req.method) {
    case "POST": {
      try {
        const body = await req.formData()
        const { name, email, skills, type } = Object.fromEntries(body.entries())
        console.log(name, email, skills, type)
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [
                  { email: Deno.env.get('HOSTESS_EMAIL') || [['alineinbu', 'gmail'].join('@'), 'com'].join('.') }
                ]
              }
            ],
            from: {
              email: [['post', 'kubikkpixel'].join('@'), 'no'].join('.'),
            },
            subject: 'Ny sammarbeidspartner',
            content: [ 
              {
                type: 'text/plain',
                value: `Hei!\n${name} har meldt en interesse innenfor ${type} og kan bidra med ${skills}.\n Svar de da gjerne på epost: ${email}`
              }
            ]
          })
        })
        
        if (response.status !== 202) {
          console.log(response)
          throw new Error('Sendgrid API error')
        }
        if (req.headers.get("accept")?.includes("text/html")) {
          // Redirect submitter to the a gratitude page
          return new Response(null, {
            status: 303,
            headers: {
              Location: `/${encodeURIComponent(body.get('name') as string)}`,
            },
          });
        } else {
          // or an API-client gets a json response
          return new Response(JSON.stringify({ name, email, skills,}), {
            status: 201,
            headers: {
              "content-type": "application/json",
            }
          })
        }
      } catch (e) {
        console.error(e)
        return new Response(e.message, { status: 500 })
      }
    }

    default:
      console.log("Invalid method", req.method)
      return new Response("Invalid method", { status: 405 });
  }
}
