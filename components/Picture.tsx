import { JSX } from "preact";

export default function Picture(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  // prepad numbers below 10 with a zero
  const num = props.num < 10 ? `0${props.num}` : props.num;
  return (
      <img
        src={`gallery/${num}.jpg`}
        class="object-contain" style="aspect-ratio: 1/1; scroll-snap-align: center;"
      />
  );
}
