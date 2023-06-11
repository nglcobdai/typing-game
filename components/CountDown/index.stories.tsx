import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Center } from "@chakra-ui/react";

import { CountDown } from "./index";

const meta: Meta<typeof CountDown> = {
  title: "CountDown",
  component: CountDown,
};

export default meta;

type CountDownStory = typeof CountDown & { interval: number };

type Story = StoryObj<CountDownStory>;

export const Default: Story = (args: CountDownStory) => {
  const [isCountDownFinish, setIsCountDownFinish] = useState(false);

  return (
    <>
      <Center>
        {isCountDownFinish ? (
          <p>true</p>
        ) : (
          <CountDown {...args} setIsCountDownFinish={setIsCountDownFinish} />
        )}
      </Center>
    </>
  );
};

Default.args = {
  interval: 3,
};
