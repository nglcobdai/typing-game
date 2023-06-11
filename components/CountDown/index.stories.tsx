import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Center } from "@chakra-ui/react";

import { CountDown } from "./index";

const meta: Meta<typeof CountDown> = {
  title: "CountDown",
  component: CountDown,
};

export default meta;

type CountDownStory = typeof CountDown & { numCount: number };

type Story = StoryObj<CountDownStory>;

export const Default: Story = (args: CountDownStory) => {
  const [isStart, setIsStart] = useState(false);

  return (
    <>
      <Center>
        {isStart ? (
          <p>true</p>
        ) : (
          <CountDown {...args} setIsStart={setIsStart} />
        )}
      </Center>
    </>
  );
};

Default.args = {
  numCount: 3,
};
