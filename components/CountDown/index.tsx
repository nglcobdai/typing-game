import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Text } from "@chakra-ui/react";

type Props = {
  setIsStart: Dispatch<SetStateAction<boolean>>;
  numCount: number;
};

export const CountDown = ({ setIsStart, numCount }: Props) => {
  const [count, setCount] = useState(numCount);

  useEffect(() => {
    if (count <= 0) {
      setIsStart(true);
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
