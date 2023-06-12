import React, { useEffect, useRef, useState } from "react";

import { Center, Text } from "@chakra-ui/react";

type Props = {
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
};

export const CodeBlock = ({ query, setIsFinish }: Props) => {
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
    if (keyPressed !== query[correctCount]) {
      return;
    }
    const newCorrectCount = correctCount + 1; // setCorrectCountが非同期で更新されるので、ここで更新しておく
    setInputText((inputText) => inputText + keyPressed);
    setCorrectCount(newCorrectCount);
    if (newCorrectCount === query.length) {
      setIsFinish(true);
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
            {replaceText(query.slice(correctCount))}
          </Text>
        </Center>
      </div>
    </React.Fragment>
  );
};
