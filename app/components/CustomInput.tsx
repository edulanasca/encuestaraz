import React from 'react';
import {Input, FormControl, FormLabel} from '@chakra-ui/react';
import {useFormContext} from 'encuestaraz/app/FormContext';
import Encuestaraz from "encuestaraz/app/types/Encuestaraz";

interface CustomInputProps {
  name: keyof Encuestaraz;
  label: string;
  placeholder?: string;
  isNumber?: boolean;
}

export default function CustomInput({name, label, placeholder, isNumber}: CustomInputProps) {
  const {formData, updateFormData} = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNumber || value.match(/^\d*$/)) {
      updateFormData({[name]: value});
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
      >
        {label}
      </FormLabel>
      <Input
        id={name}
        type={isNumber ? "number" : "text"}
        value={formData[name] as string}
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{textAlign: "center", textColor: "rgb(85,93,160)", fontSize: "xs"}}
        borderRadius="full"
        color='rgb(85,93,160)'
        backgroundColor="rgb(196,213,249)"
        isRequired
      />
    </FormControl>
  );
};
