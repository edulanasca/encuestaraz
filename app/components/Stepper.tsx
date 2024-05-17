import {Box, HStack} from "@chakra-ui/react";

interface StepperProps {
  ix: number;
  total: number;
}

export default function Stepper({ix, total}: StepperProps) {
  return (
    <HStack
      filter={"blur(1px)"}
    >
      {
        Array.from({length: total}, (_, i) => i)
          .map(i => (
            <Box
              key={i}
              borderRadius={"100%"}
              backgroundColor={ix == i ? "white" : "rgb(14,1,244)"}
              width={"10px"}
              height={"10px"}
            />
          ))
      }
    </HStack>
  )
}