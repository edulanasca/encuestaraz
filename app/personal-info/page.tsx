'use client';

import CustomInput from "../components/CustomInput";
import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import {Box, Center, VStack} from "@chakra-ui/react";
import Stepper from "encuestaraz/app/components/Stepper";
import { useFormContext } from 'encuestaraz/app/FormContext';

export default function Page() {
  const { formData } = useFormContext();

  const validateForm = () => {
    return Boolean(formData.email && formData.edad && formData.nombre && formData.apellido && formData.ocupacion);
  };

  return (
    <Box
      bgImage="url('bgs/b2.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <Center paddingTop={"70px"}>
        <Stepper ix={0} total={3}/>
      </Center>
      <VStack
        gap={8}
        paddingY={"60px"}
        paddingX={"40px"}
      >
        <CustomInput name="email" label="Correo electrónico" placeholder={"Ejemplo: clara.bow@gmail.com"}/>
        <CustomInput name="edad" label="Edad" placeholder={"Tu edad en números. Ejemplo: 37"} isNumber numberInputProps={{min: 0, max: 99}}/>
        <CustomInput name="nombre" label="Nombre" placeholder={"Tu nombre preferido"}/>
        <CustomInput name="apellido" label="Apellido" placeholder={"Tu apellido"}/>
        <CustomInput name="ocupacion" label="Ocupación" placeholder={"¿A qué te dedicas? Ejemplo: Estudiante, contadora..."}/>
      </VStack>
      <Box paddingTop={"0px"}>
        <NavigationButtons next={"/shopping-preferences"} back={"/"} validateForm={validateForm}/>
      </Box>
    </Box>
  );
}
