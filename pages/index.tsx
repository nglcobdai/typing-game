import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { Center } from "@chakra-ui/react";

import { CodeBlock } from "@/components/CodeBlock";
import { CountDown } from "@/components/CountDown";
import { CustomTextButton } from "@/components/CustomTextButton";

const Home: NextPage = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isCountDownFinish, setIsCountDownFinish] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [clearCounter, setClearCounter] = useState<number>(0);
  const queryList = [
    "if __name__ == '__main__':\n\tprint('Hello, world!')",
    "name = input('Enter your name: ')\nprint('Hello, ' + name + '!')",
  ];

  useEffect(() => {
    if (isFinish === false) return;
    setIsFinish(false);
    setClearCounter(clearCounter + 1);
  }, [isFinish === true]);

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
            setIsFinish={setIsFinish}
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
              setIsFinish(false);
              setClearCounter(0);
              return;
            }}
          />
        </>
      );
    }
  };

  return <>{switchPage()}</>;
};

export default Home;
