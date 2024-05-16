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
    <Box bg="blue.900" p={5} borderRadius="md">
      <Text fontSize="lg" fontWeight="bold" color="white" mb={4}>
        {text}
      </Text>
      <RadioGroup
        onChange={(val) => {
          updateFormData({...formData, [prop]: val});
        }}
        value={formData[prop]?.toString()}
      >
        <Stack direction="column">
          {
            options.map(option => (<Radio key={option} value={option} color="white">{option}</Radio>))
          }
        </Stack>
      </RadioGroup>
    </Box>
  );
}
