'use client';

import CustomRadioGroup from "encuestaraz/app/components/CustomRadioGroup";
import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import {Box, Center} from "@chakra-ui/react";
import Stepper from "encuestaraz/app/components/Stepper";
import CustomDivider from "encuestaraz/app/components/CustomDivider";

export default function Page() {
  return (
    <Box
      bgImage="url('bgs/b3.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <Center paddingTop={"50px"}>
        <Stepper ix={1} total={3}/>
      </Center>
      <CustomRadioGroup
        prop={"preferenciaCompra"}
        text={"¿En donde prefieres comprar ropa?"}
        options={[
          "Totalmente por internet.",
          "Mayormente en internet, aunque a veces compro en tienda fisica.",
          "Mayormente en tienda fisica, aunque a veces compro en internet.",
          "Totalmente en tienda fisica."
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
          "No hago compras en tienda física."
        ]}
      />
      <CustomDivider/>
      <CustomRadioGroup
        prop={"metodoPagoOnline"}
        text={"¿Qué método de pago usas cuando compras por internet?"}
        options={[
          "Efectivo (Efecty)",
          "Pago por PSE",
          "Pago con tarjeta de crédito o débito.",
          "Aplicaciones de bajo monto (Nequi, Daviplata...)",
          "No hago compras en internet"
        ]}
      />
      <NavigationButtons next={"/clothing-preferences"} back={"/personal-info"}/>
    </Box>
  );
}