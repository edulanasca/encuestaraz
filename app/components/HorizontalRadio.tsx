import { Flex, FormControl, FormLabel, RadioGroup, Radio, Stack, Box } from "@chakra-ui/react"
import Encuestaraz from "../types/Encuestaraz";
import React from "react";
import { useFormContext } from "../FormContext";
import { log } from "console";

interface HorizontalRadioProps {
    prop: keyof Encuestaraz;
    text: string;
    options: string[];
}

export default function HorizontalRadio({ prop, text, options }: HorizontalRadioProps) {
    const { formData, updateFormData } = useFormContext();

    const updateFunc = (newVal: string) => {
      updateFormData({ ...formData, [prop]: newVal });
    };

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
            <RadioGroup onChange={updateFunc} value={formData[prop]?.toString() ?? ""}>
                <Stack direction="row" justify={{base: "center", md: "space-between"}}>
                    {options.map((option, index) => (
                        <Radio
                        key={index}
                        value={option}
                        display={"flex"}
                        flexDirection={"column"}
                        backgroundColor={"black"}
                        borderColor={"black"}
                        _checked={{
                            backgroundColor: "gold",
                            borderColor: "gold",
                            filter: "blur(1px)",
                        }}
                        >
                            <Flex flexDirection="column" alignItems="center" textAlign="center" marginLeft={0}>
                                {option.split("\n").map((line, idx) => (
                                    <Box key={idx} color={option.startsWith("x") ? "transparent" : "rgb(196,213,249)"}>
                                        {line}
                                        {idx !== option.split("\n").length - 1 && <br />}
                                    </Box>
                                ))}
                            </Flex>
                        </Radio>
                    ))}
                </Stack>
            </RadioGroup>
        </FormControl>
    )
}

