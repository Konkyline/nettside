import Gallery from "../islands/Gallery.tsx";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function GalleryPage(_props: PageProps) {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <body class="flex justify-center align-center">
        <Gallery
          id="gallery"
          class="h-full col-span-3 flex flex-col gap-4 px-4"
        />
      </body>
    </>
  );
}
