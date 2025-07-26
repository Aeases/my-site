import { useState } from "react"
import { motion } from "framer-motion"

export default function svgTest() {
  const [x, setX] = useState(0)
  return (
    <div>
      <Input
        value={x}
        set={setX}
      >
        x
      </Input>

      <svg
        viewBox="-1 -1 102 102"
        style={{ position: "relative" }}
      >
        <motion.rect
          x={x}
          y="0"
          width="100"
          height="100"
          fill="black"
        >
          <rect
            rx="2"
            fill="white"
          />
        </motion.rect>
      </svg>
    </div>
  )
}

export function Input({ value, children, set, min = -200, max = 200 }: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  )
}



interface InputProps {
  children: string
  value: number
  set: (newValue: number) => void
  min?: number
  max?: number
}