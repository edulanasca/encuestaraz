'use client';

import CustomInput from "../components/CustomInput";
import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import {Box, Center, VStack} from "@chakra-ui/react";
import Stepper from "encuestaraz/app/components/Stepper";

export default function Page() {
  return (
    <Box
      bgImage="url('bgs/b2.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <Center paddingTop={"100px"}>
        <Stepper ix={0} total={3}/>
      </Center>
      <VStack
        gap={8}
        paddingY={"80px"}
        paddingX={"40px"}
      >
        <CustomInput name="email" label="Correo electrónico" placeholder={"Ejemplo: clara.bow@gmail.com"}/>
        <CustomInput name="edad" label="Edad" placeholder={"Tu edad en números. Ejemplo: 37"}/>
        <CustomInput name="nombre" label="Nombre" placeholder={"Tu primer nombre"}/>
        <CustomInput name="apellido" label="Apellido" placeholder={"Tu primer apellido"}/>
        <CustomInput name="ocupacion" label="Ocupación" placeholder={"¿A qué te dedicas? Ejemplo: Estudiante, contadora..."}/>
      </VStack>
      <Box paddingTop={"0px"}>
        <NavigationButtons next={"/shopping-preferences"} back={"/"}/>
      </Box>
    </Box>
  );
}