'use client';


import {IconButton, Text} from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Text>{"¡Eso es todo!"}</Text>
      <Text>Hemos llegado al final, aunque es ahora cuando comienza nuestro camino.</Text>
      <Text>A partir de ahora, tenemos un lazo contigo.</Text>
      <Text>La amabilidad siempre vale la pena.</Text>
      <Text>{"¿Te gustaría saber de que se trata todo esto?"}</Text>
      <Text>Acepto mantenerme al tanto por correo electrónico. Soy consciente que puedo desuscribirme en cualquier momento.</Text>
      <IconButton aria-label={"accept"}/>
    </>
  );
}