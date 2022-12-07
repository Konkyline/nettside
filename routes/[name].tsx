import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (<body class=" flex justify-center min-h-full align-center">
    <h1 class="center text-7xl text-green mt-96">
      Gleder oss til å bli bedre kjent, {props.params.name}!
    </h1>
  </body>)
}
