import React from 'react';
import {Textarea, FormControl, FormLabel} from '@chakra-ui/react';
import {useFormContext} from 'encuestaraz/app/FormContext';
import Encuestaraz from "encuestaraz/app/types/Encuestaraz";

interface CustomInputProps {
  name: keyof Encuestaraz;
  label: string;
  placeholder: string;
}

export default function CustomTextArea({name, placeholder, label}: CustomInputProps) {
  const {formData, updateFormData} = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({[name]: event.target.value});
  };

  return (
    <FormControl>
      <FormLabel
        htmlFor={name}
        color="rgb(196,213,249)"
        fontFamily="montserrat"
        fontWeight="bold"
      >{label}</FormLabel>
      <Textarea
        id={name}
        value={formData[name] as string}
        placeholder={placeholder}
        onChange={handleChange}
        minW={"100%"}
        color='rgb(85,93,160)'
        backgroundColor="rgb(196,213,249)"
        borderRadius={"10px"}
        fontFamily="montserrat"
        fontSize={"medium"}
      />
    </FormControl>
  );
};
