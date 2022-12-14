import { useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import { JSX } from "preact";

export default function FlowerCount() {
  const [total, setTotal] = useState<number>(0);
  const [flowers, setFlowers] = useState<string>("");

  const handleClick = (event: JSX.MouseEvent<HTMLButtonElement>) => {
    setFlowers(flowers + event.target.innerText.trim());
    setTotal(total + Number(event.target.value));
  };

  return (
    <div class="grid grid-cols-7 grid-rows-1 gap-1 text-xl md:text-3xl">
      <div class="tracking-tight col-span-7 h-32 text-center">{flowers}</div>
      <button value={1} onClick={handleClick}>🌷</button>
      <button value={1} onClick={handleClick}>☘️</button>
      <button value={2} onClick={handleClick}>🌺</button>
      <button value={2} onClick={handleClick}>🌿</button>
      <button value={3} onClick={handleClick}>🌸</button>
      <button value={4} onClick={handleClick}>🌼</button>
      <button value={5} onClick={handleClick}>🌻</button>
      <Button class="col-span-7">
        Buketten koster {total.toString()} kroner
      </Button>
    </div>
  );
}
