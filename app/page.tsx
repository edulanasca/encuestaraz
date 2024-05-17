import {Box, Button, Text, VStack} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Encuestaraz</title>
        <meta name="description"
              content="Tus respuestas serán nuestra guía para emprender el camino hacia un emocionante proyecto. #montaraz"/>
      </Head>
      <Box
        bgImage="url('/bgs/b1.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <VStack spacing={4} p={5} maxWidth="sm" bg="transparent" borderRadius="lg">
          <Text fontSize="3xl" fontWeight="medium" textAlign="center" color="white" fontFamily="montserrat"
                letterSpacing={4}>
            ¡Hola!
          </Text>
          <Box>
            <Text fontSize="xl" fontStyle="italic" textAlign="center" color="white" fontFamily="bodoniModa">
              Agradecemos que estés aquí,
            </Text>
            <Text fontSize="xl" textAlign="center" color="white" fontFamily="bodoniModa">
              entendemos que ningún formulario es entretenido, pero tus respuestas serán
              nuestra guía para emprender el camino hacia un emocionante proyecto.
            </Text>
            <Text fontSize="xl" fontWeight="bold" textAlign="center" color="white" fontFamily="bodoniModa">
              #montaraz
            </Text>
          </Box>
          <Box>
            <Text fontSize="xl" textAlign="center" color="white" fontFamily="bodoniModa">
              A continuación, encontrarás una serie de preguntas asociadas a la ropa.
            </Text>
            <Text fontSize="xl" textAlign="center" color="white" fontFamily="bodoniModa">
              El objetivo es entender cómo te relacionas con los productos textiles, y qué tienes en cuenta para
              elegirlos.
            </Text>
          </Box>
          <Text fontSize="lg" fontStyle="italic" fontWeight="bold" textAlign="center" color="rgb(166, 181, 211)"
                fontFamily="bodoniModa">
            Completar esta encuesta te tomará aproximadamente cinco minutos.
          </Text>
          <Text fontSize="lg" fontStyle="italic" fontWeight="bold" textAlign="center" color="rgb(166, 181, 211)"
                fontFamily="bodoniModa">
            Tus datos serán tratados confidencialmente.
          </Text>
        </VStack>
        <Box marginTop={16}>
          <Link href="/personal-info" passHref>
            <Button
              colorScheme="unstyled"
              size="lg"
              textColor="rgb(203, 150, 71)"
              borderBottom="2px solid rgb(203, 150, 71)"
              borderBottomRadius={0}
              borderBottomWidth="thick"
              fontFamily="montserrat"
              fontWeight="bold"
            >
              comenzar
            </Button>

          </Link>
        </Box>
      </Box>
    </>
  );
}
