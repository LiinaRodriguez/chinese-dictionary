import {Card} from '@/components/retroui/Card'
import {Text} from '@/components/retroui/Text'
import codePointToChar from '@/app/utils/unicodeToChar'
import parsePinyinAccent from '@/app/utils/parsePinyinAccent'

type CharacterInfo = {
  kMandarin: string;
  kDefinition: string | null;
  uvalue: string;
};

type Props = {
  pinyin: string;
  results: CharacterInfo[];
};

export default function Definition({pinyin, results}:Props){
  return(
    <div className="flex flex-col items-center justify-center">
      <Text as="h3" className="text-primary-hover">Resultados para  &quot;{pinyin}&quot; </Text>
      {results.length ===0 ? (
        <Text className="font-sans" as="p">No se encontraron resultados para &quot;{pinyin}&quot;</Text>
      ): results.map((entry, index) =>(
          <Card key = {index} className="md:min-w-190 min-w-full my-2">
              <Card.Header>
                <Card.Title className="font-serif">{codePointToChar(entry.uvalue)}</Card.Title>
                <Card.Description className="font-sans flex flex-row gap-2">
                  <Text as="p" >{parsePinyinAccent(entry.kMandarin.toLowerCase())}</Text>
                  <Text as="p" className="text-primary-hover font-bold">{'  ·  '} </Text>
                  <Text as="p" >{(entry.kDefinition ?  entry.kDefinition: '')}</Text>
                </Card.Description>
              </Card.Header>
            </Card>
      )) }
    
    </div>
  )
}
