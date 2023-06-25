import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { HStack, Text, VStack } from "@chakra-ui/react";

type Props = {
  setIsFinish: Dispatch<SetStateAction<boolean>>;
  query: string;
};

type InputIndex = {
  total: number;
  row: number;
  column: number;
};

export const CodeBlock = ({ query, setIsFinish }: Props) => {
  const [index, setIndex] = useState<InputIndex>({
    total: 0,
    row: 0,
    column: 0,
  });
  const inputRef = useRef<HTMLDivElement>(null);
  const queryList = query.split("\n");

  const replaceWhitespaceTab = (text: string) => {
    return text.replace(/ /g, "\u00A0").replace(/\t/g, "\u23B5\u23B5");
  };

  const splitText = (i: number, text: string) => {
    let splitedText = {
      inputedText: "",
      nonInputedtext: "",
    };
    if (i < index.row) {
      splitedText.inputedText = text;
    } else if (i > index.row) {
      splitedText.nonInputedtext = text;
    } else {
      splitedText.inputedText = text.slice(0, index.column);
      splitedText.nonInputedtext = text.slice(index.column);
    }
    return splitedText;
  };

  const replaceText = (i: number, text: string) => {
    const splitedText = splitText(i, text);
    return (
      <HStack spacing="0px">
        <Text fontSize="3xl" color="tomato">
          {replaceWhitespaceTab(splitedText.inputedText)}
        </Text>
        <Text fontSize="3xl" color="#707070">
          {replaceWhitespaceTab(splitedText.nonInputedtext)}
        </Text>
      </HStack>
    );
  };

  useEffect(() => {
    // ページがリロードされたときに<div>要素にフォーカスを指定
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyPressed = event.key;

    switch (query[index.total]) {
      case "\n":
        if (keyPressed !== "Enter") return;
        break;
      case "\t":
        break;
      default:
        if (keyPressed !== query[index.total]) return;
        break;
    }

    const newColumn = index.column + 1; // indexが非同期で更新されるので、新しい値をセットする
    const newTotal = index.total + 1;

    if (newTotal === query.length) {
      setIsFinish(true);
      return;
    }
    if (newColumn === queryList[index.row].length + 1) {
      const newRow = index.row + 1;
      if (query[newTotal] === "\t") {
        // 改行後にタブがある場合、タブの分だけインデックスを進める
        setIndex({ total: newTotal + 1, row: newRow, column: 1 });
      } else {
        setIndex({ total: newTotal, row: newRow, column: 0 });
      }
    } else setIndex({ total: newTotal, row: index.row, column: newColumn });
  };

  return (
    <>
      <div onKeyDown={(e) => handleKeyDown(e)} ref={inputRef} tabIndex={0}>
        <VStack align="left">
          {queryList.map((item, i) => {
            return <>{replaceText(i, item)}</>;
          })}
        </VStack>
      </div>
    </>
  );
};
