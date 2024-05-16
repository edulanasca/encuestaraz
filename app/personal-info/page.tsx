'use client';

import CustomInput from "../components/CustomInput";
import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import {Box, VStack} from "@chakra-ui/react";

export default function Page() {
  return (
    <Box
      bgImage="url('bgs/b2.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <VStack>
        <CustomInput name="email" label="Correo electrónico"/>
        <CustomInput name="edad" label="Edad"/>
        <CustomInput name="nombre" label="Nombre"/>
        <CustomInput name="apellido" label="Apellido"/>
        <CustomInput name="ocupacion" label="Ocupación"/>
      </VStack>
      <NavigationButtons next={"/shopping-preferences"} back={"/"}/>
    </Box>
  );
}