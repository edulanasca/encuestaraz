'use client';

import CustomInput from "../components/CustomInput";
import NavigationButtons from "encuestaraz/app/components/NavigationButtons";

export default function Page() {
  return (
    <>
      <CustomInput name="email" label="Correo electrónico" />
      <CustomInput name="edad" label="Edad" />
      <CustomInput name="nombre" label="Nombre" />
      <CustomInput name="apellido" label="Apellido" />
      <CustomInput name="ocupacion" label="Ocupación" />
      <NavigationButtons next={"/shopping-preferences"} back={"/"}/>
    </>
  );
}