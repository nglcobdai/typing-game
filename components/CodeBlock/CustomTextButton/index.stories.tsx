import type { Meta, StoryObj } from "@storybook/react";

import { CodeBlock, Props } from "./index";
import { useState } from "react";

const meta: Meta<typeof CodeBlock> = {
  title: "CodeBlock",
  component: CodeBlock,
};

export default meta;

// TODO: exportをやめる
type CodeBlockStory = typeof CodeBlock & Props;

type Story = StoryObj<CodeBlockStory>;

export const Default: Story = (args: CodeBlockStory) => {
  const [isNext, setIsNext] = useState(false);
  return (
    <>
      {isNext ? <p>finish</p> : <CodeBlock {...args} setIsNext={setIsNext} />}
    </>
  );
};

Default.args = {
  data: "!cp []c",
};
