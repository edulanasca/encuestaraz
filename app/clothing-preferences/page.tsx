'use client';

import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import CustomTextArea from "encuestaraz/app/components/CustomTextArea";
import CustomRadioGroup from "encuestaraz/app/components/CustomRadioGroup";
import CustomInput from "encuestaraz/app/components/CustomInput";
import {Box, Center} from "@chakra-ui/react";
import Stepper from "encuestaraz/app/components/Stepper";
import CustomDivider from "encuestaraz/app/components/CustomDivider";
import {useFormContext} from "encuestaraz/app/FormContext";

export default function Page() {
  const {formData} = useFormContext();

  function validateForm() {
    return Boolean(formData.prioridadCompra && formData.calidadPrenda && formData.frecuenciaCompra && formData.gastoConjuntoRopa && formData.marcaTiendaFavorita);
  }

  return (
    <Box
      bgImage="url('bgs/b4.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <Center paddingTop={"40px"} paddingBottom={"20px"}>
        <Stepper ix={1} total={3}/>
      </Center>
      <CustomRadioGroup
        prop={"prioridadCompra"}
        text={"¿Qué priorizo más al comprar ropa?"}
        options={[
          "Calidad de la prenda",
          "Calidad / Precio",
          "Buen precio"
        ]}
      />
      <CustomDivider/>
      <Box py={8} px={8}>
        <CustomTextArea
          name={"calidadPrenda"}
          label={"¿Cómo te das cuenta que una prenda es de mala calidad?"}
          placeholder={"¿En qué factores te fijas? (Hilos, costuras, resistencia...)"}
        />
      </Box>
      <CustomDivider/>
      <Box py={2}>
        <CustomRadioGroup
          prop={"frecuenciaCompra"}
          text={"¿Con que frecuencia compras ropa? (puedes marcar un aproximado)."}
          options={[
            "Compro una o más veces por semana.",
            "Compro cada dos semanas.",
            "Compro una vez por mes.",
            "Compro cada dos meses.",
            "Compro cada tres meses.",
            "Compro cada seis meses.",
            "Compro una vez por año o menos."
          ]}
        />
      </Box>
      <CustomDivider/>
      <Box py={6} px={10}>
        <CustomInput
          name={"gastoConjuntoRopa"}
          label={"¿Cuanto gastas aproximadamente en un conjunto completo de ropa? (zapatos, pantalon, blusa, accesorios y demas)"}
        />
      </Box>
      <CustomDivider/>
      <Box py={6} px={10}>
        <CustomInput
          name={"marcaTiendaFavorita"}
          label={"¿Cual es tu marca o tienda de ropa favorita? ¿Puedes contarnos por qué lo es?"}
        />
      </Box>
      <Box pt={8} pb={10}>
        <NavigationButtons next={"/summary"} back={"/shopping-preferences"} validateForm={validateForm} isLastPage/>
      </Box>
    </Box>
  );
}