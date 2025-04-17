'use client'
import { useState } from 'react';
import React from 'react'
import SearchBar from "./components/SearchBar";
import {Text} from "@/components/retroui/Text"
import Definition from './components/Definition'

export type CharacterInfo = {
  kMandarin: string;
  kDefinition: string | null;
  uvalue: string;
};

export default function Home() {
  const [char, setChar] = useState("");
  const [loading, setLoading] = useState(false);
  const [hanziData, setHanziData] = useState<CharacterInfo[] | null>(null);


  const fetchCharacterData = async () => {
    if (!char) return;
    setLoading(true);
    setHanziData(null);
    try {
      const res = await fetch(`/api/hanzi?char=${encodeURIComponent(char)}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setHanziData(data);
    } catch (error) {
      console.error("Error fetching character data:", error);
    } finally {
      setLoading(false);
    }
  };

  const codePointToChar = (uvalue: string) => {
    const code = parseInt(uvalue.replace("U+", ""), 16);
    return String.fromCodePoint(code);
  };

  return (
   <div className="flex flex-col justify-center items-center m-5 py-4 px-2">
     <Text className="text-primary-hover font-sans" as="h1">Chinese dictionary</Text>
     <SearchBar
     pinyin={char}
     setPinyin={setChar}
     onSearch={fetchCharacterData}
     />
     {loading && (
      <Text as="h2" className="font-sans text-primary-hover">Loading ...</Text>
     )}
     {hanziData && <Definition pinyin={char} results={hanziData}/> }
   </div>
  );
}
