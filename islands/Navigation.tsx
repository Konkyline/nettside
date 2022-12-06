export default function Navigation(props) {
  return (
    <nav class="landscape:sticky top-0 left-0 landscape:h-screen p-8" { ...props }>
      <ul class="list-none flex flex-col gap-8 items-center">
        <li>
          <a
            href="javascript:title.scrollIntoView({behaviour:'smooth'})"
            class="hover:text-pink-300"
          >
            <svg
              aria-label="Go to top"
              class="h-24"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              stroke="none"
              fill="currentColor"
            >
              <title>Konkyline Logo</title>
              <rect
                style="opacity: .25;"
                x="2.5"
                y="2.5"
                width="45"
                height="45"
                rx="2.5"
              />
              <path
                id="signatur"
                d="M 20 5 v 35 h 5 v -10 l 10 10 h 2 l -10 -10 l 10 -10 h -2 l -10 10 s -8 -10 -16 4  z"
                stroke-opacity=".3"
                stroke="currentColor"
                stroke-width="2"
                stroke-dasharray="3 2 1 4"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#gallery" class="pointer hover:text-pink-300">
            Galleri
          </a>
        </li>
      </ul>
    </nav>
  );
}
