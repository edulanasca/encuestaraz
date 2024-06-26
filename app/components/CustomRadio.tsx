import { PropsWithChildren } from "react";
import { Box, useRadio, UseRadioProps, Flex, FlexProps } from "@chakra-ui/react";

interface RadioCardProps extends PropsWithChildren, UseRadioProps {
  customParentStyles?: FlexProps
}

export default function RadioCard({ ...props }: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Flex as="label" alignItems="center" columnGap="16px" {...props.customParentStyles}>
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
        
      />
      {props.children}
    </Flex>
  );
}
