'use client';


import { Box, Center, IconButton, Image, Spacer, Text, useToast, VStack } from "@chakra-ui/react";
import { useFormContext } from "encuestaraz/app/FormContext";
import { CheckIcon } from "@chakra-ui/icons";

export default function Page() {
  const { formData, updateFormData } = useFormContext();
  const toast = useToast();
  const subStyle = { color: "montaGold", border: "1px solid rgb(203, 150, 71)" };
  //const [isSubscribed, setIsSubscribed] = useState(formData.suscrito);
  console.log(formData.suscrito);
  async function onSubscribe() {
    try {
      if (formData.suscrito) {
        const response = await fetch('/api/subscribe', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: formData._id, email: formData.email }),
        });

        const result = await response.json();
        if (response.ok) {
          toast({ description: result.message });
          updateFormData({ suscrito: false });
        } else {
          toast({ title: "Ops!", description: result.message || "Algo salió mal", status: "error" });
        }

      } else {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: formData._id, email: formData.email }),
        });

        const result = await response.json();
        if (response.ok) {
          toast({ description: result.message });
          updateFormData({ suscrito: true });
        } else {
          toast({ title: "Ops!", description: result.message || "Algo salió mal", status: "error" });
        }
      }
    } catch (error) {
      toast({ title: "Ops!", description: error?.toString(), status: "error" });
      console.error('Error:', error);
    }
  }

  return (
    <Center
      bgImage="url('bgs/b5.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
      flexDirection={"column"}
      py={"30%"}
      color={"white"}
      px={"6%"}
    >
      <VStack gap={4}>
        <Text
          textAlign={"center"}
          fontFamily={"montserrat"}
          fontSize={"x-large"}
          letterSpacing={2}
        >
          {"¡Eso es todo!"}
        </Text>
        <Text
          textAlign={"center"}
          fontFamily={"bodoniModa"}
          fontSize={"x-large"}
        >
          Hemos llegado al final, aunque es ahora cuando comienza nuestro camino.
        </Text>
      </VStack>
      <Spacer />
      <Text
        textAlign={"center"}
        fontFamily={"bodoniModa"}
        fontStyle={"italic"}
        fontWeight={"bold"}
        fontSize={"large"}
        color={"rgb(14,1,245)"}
      >
        A partir de ahora,
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={"bodoniModa"}
        fontStyle={"italic"}
        fontWeight={"bold"}
        fontSize={"large"}
        color={"rgb(14,1,245)"}
      >
        tenemos un lazo contigo.
      </Text>
      <Image
        src={"Listonflat.png"}
        alt={"Liston"}
        w={{ base: `${Math.round(1166 / 10)}px` }}
        h={{ base: `${Math.round(640 / 10)}px` }}
      />
      <Spacer />
      <VStack gap={4}>
        <Box>
          <Text
            textAlign={"center"}
            fontFamily={"montserrat"}
            fontWeight={"bold"}
          >
            La amabilidad siempre vale la pena.
          </Text>
          <Text
            textAlign={"center"}
            fontFamily={"montserrat"}
            fontWeight={"bold"}
          >
            {"¿Te gustaría saber de que se trata todo esto?"}
          </Text>
        </Box>
        <Text
          textAlign={"center"}
          fontFamily={"montserrat"}
        >
          Acepto mantenerme al tanto por correo electrónico. Soy consciente que puedo desuscribirme en cualquier
          momento.
        </Text>
        <IconButton
          aria-label={"accept"}
          icon={<CheckIcon />}
          onClick={onSubscribe}
          bg={"transparent"}
          border={formData.suscrito ? subStyle.border : "1px solid white"}
          color={formData.suscrito ? subStyle.color : "white"}
          borderRadius={"100%"}
          _hover={{ ...subStyle }}
        />
      </VStack>
      <VStack gap={4} justifyContent={"center"} alignItems={"center"}>
      </VStack>
    </Center>
  );
}
