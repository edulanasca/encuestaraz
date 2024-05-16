'use client';

import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import CustomTextArea from "encuestaraz/app/components/CustomTextArea";
import CustomRadioGroup from "encuestaraz/app/components/CustomRadioGroup";
import CustomInput from "encuestaraz/app/components/CustomInput";
import {Box} from "@chakra-ui/react";

export default function Page() {

  return (
    <Box
      bgImage="url('bgs/b4.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <CustomTextArea
        name={"calidadPrenda"}
        label={"¿Cómo te das cuenta que una prenda es de mala calidad?"}
        placeholder={"¿En qué factores te fijas? (Hilos, costuras, resistencia...)"}
      />
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
      <CustomInput
        name={"gastoConjuntoRopa"}
        label={"¿Cuanto gastas aproximadamente en un conjunto completo de ropa? (zapatos, pantalon, blusa, accesorios y demas)"}
      />
      <CustomInput
        name={"marcaTiendaFavorita"}
        label={"¿Cual es tu marca o tienda de ropa favorita? ¿Puedes contarnos por qué lo es?"}
      />
      <NavigationButtons next={"/summary"} back={"/shopping-preferences"} isLastPage/>
    </Box>
  );
}