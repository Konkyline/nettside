import Form from "../components/Form.tsx";

export default function Contact(props: PageProps) {
  return (
    <div class="max-w-sm mx-auto my-8">
      <h2 class="text-4xl font-serif">Kontakt</h2>
      <Form
        class="mb-16"
        action=""
        data-action="/api/collaborator"
        name="collaborators"
        method="POST" />
    </div>
  )
}