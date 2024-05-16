import {Button, Flex, useToast} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {useFormContext} from "encuestaraz/app/FormContext";

interface NavigationButtonsProps {
  next: string;
  back: string;
  isLastPage?: boolean;
}

export default function NavigationButtons({next, back, isLastPage}: NavigationButtonsProps) {
  const router = useRouter();
  const {formData} = useFormContext();
  const toast = useToast();

  async function goNext() {
    if (isLastPage) {
      // Include here the use of the endpoint
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
          toast({description: result.message, status: "success"});
        } else {
          toast({title: "Ops!", description: result.message || "Something went wrong", status: "error"});
        }
      } catch (error) {
        toast({title: "Ops!", description: error?.toString(), status: "error"});
        console.error('Error:', error);
      }
    } else {
      router.push(next);
    }
  }

  function goBack() {
    router.push(back);
  }

  return (
    <Flex>
      <Button onClick={goBack}>Retroceder</Button>
      <Button onClick={goNext}>{isLastPage ? "Finalizar" : "Continuar"}</Button>
    </Flex>
  );
}