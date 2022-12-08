import { Head } from "$fresh/runtime.ts";
export default function Inspired(props: PageProps) {
  const domains =
    "formbergen.no uppercase.no manyone.com goods.no tableau-cph.com notedesignstudio.se barkas.com bureau.as locallll.com playdate-studio.com stupid-studio.com studio-atlant.dk hellome.studio sanzero.no uniform.no bly.as forestry.no moshpit.no"
      .split(" ");
  return (
    <>
      <Head>
        <title>Inspired</title>
      </Head>
      <body class="relative flex flex-wrap snap-x gap-4 z-0 justify-center align-center overflow-y-auto overflow-x-hidden">
        <h1 class="absolute top-0 font-serif text-4xl mt-32">
          Våre inspirasjonskilder
        </h1>
        {domains.map((domain) => (
          <iframe
            src={`https://www.${domain}`}
            class="w-full h-screen transform scale-50"
          />
        ))}
        <div
          id="overlay"
          class="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 opacity-0"
        />
      </body>
    </>
  );
}
