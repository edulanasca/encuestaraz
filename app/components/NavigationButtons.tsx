import {Button, HStack, useToast} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {useFormContext} from "encuestaraz/app/FormContext";
import {useState} from "react";

interface NavigationButtonsProps {
  next: string;
  back: string;
  isLastPage?: boolean;
  validateForm?: () => boolean;
}

export default function NavigationButtons({next, back, isLastPage, validateForm}: NavigationButtonsProps) {
  const router = useRouter();
  const {formData, updateFormData} = useFormContext();
  const toast = useToast();
  const [isSaving, setIsSaving] = useState(false);

  async function goNext() {
    if (validateForm && !validateForm()) {
      toast({
        title: "Form Incompleto",
        description: "Por favor llena todos los campos.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    } else if (isLastPage) {
      setIsSaving(true);
      try {
        const response = await fetch('/api/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          updateFormData({_id: result.result.insertedId});
          toast({description: result.message, status: "success"});
          router.push(next);
        } else {
          toast({title: "Ops!", description: result.message || "Algo salió mal", status: "error"});
          console.error('Error:', result.message);
          setIsSaving(false);
        }
      } catch (error) {
        toast({title: "Ops!", description: error?.toString(), status: "error"});
        console.error('Error:', error);
        setIsSaving(false);
      }
    } else {
      router.push(next);
    }
  }

  function goBack() {
    router.push(back);
  }

  return (
    <HStack
      gap={6}
      justifyContent="center"
      pt={8} pb={10}
    >
      <Button
        onClick={goBack}
        colorScheme="unstyled"
        size="sm"
        textColor="montaGold"
        borderBottom="2px solid rgb(203, 150, 71)"
        borderBottomRadius={0}
        borderBottomWidth="thick"
        fontFamily="montserrat"
        fontWeight="bold"
        isLoading={isSaving}
      >
        Retroceder
      </Button>
      <Button
        onClick={goNext}
        colorScheme="unstyled"
        size="sm"
        textColor="montaGold"
        borderBottom="2px solid rgb(203, 150, 71)"
        borderBottomRadius={0}
        borderBottomWidth="thick"
        fontFamily="montserrat"
        fontWeight="bold"
        isLoading={isSaving}
      >
        {isLastPage ? "Finalizar" : "Continuar"}
      </Button>
    </HStack>
  );
}
