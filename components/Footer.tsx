import FlowerCount from "../islands/FlowerCount.tsx";

export default function Footer(props) {
  return (
    <footer class="z-0 col-span-2 bottom-0 right-0 max-w-prose self-end">
      <form name="collaborators" method="POST">
        <h5 class="font-semibold">
          Beskriv ett oppdrag så tar vi kontakt
        </h5>
        <h2 class="font-serif text-4xl mb-8">Vi tar freelance oppdrag</h2>

        <p class="mb-8">
          Vil du bli med på vårt neste prosjekt? Her kan du formidle det du måtte ønske av alt fra tekstassistanse til dekorering av lokaler
        </p>
        <p class="mb-4">
          <label class="block font-bold mb-2">
            Ditt Navn:{" "}
            <input
              type="text"
              name="name"
              class="border py-2 px-3 rounded-lg w-full"
            />
          </label>
        </p>
        <p class="mb-4">
          <label class="block font-bold mb-2">
            Din Epostadresse:{" "}
            <input
              type="email"
              name="email"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
              title="Please enter a valid email address"
              required
              class="border py-2 px-3 rounded-lg w-full"
            />
          </label>
        </p>
        <p class="mb-4">
          <label class="block font-bold mb-2">
            Hvilke egenskaper eller behov har du som kan bidra til prosjeter?
          </label>
          <br />
          <textarea name="skills" class="border py-2 px-3 rounded-lg w-full">
          </textarea>
        </p>
        <p>
          <button
            type="submit"
            class="bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg"
          >
            Send
          </button>
        </p>
      </form>

      <h4>Kontaktinformasjon</h4>
      <ul>
        <li>
          <a
            href=""
            ontouchstart="constructEmailForHumans(event)"
            onmouseover="constructEmailForHumans(event)"
            data-domain="gmail.com"
            data-username="alineinbu"
          >
            Epost
          </a>
        </li>
        <li>
          <a href="tel:+4745210717">
            +47 45 21 07 17
          </a>
        </li>
      </ul>
    </footer>
  );
}
