import { Flex, FormControl, FormLabel, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react"
import Encuestaraz from "../types/Encuestaraz";
import { Fragment } from "react";

interface HorizontalRadioProps {
    prop: keyof Encuestaraz;
    text: string;
    options: string[];
}

export default function HorizontalRadio({ prop, text, options }: HorizontalRadioProps) {
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: options.length,
    })

    function handleClick(index: number) {
        console.log(index)
        setActiveStep(index);
    }

    return (
        <FormControl py={4} px={8} borderRadius="md" isRequired>
            <FormLabel
                fontSize="lg"
                fontWeight="bold"
                color="rgb(196,213,249)"
                mb={4}
                fontFamily="montserrat"
            >
                {text}
            </FormLabel>
            <Stepper size={{base: 'md', md: 'lg'}} index={activeStep} colorScheme="yellow">
                {options.map((option, index) => (
                    <Step key={index} onClick={() => handleClick(index)}>
                        <Flex flexDirection="column" alignItems="center" gap={2} textAlign={"center"}>
                            <StepIndicator backgroundColor="transparent">
                                <StepStatus
                                    active={`⭐️`}
                                    complete={`⭐️`}
                                />
                            </StepIndicator>
                            <StepDescription
                                color={option.startsWith("x") ? "transparent" : "rgb(196,213,249)"}
                                fontSize={{ base: "xs", md: "md" }}
                            >
                                {
                                    option.split("\n").map((line, idx) => (
                                        <p key={idx}>
                                            {line}
                                            {idx !== option.split("\n").length - 1 && <br />}
                                        </p>
                                    ))
                                }
                            </StepDescription>
                        </Flex>
                    </Step>
                ))}
            </Stepper>
        </FormControl>

    )
}
