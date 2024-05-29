import { Box, Text, useRadioGroup, Stack, FormControl, FormLabel } from '@chakra-ui/react';
import { useFormContext } from "encuestaraz/app/FormContext";
import RadioCard from "./CustomRadio";
import Encuestaraz from "encuestaraz/app/types/Encuestaraz";

interface CustomRadioGroupProps {
  prop: keyof Encuestaraz;
  text: string;
  options: string[];
}

export default function CustomRadioGroup({ prop, text, options }: CustomRadioGroupProps) {
  const { formData, updateFormData } = useFormContext();

  const updateFunc = (newVal: string) => {
    updateFormData({ ...formData, [prop]: newVal });
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: prop,
    defaultValue: formData[prop]?.toString(),
    onChange: updateFunc,
  });

  const group = getRootProps();

  return (
    <Box py={4} px={8} borderRadius="md">
      <FormControl isRequired>
        <FormLabel
          fontSize="lg"
          fontWeight="bold"
          color="rgb(196,213,249)"
          mb={4}
          fontFamily="montserrat"
          paddingLeft={6}
        >
          {text}
        </FormLabel>
        <Box
          {...group}
          textColor="rgb(196,213,249)"
        >
          <Stack
            direction="column"
            position="relative"
            _after={{
              content: '""',
              height: "calc(100% - 10px)",
              width: "6px",
              bg: "shoppingPreferencesCheckbox",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "5px",
            }}
          >
            {options.map((option, index) => {
              const shape = index === 0 ? 'top' : (index === options.length - 1 ? 'bottom' : 'middle');
              const radio = getRadioProps({ value: option });
              return (
                <RadioCard
                  key={option}
                  {...radio}
                  shape={shape}
                >
                  <Text fontWeight={formData[prop] === option ? "bold" : undefined}>
                    {option}
                  </Text>
                </RadioCard>
              );
            })}
          </Stack>
        </Box>
      </FormControl>
    </Box>
  );
}
