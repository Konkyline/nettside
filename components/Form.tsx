import { JSX } from "preact";
import Button from "./Button.tsx";

export default function Form(props: JSX.HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
    >
        <label for="name" class="block font-bold mb-2">
          Navn:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          class="focus:border-pink-500 border py-2 px-3 mb-4 rounded-lg w-full"
        />
        <label for="email" class="block font-bold mb-2">
          Epostadresse:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          title="Please enter a valid email address"
          placeholder="deg@internet.no"
          required
          class="focus:border-pink-500 border py-2 px-3 mb-4 rounded-lg w-full"
        />
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
        <label for="skills" class="block font-bold mb-2">
          Hvilke egenskaper og behov har du som kan bidra til prosjektet?
        </label>
        <br />
        <textarea
          id="skills"
          name="skills"
          class="focus:border-pink-500 border py-2 px-3 mb-4 rounded-lg w-full"
        >
        </textarea>
      <button
        type="submit"
        data-action="/api/collaborator"
        formmethod="post"
        onfocus="this.setAttribute('formactionk', this.dataset.action)"
        ontouchstart="this.setAttribute('formaction', this.dataset.action)"
        onmouseover="this.setAttribute('formaction', this.dataset.action)"
        class="bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Send
      </button>
    </form>
  );
}
