import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Encuestaraz</title>
        <meta name="description" content="Tus respuestas serán nuestra guía para emprender el camino hacia un emocionante proyecto. #montaraz" />
      </Head>
      <Box
        // bgImage="url('/background.jpg')" // Asegúrate de reemplazar esto con tu imagen de fondo real
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={4} p={5} maxWidth="sm" bg="whiteAlpha.800" borderRadius="lg">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            ¡Hola!
          </Text>
          <Text textAlign="center">
            Agradecemos que estés aquí,
          </Text>
          <Text textAlign="center">
            entendemos que ningún formulario es entretenido, pero tus respuestas serán
            nuestra guía para emprender el camino hacia un emocionante proyecto.
          </Text>
          <Text textAlign="center">
            #montaraz
          </Text>
          <Text textAlign="center">
            A continuación, encontrarás una serie de preguntas asociadas a la ropa.
            El objetivo es entender cómo te relacionas con los productos textiles, y qué tienes en cuenta para elegirlos.
          </Text>
          <Text textAlign="center">
            Completar esta encuesta te tomará aproximadamente cinco minutos.
          </Text>
          <Text textAlign="center">
            Tus datos serán tratados confidencialmente.
          </Text>
          <Link href="/personal-info" passHref>
            <Button colorScheme="unstyled" size="lg" textColor="rgb(203, 150, 71)">
              Comenzar
            </Button>
          </Link>
        </VStack>
      </Box>
    </>
  );
}
