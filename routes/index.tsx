import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

import FlowerCount from "../islands/FlowerCount.tsx";
import Navigation from "../components/Navigation.tsx";
import Form from "../components/Form.tsx";
import Gallery from "../components/Gallery.tsx";

export default function Home(_props: PageProps) {
  return (
    <>
      <Head>
        <title>Konkyline</title>
        <style>
          {"@import url('https://css.gg/instagram.css');"}
        </style>
      </Head>
      <body class="text-green-600 w-screen overflow-x-hidden">
        <Navigation />
        <main class="leading-6 flex-auto z-10 max-w-7xl mx-auto">
          <article class="flex gap-8 flex-col py-8 px-4 grid">
            <header class="col-span-3 text-center mb-8">
              <h1
                id="title"
                class="portrait:text-center font-serif my-8 text-4xl"
              >
                Konkyline
              </h1>
              <h2
                class="font-serif text-xl leading-loose underline decoration-wavy decoration-pink-300 decoration-from-font decoration-4 underline-offset-8"
                style="text-decoration-color: pink; text-decoration-style:wavy; text-decoration-thickness: .2rem; text-decoration-skip-ink:none; text-underline-offset: .3rem;"
              >
                Praktisk estetikk gjennom<br class="md:hidden" />{" "}
                tekst, vekster og webdesign
              </h2>
            </header>
            <section class="md:col-span-2 md:text-right col-span-3 flex flex-col gap-4 max-w-prose justify-self-end  portrait:col-span-3">
              <h2 class="font-serif text-xl">Tekstkonsulent</h2>
              <p>
                Tekstkonsulent for{" "}
                <a
                  class="text-pink-300 hover:text-pink-500"
                  href="https://fluxwork.no"
                  rel="place of employment"
                >
                  Fluxwork
                </a>{" "}
                som jobber for universell utforming gjennom små og store
                prosjekter innen kunst og kultur for syns- og hørselshemmede.
              </p>
            </section>
            <section class="md:col-span-1 col-span-3 flex flex-col gap-4 max-w-prose justify-self-start portrait:col-span-3">
              <h4 class="font-serif text-xl">Tekstoppdrag</h4>
              <p>
                Søknadsskriving av alle slag, hjelper gjerne med søknader til
                alt fra NAV til Kulturrådet og offentlige såvel som private
                legater, fond og skoler, prosjektbeskrivelser, research,
                korrektur og liknende.
              </p>
            </section>
            <section class="col-span-3 flex flex-col gap-4">
              <h4 class="flex justify-between items-center font-serif text-xl">
                <span>Floristarbeid</span>
                <a
                  title="Instagram konto for blomstersentret homansbyen"
                  href="https://www.instagram.com/blomstersentret_homansbyen/"
                >
                  <i class="gg-instagram"></i>
                </a>
              </h4>
              <p>
                Lager alt fra enkle, stilrene buketter til grandiose
                installasjoner for private og offentlige arrangementer.
              </p>
            </section>
            <Gallery
              id="gallery"
              class="relative h-full col-span-3 flex flex-col gap-4 px-4"
            />
            <aside class="md:col-span-1 col-span-3 md:text-right flex flex-col gap-4 max-w-prose justify-self-end">
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
            </aside>
            <footer class="z-0 md:col-span-2 row-span-3 col-span-3 bottom-0 right-0 max-w-prose self-end">
              <h5 class="font-semibold">
                Beskriv et prosjekt, så tar vi kontakt
              </h5>
              <h2 class="font-serif text-4xl mb-8">
                Det neste prosjektet nærmer seg
              </h2>
              <p class="mb-8">
                Det ar alltid ønskelig med ferske krav til jobben. Om du vil
                være en inspirerene samarbeidspartner, ta kontakt:
              </p>
              <Form class="mb-16 flex flex-col" />
            </footer>
            <aside class="md:col-span-1 col-span-3 flex md:text-right flex-col gap-4 max-w-prose w-full justify-self-start">
              <h4 class="text-xl font-serif">Kontaktinformasjon</h4>
              <ul>
                <li>
                  <a
                    href=""
                    rel="skriv til min epostadresse"
                    onfocus="this.href='mailto:'+this.dataset.username+'@'+this.dataset.domain;"
                    ontouchstart="this.href='mailto:'+this.dataset.username+'@'+this.dataset.domain;"
                    onmouseover="this.href='mailto:'+this.dataset.username+'@'+this.dataset.domain;"
                    data-domain="konkyline.no"
                    data-username="hei"
                    class="text-pink-300 hover:text-pink-500"
                  >
                    hei@konkyline.no
                  </a>
                </li>
                <li>
                  <a
                    class="text-pink-300 hover:text-pink-500"
                    href="tel:+4745210717"
                    rel="ring meg"
                  >
                    +47 45 21 07 17
                  </a>
                </li>
              </ul>
            </aside>
          </article>
          <FlowerCount />
          <small class="center">
            <script>document.write(new Date().getFullYear())</script>{" "}
            © konkyline | kandidatnummer 2018
          </small>
        </main>
      </body>
    </>
  );
}
