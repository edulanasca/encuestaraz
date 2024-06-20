'use client';

import CustomRadioGroup from "encuestaraz/app/components/CustomRadioGroup";
import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import {Box, Center} from "@chakra-ui/react";
import Stepper from "encuestaraz/app/components/Stepper";
import CustomDivider from "encuestaraz/app/components/CustomDivider";
import {useFormContext} from "encuestaraz/app/FormContext";

export default function Page() {
  const { formData } = useFormContext();
  function validateForm() {
    return Boolean(formData.preferenciaCompra && formData.metodoPagoFisica && formData.metodoPagoOnline);
  }

  return (
    <Box
      bgImage="url('bgs/b3.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <Center paddingTop={"22px"}>
        <Stepper ix={1} total={3}/>
      </Center>
      <CustomRadioGroup
        prop={"preferenciaCompra"}
        text={"¿En dónde prefieres comprar ropa?"}
        options={[
          "Totalmente por internet",
          "Mayormente en internet, aunque a veces compro en tienda física",
          "Mayormente en tienda física, aunque a veces compro en internet",
          "Totalmente en tienda física"
        ]}
      />
      <CustomDivider/>
      <CustomRadioGroup
        prop={"metodoPagoFisica"}
        text={"¿Qué método de pago usas en tiendas físicas?"}
        options={[
          "Efectivo",
          "Datáfono (crédito o débito)",
          "Servicios de terceros (PayPal, Addi...)",
          "Aplicaciones de bajo monto (Nequi, Daviplata...)",
          "No hago compras en tienda física"
        ]}
      />
      <CustomDivider/>
      <CustomRadioGroup
        prop={"metodoPagoOnline"}
        text={"¿Qué método de pago usas cuando compras por internet?"}
        options={[
          "Efectivo (Efecty)",
          "Pago por PSE",
          "Pago con tarjeta de crédito o débito",
          "Aplicaciones de bajo monto (Nequi, Daviplata...)",
          "No hago compras en internet"
        ]}
      />
      <NavigationButtons next={"/clothing-preferences"} back={"/personal-info"} validateForm={validateForm}/>
    </Box>
  );
}