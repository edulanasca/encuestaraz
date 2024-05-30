import { Flex, FormControl, FormLabel, RadioGroup, Radio, Stack, Box, useRadioGroup } from "@chakra-ui/react"
import Encuestaraz from "../types/Encuestaraz";
import React from "react";
import RadioCard from "./CustomRadio";
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

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: prop,
        defaultValue: formData[prop]?.toString(),
        onChange: updateFunc,
    });

    const group = getRootProps();

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
            <Box {...group}>
                <Stack
                    direction="row"
                    gap={"0"}
                    position={"relative"}
                    _before={{
                        content: '""',
                        position: "absolute",
                        height: "6px",
                        width: "calc(100%*(0.85))",
                        bg: "shoppingPreferencesCheckbox",
                        left: "50%",
                        transform: {base: "translateX(-46.4%)", xs: "translateX(-50%)"},
                        top: "6px",
                    }}
                >
                    {options.map((option, index) => {
                        const radio = getRadioProps({ value: option });
                        return (
                            <RadioCard
                                key={option}
                                {...radio}
                                customParentStyles={{
                                    flexDirection: "column",
                                    flex: "0 0 calc(100%/7)",
                                    rowGap: "8px"
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
                            </RadioCard>
                        )
                    })}

                </Stack>
            </Box>
        </FormControl>
    )
}

