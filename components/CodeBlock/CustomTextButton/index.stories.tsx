import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { CodeBlock } from "./index";

const meta: Meta<typeof CodeBlock> = {
  title: "CodeBlock",
  component: CodeBlock,
};

export default meta;

type CodeBlockStory = typeof CodeBlock & { data: string };

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
