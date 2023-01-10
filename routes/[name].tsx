import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <body class="flex justify-center min-h-full align-center">
      <h1 class="text-center text-7xl text-green-500 mt-96">
        Gleder oss til å bli bedre kjent <br /> med deg {decodeURIComponent(props.params.name)}!
      </h1>
      <p>Du skal vel kunne høre tilbake snart</p>
    </body>
  );
}
