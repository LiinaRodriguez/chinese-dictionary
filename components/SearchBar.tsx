import { Input } from "./retroui/Input"
import ButtonExample from "./ButtonExample"

export default function SearchBar() {
  return (
    <div className="m-auto p-2">
    <Input
      type="search" id="search" placeholder="Escribe una palabra"
      className="px-4 py-2 w-full border-2 border-black shadow-md transition focus:outline-hidden focus:shadow-xs"
    />
    <ButtonExample />
    </div>
  )
}