import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
// import deno filesystem module and read a list of files in the static/gallery folder
// import { readDir } from "$fs";

// const gallery = await readDir("static/gallery");
// import the Picture component
import Picture from "../components/Picture.tsx";

import FlowerCount from "../islands/FlowerCount.tsx";
import Navigation from "../islands/Navigation.tsx";
import Footer from "../components/Footer.tsx";

export default function Home(_props: PageProps) {

  const pictures = [];
  for (let i = 1; i <= 17; i++) {
    pictures.push((<Picture num={i} />));
  }
  
  return (
    <>
      <Head>
        <title>Konkyline</title>
        <style>
          {"@import url('https://css.gg/instagram.css');"}
        </style>
      </Head>
      <body class="text-green-500 w-screen overflow-x-hidden">
        <Navigation />
        <main class="leading-6 flex-auto z-10 max-w-7xl mx-auto">
          <article class="flex gap-16 flex-col py-8 px-4 grid">
            <header class="col-span-3 text-center mb-8">
              <h1
                id="title"
                class="portrait:text-center font-serif my-8 text-4xl"
              >
                Konkyline
              </h1>
              <h2 class="font-serif text-xl underline decoration-wavy decoration-pink-300 decoration-from-font decoration-4 underline-offset-8" style="text-decoration-color: pink; text-decoration-style:wavy; text-decoration-thickness: .2rem; text-decoration-skip-ink:none; text-underline-offset: .3rem;">
                Praktisk estetikk gjennom tekst, vekster og webdesign
              </h2>
            </header>
            <section class="md:col-span-2 md:text-right col-span-3 flex flex-col gap-4 px-4 max-w-prose justify-self-end  portrait:col-span-3">
              <h2 class="font-serif text-xl">Tekstkonsulent</h2>
              <p>
                Tekstkonsulent for{" "}
                <a href="https://fluxwork.no" rel="place of employment">
                  Fluxwork
                </a>{" "}
                som jobber for universell utforming gjennom små og store
                prosjekter innen kunst og kultur for syns- og hørselshemmede.
              </p>
            </section>
            <section class="md:col-span-1 col-span-3 flex flex-col gap-4 px-4 max-w-prose justify-self-start portrait:col-span-3">
              <h4 class="font-serif text-xl">Tekstoppdrag</h4>
              <p>
                Søknadsskriving av alle slag, hjelper gjerne med søknader til
                alt fra NAV til Kulturrådet og offentlige såvel som private
                legater, fond og skoler, prosjektbeskrivelser, research,
                korrektur og liknende.
              </p>
            </section>
            <section class="col-span-3 flex flex-col gap-4 px-4">
              <h4 class="flex justify-between font-serif text-xl">
                <span>Floristarbeid</span>
                  <a href="https://www.instagram.com/blomstersentret_homansbyen/">
                    <i class="gg-instagram"></i>
                  </a>
              </h4>
              <p>
              Lager alt fra enkle, stilrene buketter til grandiose installasjoner
              for private og offentlige arrangementer.
              </p>
            </section>
            <section id="gallery" class="col-span-3 flex flex-col gap-4 px-4">
              <ul class="flex gap-8 snap-x relative overflow-x-auto -mx-8 portrait:max-w-full h-96 justify-items-stretch" style="scroll-snap-type: x mandatory;">
                { pictures }
              </ul>
            </section>
            <section class="md:col-span-1 col-span-3 md:text-right flex flex-col gap-4 max-w-prose justify-self-end">
              <h4 class="font-serif text-xl">Noen blir imponert</h4>
              <ul>
                <li>
                  <blockquote class="italic">
                    Det er nesten irriterende hvor bra øye du har for skjønnhet,
                    men det gjør godt å vite at ditt blikk mot verden finnes-jeg
                    vil hevde at folk flest ikke skjønner hvor viktig estetikk
                    er i det VIRKELIG store bildet
                  </blockquote>
                  <figcaption>
                    –Svein Gunnar Kjøde, <cite>Blankscapes Design</cite>
                  </figcaption>
                </li>
              </ul>
            </section>
            <Footer />
          </article>
          <FlowerCount />
        </main>
      </body>
    </>
  );
}
