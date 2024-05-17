import {Divider, HStack} from "@chakra-ui/react";

export default function CustomDivider() {
  return (
    <HStack
      paddingX={"35px"}
      gap={10}
    >
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>
    </HStack>
  )
}