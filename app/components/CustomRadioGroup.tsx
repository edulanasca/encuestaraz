import {RadioGroup, Radio, Stack, Box, Text} from '@chakra-ui/react';
import {useFormContext} from "encuestaraz/app/FormContext";
import Encuestaraz from "encuestaraz/app/types/Encuestaraz";

interface CustomRadioGroupProps {
  prop: keyof Encuestaraz,
  text: string;
  options: string[]
}

export default function CustomRadioGroup({prop, text, options}: CustomRadioGroupProps) {
  const {formData, updateFormData} = useFormContext();

  return (
    <Box p={5} borderRadius="md">
      <Text
        fontSize="lg"
        fontWeight="bold"
        color={"rgb(196,213,249)"}
        mb={4}
        fontFamily={"montserrat"}
        paddingLeft={6}
      >
        {text}
      </Text>
      <RadioGroup
        onChange={(val) => {
          updateFormData({...formData, [prop]: val});
        }}
        value={formData[prop]?.toString()}
        textColor={"rgb(196,213,249)"}
      >
        <Stack direction="column">
          {
            options.map(option => (
              <Radio
                key={option}
                value={option}
                _checked={{bg: "rgb(202,149,71)", filter: "blur(1px)", border: "none"}}
                bg={"rgb(8, 17, 43)"}
                borderColor={"rgb(8, 17, 43)"}
              >
                <Text fontWeight={formData[prop] === option ? "bold" : undefined}>
                  {option}
                </Text>
              </Radio>))
          }
        </Stack>
      </RadioGroup>
    </Box>
  );
}
