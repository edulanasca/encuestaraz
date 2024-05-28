// context/FormContext.tsx
import React, {createContext, FC, PropsWithChildren, useContext, useState} from 'react';
import Encuestaraz from "encuestaraz/app/types/Encuestaraz";

const FormContext = createContext<{
  formData: Encuestaraz,
  updateFormData: (newData: Partial<Encuestaraz>) => void
}>({
  formData: {
    id: "",
    apellido: "",
    calidadPrenda: "",
    edad: "",
    email: "",
    frecuenciaCompra: "",
    gastoConjuntoRopa: "",
    marcaTiendaFavorita: "",
    metodoPagoFisica: "",
    metodoPagoOnline: "",
    nombre: "",
    ocupacion: "",
    preferenciaCompra: "",
    prioridadCompra: "",
    suscrito: false,
  },
  updateFormData: () => {
  }
});

export const useFormContext = () => useContext<{
  formData: Encuestaraz,
  updateFormData: (newData: Partial<Encuestaraz>) => void
}>(FormContext);

export const FormProvider: FC<PropsWithChildren> = ({children}) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (newData: Record<keyof Encuestaraz, number | string>) => {
    setFormData(prev => ({...prev, ...newData}));
  };

  return (
    // @ts-ignore
    <FormContext.Provider value={{formData, updateFormData}}>
      {children}
    </FormContext.Provider>
  );
};
