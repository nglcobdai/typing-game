import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { CodeBlock } from "./index";

const meta: Meta<typeof CodeBlock> = {
  title: "CodeBlock",
  component: CodeBlock,
};

export default meta;

type CodeBlockStory = typeof CodeBlock & { query: string };

type Story = StoryObj<CodeBlockStory>;

export const Default: Story = (args: CodeBlockStory) => {
  const [isFinish, setIsFinish] = useState(false);
  return (
    <>
      {isFinish ? <p>finish</p> : <CodeBlock {...args} setIsFinish={setIsFinish} />}
    </>
  );
};

Default.args = {
  query: "!cp []c",
};
