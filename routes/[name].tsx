import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <body class="flex flex-col justify-center min-h-full items-center text-green-500">
      <h1 class="text-center text-7xl mt-96 mb-16">
        Gleder oss til å bli bedre kjent <br /> med deg{" "}
        {decodeURIComponent(props.params.name)}!
      </h1>
      <p >Du skal vel kunne høre tilbake snart…</p>
    </body>
  );
}
