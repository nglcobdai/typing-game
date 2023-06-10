import React from "react";

import { Button, Text, VStack } from "@chakra-ui/react";

import { VSpacer } from "@/components/common/Spacer";

export type Props = {
  subTextIsVisible: boolean;
  subText: string;
  mainText: string;
  buttonColorScheme:
    | "whiteAlpha"
    | "blackAlpha"
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "blue"
    | "cyan"
    | "purple"
    | "pink"
    | "linkedin"
    | "facebook"
    | "messenger"
    | "whatsapp"
    | "twitter"
    | "telegram";
  buttonText: string;
  clickFunc: () => void;
};

export const CustomTextButton = ({
  subTextIsVisible,
  subText,
  mainText,
  buttonColorScheme,
  buttonText,
  clickFunc,
}: Props) => {
  return (
    <>
      <VStack justify="center">
        {subTextIsVisible && (
          <>
            <Text fontSize="3xl" as="b">
              {subText}
            </Text>
            <VSpacer size={5} />
          </>
        )}
        <Text fontSize="6xl" as="b">
          {mainText}
        </Text>
        <VSpacer size={10} />
        <Button colorScheme={buttonColorScheme} onClick={clickFunc} size="lg">
          {buttonText}
        </Button>
      </VStack>
    </>
  );
};
