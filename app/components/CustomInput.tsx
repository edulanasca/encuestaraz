import React from 'react';
import { Input, FormControl, FormLabel, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, NumberInputProps } from '@chakra-ui/react';
import { useFormContext } from 'encuestaraz/app/FormContext';
import Encuestaraz from "encuestaraz/app/types/Encuestaraz";

interface CustomInputProps {
  name: keyof Encuestaraz;
  label: string;
  placeholder?: string;
  isNumber?: boolean;
  numberInputProps?: NumberInputProps;
}

export default function CustomInput({ name, label, placeholder, isNumber, numberInputProps }: CustomInputProps) {
  const { formData, updateFormData } = useFormContext();

  const format = (value: number) => value.toLocaleString();
  const handleChange = (valueString: string) => {
    const value = valueString;
    if (!isNumber || value.match(/^\d*$/)) {
      updateFormData({ [name]: value });
    } else {
      updateFormData({ [name]: value.replace(/,/g, '') });
    }
  };

  return (
    <FormControl isRequired>
      <FormLabel
        htmlFor={name}
        color='rgb(196,213,249)'
        textAlign={"center"}
        fontFamily={"montserrat"}
        px={2}
        fontSize="lg"
        fontWeight="bold"
      >
        {label}
      </FormLabel>
      {
        isNumber ?
          <NumberInput
            value={format(Number(formData[name] ?? 0))}
            onChange={(valueString) => handleChange(valueString)}
            {...numberInputProps}
          >
            <NumberInputField
              borderRadius="full"
              color='rgb(85,93,160)'
              backgroundColor="rgb(196,213,249)"
              textAlign="center"
              fontSize="xs"
              placeholder={placeholder}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          :
          <Input
            id={name}
            value={formData[name] as string}
            onChange={(event) => handleChange(event.target.value)}
            placeholder={placeholder}
            _placeholder={{ textAlign: "center", textColor: "rgb(85,93,160)", fontSize: "xs" }}
            borderRadius="full"
            color='rgb(85,93,160)'
            backgroundColor="rgb(196,213,249)"
            isRequired
          />
      }
    </FormControl>
  );
};
