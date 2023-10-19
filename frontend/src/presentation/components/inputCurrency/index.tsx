import {Input, Label, Wrapper} from "./styles.ts";
import React, {useState} from "react";

interface IProps extends React.HTMLProps<HTMLInputElement> {
    onChange: (e: any) => void;
}

export const InputCurrency = ({onChange, ...rest}: IProps) => {

    const [value, setValue] = useState('');

    const handleChange = (e: any) => {
        if (e.target.value === "") {
            onChange(e);
            setValue('')
            return
        }
        let val = e.target.value;

        val = val.replace(/\D/g, "");

        const decimalValue = parseFloat(val) / 100;

        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(decimalValue);

        e.target.value = decimalValue.toString();
        onChange(e);

        setValue(formattedValue);
    };

    return (
        <Wrapper>
            <Input  {...rest} onChange={handleChange} placeholder="R$ 1.500,00" value={value}/>
            <Label>BRL</Label>
        </Wrapper>
    )
}
