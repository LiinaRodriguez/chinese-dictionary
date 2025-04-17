import { Input } from "@/components/retroui/Input"
import {Button} from "@/components/retroui/Button"
import { RadioGroup } from "@/components/retroui/Radio";

type Props = {
  pinyin: string;
  setPinyin: (value: string) => void;
  onSearch: () => void;
  loading: boolean;
};

export default function SearchBar({pinyin, setPinyin, onSearch, loading}: Props) {
  return (
    <div className="flex flex-col m-4">
    <div className="flex flex-row">
    <Input
      value={pinyin}
      onChange={(e) => setPinyin(e.target.value)}
      type="search" id="search" placeholder="Escribe una palabra"
      className="px-4 py-2  md:min-w-170  w-full border-2 border-black shadow-md transition focus:outline-hidden focus:shadow-xs"
    />
    <Button onClick={onSearch}>Search</Button>;
    </div>
    <div className="flex mt-5 items-center justify-center gap-4">
      <RadioGroup className="flex flex-row items-center justify-center">
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="pinyin" variant="default" />
          <label htmlFor="pinyin" className="font-sans">Pinyin</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="hanzi" variant="default" />
          <label htmlFor="hanzi" className="font-sans">Hanzi</label>
        </div>
      </RadioGroup>
    </div>
    </div>
  )
}