import { PropsWithChildren } from "react";
import { Box, useRadio, UseRadioProps, Flex } from "@chakra-ui/react";

interface RadioCardProps extends PropsWithChildren, UseRadioProps {
  shape: 'top' | 'middle' | 'bottom';
}

export default function RadioCard({ shape, ...props }: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  const borderRadius = {
    top: {
      content: '""',
      top: "65%",
      left: "50%",
      transform: "translateX(-50%)",
      borderTop: "16px solid rgb(8, 17, 43)",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      position: "absolute",
      zIndex: "-10"
    },
    middle: {
      content: '""',
      top: "65%",
      left: "50%",
      transform: "translateX(-50%)",
      borderTop: "16px solid rgb(8, 17, 43)",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      position: "absolute",
      zIndex: "-10"
    },
    bottom: {
      content: '""',
      top: "-65%",
      left: "50%",
      transform: "translateX(-50%)",
      borderBottom: "16px solid rgb(8, 17, 43)",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      position: "absolute",
      zIndex: "-10"
    }
  };

  return (
    <Flex as="label" alignItems="center" columnGap="16px">
      <input {...input} />
      <Box
        {...checkbox}
        _checked={{
          bgColor: "rgb(202,149,71)",
          filter: "blur(1px)",
          border: "none",
        }}
        cursor="pointer"
        borderRadius="50%"
        bgColor="shoppingPreferencesCheckbox"
        h="16px"
        w="16px"
        p="2px"
        flex="0 0 auto"
        zIndex="10"
        position="relative"
        _after={borderRadius[shape]}
        _before={{
          display: shape == 'middle' ? "block" : "none",
          ...borderRadius['bottom']
        }}
      />
      {props.children}
    </Flex>
  );
}
