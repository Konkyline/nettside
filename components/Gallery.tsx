import Picture from "../components/Picture.tsx";
import { JSX } from "preact";

export default function Gallery(props: JSX.HTMLAttributes<HTMLSectionElement>) {
  const pictures = [];
  for (let i = 1; i <= 17; i++) {
    pictures.push(<Picture num={i} />);
  }
  

  return (
    <section {...props}>
      <button
        class="absolute top-1/3 left-0 z-10 p-4"
        onclick="this.parentElement.scrollBy({left: -this.parentElement.clientWidth, behavior: 'smooth'}) || console.log(this.parentElement.clientWidth)"
      >
        <svg class="h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 4 12 l 16 10 v -20 z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        class="absolute top-1/3 right-0 z-10 p-4"
        onclick="this.parentElement.scrollBy({left: this.parentElement.clientWidth, behavior: 'smooth'})"
      >
        <svg class="h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 20 12 l -16 10 v -20 z"
            fill="currentColor"
          />
        </svg>
      </button>
      <ul
        class="flex gap-8 snap-x relative overflow-x-auto -mx-8 h-96 justify-items-stretch"
        style="scroll-snap-type: x mandatory;"
      >
        {pictures}
      </ul>
    </section>
  );
}
