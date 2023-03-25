import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      autoFocus
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634]"
    />
  )
}
