import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { Center, Text } from "@chakra-ui/react";

type Props = {
  setIsFinish: Dispatch<SetStateAction<boolean>>;
  query: string;
};

type Input = {
  index: number;
  inputText: string;
};

export const CodeBlock = ({ query, setIsFinish }: Props) => {
  const [input, setInput] = useState<Input[]>([
    {
      index: 0,
      inputText: "",
    },
  ]);
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

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyPressed = event.key;
    if (keyPressed !== query[input[0].index]) {
      return;
    }
    const newIndex = input[0].index + 1; // indexが非同期で更新されるので、新しい値をセットする
    setInput([
      { ...input, index: newIndex, inputText: input[0].inputText + keyPressed },
    ]);
    if (newIndex === query.length) {
      setIsFinish(true);
      return;
    }
  };

  return (
    <>
      <div onKeyDown={(e) => handleKeyDown(e)} ref={inputRef} tabIndex={0}>
        <Center>
          <Text fontSize="3xl" color="tomato">
            {replaceText(input[0].inputText)}
          </Text>
          <Text fontSize="3xl" color="#707070">
            {replaceText(query.slice(input[0].index))}
          </Text>
        </Center>
      </div>
    </>
  );
};
