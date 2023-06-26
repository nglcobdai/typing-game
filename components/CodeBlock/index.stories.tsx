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
  const [queryState, setQueryState] = useState(false);
  return (
    <>
      {queryState ? (
        <p>finish</p>
      ) : (
        <CodeBlock
          {...args}
          queryState={queryState}
          setQueryState={setQueryState}
        />
      )}
    </>
  );
};

Default.args = {
  query: "!cp []c\n\t!cp []c",
};
