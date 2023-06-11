import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Text } from "@chakra-ui/react";

type Props = {
  setIsCountDownFinish: Dispatch<SetStateAction<boolean>>;
  interval: number;
};

export const CountDown = ({ setIsCountDownFinish, interval }: Props) => {
  const [count, setCount] = useState(interval);

  useEffect(() => {
    if (count <= 0) {
      setIsCountDownFinish(true);
      return;
    }

    setTimeout(() => setCount(count - 1), 1000);
  }, [count]);

  return (
    <>
      <Text fontSize="4xl" fontWeight="bold">
        {count}
      </Text>
    </>
  );
};
