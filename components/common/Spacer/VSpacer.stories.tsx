import type { Meta, StoryObj } from "@storybook/react";

import { Box, VStack } from "@chakra-ui/react";

import { VSpacer } from "./index";

const meta: Meta<typeof VSpacer> = {
  title: "Common/VSpacer/VSpacer",
  component: VSpacer,
};

export default meta;

type VSpacerStory = typeof VSpacer & { size: number };
type Story = StoryObj<VSpacerStory>;

export const Default: Story = (args: VSpacerStory) => {
  return (
    <>
      <VStack>
        <Box w="100%" h={5} bg="tomato" />
        <VSpacer {...args} />
        <Box w="100%" h={5} bg="tomato" />
      </VStack>
    </>
  );
};

Default.args = {
  size: 10,
};
