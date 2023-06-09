import type { Meta, StoryObj } from "@storybook/react";

import { Box, HStack } from "@chakra-ui/react";

import { HSpacer } from "./index";

const meta: Meta<typeof HSpacer> = {
  title: "Common/HSpacer/HSpacer",
  component: HSpacer,
};

export default meta;

type HSpacerStory = typeof HSpacer & { size: number };
type Story = StoryObj<HSpacerStory>;

export const Default: Story = (args: HSpacerStory) => {
  return (
    <>
      <HStack>
        <Box w={5} h={14} bg="tomato" />
        <HSpacer {...args} />
        <Box w={5} h={14} bg="tomato" />
      </HStack>
    </>
  );
};

Default.args = {
  size: 10,
};
