import { useState } from "preact/hooks"
import { Button } from "../components/Button.tsx"

interface CounterProps {
  start: number;
}

export default function FlowerCount() {
  const [total, setTotal] = useState(0)
  const [flowers, setFlowers] = useState('')

  const handleClick = (event: any) => {
    setFlowers(flowers + event.target.innerText.trim())
    setTotal(total + Number(event.target.value))
  }

  return (
    <div class="grid grid-cols-7 grid-rows-1 gap-1">
      <div class="tracking-tight col-span-7 h-32">{flowers}</div>
      <button value={1} onClick={handleClick}>🌷</button>
      <button value={1} onClick={handleClick}>☘️</button>
      <button value={2} onClick={handleClick}>🌺</button>
      <button value={2} onClick={handleClick}>🌿</button>
      <button value={3} onClick={handleClick}>🌸</button>
      <button value={4} onClick={handleClick}>🌼</button>
      <button value={5} onClick={handleClick}>🌻</button>
      <Button class="col-span-7">Kjøp bukett for: {total.toString()} kroner</Button>
    </div>
  )
}
