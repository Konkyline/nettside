import Picture from "./Picture.tsx";
import { JSX } from "preact";

export default function Gallery(props: JSX.HTMLAttributes<HTMLSectionElement>) {
  const pictures = [];
  for (let i = 1; i <= 17; i++) {
    pictures.push(<Picture num={i} />);
  }

  return (
    <section {...props}>
      <ul
        class="flex gap-8 snap-x relative overflow-x-auto -mx-8 h-96 justify-items-stretch"
        style="scroll-snap-type: x mandatory;"
      >
        {pictures}
      </ul>
    </section>
  );
}
