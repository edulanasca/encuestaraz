'use client'

import {ChakraProvider} from '@chakra-ui/react'
import {FormProvider} from "encuestaraz/app/FormContext";
import theme from "encuestaraz/app/theme";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <FormProvider>
        {children}
      </FormProvider>
    </ChakraProvider>
  )
}