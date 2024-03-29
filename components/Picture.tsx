import { JSX } from "preact";

export default function Picture(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  // prepad numbers below 10 with a zero
  const num = props.num < 10 ? `0${props.num}` : props.num;
  return (
    <img
      srcset={`gallery/${num}.avif, gallery/${num}.jpg`}
      src={`gallery/${num}.jpg`}
      alt="blomsterbilde"
      onload="this.classList.remove('opacity-0')"
      onclick="this.scrollIntoView({behavior: 'smooth', inline: 'center'})"
      class="transition object-contain opacity-0"
      style="aspect-ratio: 1/1; scroll-snap-align: center;"
    />
  );
}
