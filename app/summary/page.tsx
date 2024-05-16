'use client';


import {Box, IconButton, Text, useToast} from "@chakra-ui/react";
import {useFormContext} from "encuestaraz/app/FormContext";

export default function Page() {
  const {formData} = useFormContext();
  const toast = useToast();

  async function onSubscribe() {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: formData.email}),
      });

      const result = await response.json();
      if (response.ok) {
        toast({description: result.message})
      } else {
        toast({title: "Ops!", description: result.message || "Something went wrong", status: "error"});
      }
    } catch (error) {
      toast({title: "Ops!", description: error?.toString(), status: "error"});
      console.error('Error:', error);
    }
  }

  return (
    <Box
      bgImage="url('bgs/b5.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      <Text>{"¡Eso es todo!"}</Text>
      <Text>Hemos llegado al final, aunque es ahora cuando comienza nuestro camino.</Text>
      <Text>A partir de ahora, tenemos un lazo contigo.</Text>
      <Text>La amabilidad siempre vale la pena.</Text>
      <Text>{"¿Te gustaría saber de que se trata todo esto?"}</Text>
      <Text>Acepto mantenerme al tanto por correo electrónico. Soy consciente que puedo desuscribirme en cualquier momento.</Text>
      <IconButton aria-label={"accept"} onClick={onSubscribe}/>
    </Box>
  );
}