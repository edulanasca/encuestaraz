import {Button, Flex} from "@chakra-ui/react";
import {useRouter} from "next/navigation";

interface NavigationButtonsProps {
  next: string;
  back: string;
  isLastPage?: boolean;
}

export default function NavigationButtons({next, back, isLastPage}: NavigationButtonsProps) {
  const router = useRouter();

  function goNext() {
    router.push(next);
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