import React, { useEffect, useRef, useState } from "react";

import { Center, Text } from "@chakra-ui/react";

export type Props = {
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  data: string;
};

export const CodeBlock = ({ data, setIsNext }: Props) => {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");
  const inputRef = useRef<HTMLDivElement>(null);

  const replaceText = (text: string) => {
    return text.replace(/ /g, "\u00A0");
  };

  useEffect(() => {
    // ページがリロードされたときに<div>要素にフォーカスを指定
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keyPressed = event.key;
    if (keyPressed !== data[correctCount]) {
      return;
    }
    const newCorrectCount = correctCount + 1; // setCorrectCountが非同期で更新されるので、ここで更新しておく
    setInputText((inputText) => inputText + keyPressed);
    setCorrectCount(newCorrectCount);
    if (newCorrectCount === data.length) {
      setIsNext(true);
      return;
    }
  };

  return (
    <React.Fragment>
      <div onKeyDown={(e) => handleKeyDown(e)} ref={inputRef} tabIndex={0}>
        <Center>
          <Text fontSize="3xl" color="tomato">
            {replaceText(inputText)}
          </Text>
          <Text fontSize="3xl" color="#707070">
            {replaceText(data.slice(correctCount))}
          </Text>
        </Center>
      </div>
    </React.Fragment>
  );
};
