export default function Inspired(props: PageProps) {
  const domains = 'formbergen.no doberman.no uppercase.no heydayshomerun.co bielkeyang.com manyone.com goods.no tableau-cph.com typotheque.com notedesignstudio.se barkas.com bureau.as locallll.com mososlo.com playdate-studio.com stupid-studio.com studio-atlant.dk hellome.studio'.split(' ')

  
  return (
    <body class="relative flex justify-center align-center">
      <div class="flex flex-wrap gap-4 z-0">
        {domains.map(domain => (
          <iframe src={`https://www.${domain}`} class="w-full h-screen transform scale-50" />
        ))}
      </div>
      <div id="overlay" class="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 opacity-0" />
    </body>
  );
}