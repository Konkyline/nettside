import { JSX } from "preact";
import Button from "./Button.tsx";

export default function Form(props: JSX.HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
    >
      <h5 class="font-semibold">
        Beskriv ett prosjekt, så tar vi kontakt
      </h5>
      <h2 class="font-serif text-4xl mb-8">Det neste prosjektet nærmer seg</h2>
      <p class="mb-8">
        Det ar alltid ønskelig med nye influenser til det neste prosjektet. Om
        du vil være en samarbeidspartner, ta kontakt:
      </p>
      <p class="mb-4">
        <label for="name" class="block font-bold mb-2">
          Ditt Navn:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          class="focus:border-pink-500 border py-2 px-3 rounded-lg w-full"
        />
      </p>
      <p class="mb-4">
        <label for="email" class="block font-bold mb-2">
          Din Epostadresse:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          title="Please enter a valid email address"
          required
          class="focus:border-pink-500 border py-2 px-3 rounded-lg w-full"
        />
      </p>
      <fieldset>
        <legend class="block font-bold mb-2">
          Hvilken type oppdrag er du interessert i?
        </legend>
        <div class="flex gap-4 mb-4">
          <label for="writing">
            Skriving
          </label>
          <input
            id="writing"
            type="radio"
            name="type"
            value="writing"
            class="mr-2"
            required
          />
          <label for="flowers">
            Blomster
          </label>
          <input
            id="flowers"
            type="radio"
            name="type"
            value="flowers"
            class="mr-2"
            required
          />
        </div>
      </fieldset>
      <p class="mb-4">
        <label for="skills" class="block font-bold mb-2">
          Hvilke egenskaper og behov har du som kan bidra til prosjektet?
        </label>
        <br />
        <textarea
          id="skills"
          name="skills"
          class="focus:border-pink-500 border py-2 px-3 rounded-lg w-full"
        >
        </textarea>
      </p>
      <Button
        type="submit"
        onfocus="this.parentNode.action=this.parentNode.dataset.action"
        ontouchstart="this.parentNode.action=this.parentNode.dataset.action"
        onmouseover="this.parentNode.action=this.parentNode.dataset.action"
        class="bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Send
      </Button>
    </form>
  );
}
