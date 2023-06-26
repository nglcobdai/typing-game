import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { Center } from "@chakra-ui/react";

import { CodeBlock } from "@/components/CodeBlock";
import { CountDown } from "@/components/CountDown";
import { CustomTextButton } from "@/components/CustomTextButton";

const Home: NextPage = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isCountDownFinish, setIsCountDownFinish] = useState<boolean>(false);
  const [queryState, setQueryState] = useState<boolean>(false);
  const [clearCounter, setClearCounter] = useState<number>(-1);
  const queryList = [
    "if __name__ == '__main__':\n\tprint('Hello, world!')",
    "name = input('Enter your name: ')\nprint('Hello, ' + name + '!')",
  ];

  useEffect(() => {
    setClearCounter(clearCounter + 1);
    console.log("queryState: " + queryState);
  }, [queryState]);

  const switchPage = () => {
    if (!isStart) {
      return (
        <>
          <CustomTextButton
            subTextIsVisible={false}
            subText={""}
            mainText={"ゲームの開始"}
            buttonColorScheme={"teal"}
            buttonText={"Start"}
            clickFunc={() => {
              return setIsStart(true);
            }}
          />
        </>
      );
    } else if (isStart && !isCountDownFinish) {
      return (
        <>
          <Center>
            <CountDown
              interval={3}
              setIsCountDownFinish={setIsCountDownFinish}
            />
          </Center>
        </>
      );
    } else if (isCountDownFinish && clearCounter < queryList.length) {
      return (
        <>
          <CodeBlock
            key={clearCounter}
            query={queryList[clearCounter]}
            queryState={queryState}
            setQueryState={setQueryState}
          />
        </>
      );
    } else {
      return (
        <>
          <CustomTextButton
            subTextIsVisible={true}
            subText={"スコア：XXXXX"}
            mainText={"ゲームの終了"}
            buttonColorScheme={"teal"}
            buttonText={"Restart"}
            clickFunc={() => {
              setIsCountDownFinish(false);
              setClearCounter(0);
              return;
            }}
          />
        </>
      );
    }
  };
  console.log("clearCounter: " + clearCounter);

  return <>{switchPage()}</>;
};

export default Home;
