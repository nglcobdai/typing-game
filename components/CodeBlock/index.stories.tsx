import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

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
  const queryList = ["!cp []c", "!cp []c\n\t!cp []c"];
  const [clearCounter, setClearCounter] = useState<number>(0);

  useEffect(() => {
    if (isFinish) {
      setIsFinish(false);
      setClearCounter(clearCounter + 1);
    }
  }, [isFinish]);

  return (
    <>
      {clearCounter === queryList.length ? (
        <p>finish</p>
      ) : (
        <CodeBlock key={clearCounter} query={queryList[clearCounter]} setIsFinish={setIsFinish} />
      )}
    </>
  );
};

Default.args = {
  query: "!cp []c\n\t!cp []c",
};
