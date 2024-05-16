'use client';

import {FieldValues} from "react-hook-form";
import {useFormContext} from "encuestaraz/app/FormContext";
import {useRouter} from "next/navigation";
import CustomRadioGroup from "encuestaraz/app/components/CustomRadioGroup";
import NavigationButtons from "encuestaraz/app/components/NavigationButtons";
import {Box} from "@chakra-ui/react";

export default function Page() {
  const { updateFormData } = useFormContext();
  const router = useRouter();

  const onSubmit = (data: FieldValues) => {
    updateFormData(data);
    router.push('/clothing-preferences');
  };

  return (
    <Box
      bgImage="url('bgs/b3.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
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