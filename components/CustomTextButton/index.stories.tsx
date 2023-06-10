import type { Meta, StoryObj } from "@storybook/react";

import { CustomTextButton, Props } from "./index";

const meta: Meta<typeof CustomTextButton> = {
  title: "CustomTextButton",
  component: CustomTextButton,
};

export default meta;

type CustomTextButtonStory = typeof CustomTextButton & Props;

type Story = StoryObj<CustomTextButtonStory>;

export const Default: Story = (args: CustomTextButtonStory) => {
  return (
    <>
      <CustomTextButton {...args} />
    </>
  );
};

Default.args = {
  subTextIsVisible: false,
  subText: "スコア",
  mainText: "Hello World",
  buttonColorScheme: "teal",
  buttonText: "Start",
  clickFunc: () => {
    return console.log("Hello World");
  },
};
