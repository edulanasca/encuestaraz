import React from 'react';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useFormContext } from 'encuestaraz/app/FormContext';
import Encuestaraz from "encuestaraz/app/types/Encuestaraz";

interface CustomInputProps {
  name: keyof Encuestaraz;
  label: string;
}

export default function CustomInput ({ name, label }: CustomInputProps) {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [name]: event.target.value });
  };

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} value={formData[name] as string} onChange={handleChange} />
    </FormControl>
  );
};
