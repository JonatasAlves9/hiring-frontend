import {Input, Label, Wrapper} from "./styles.ts";
import {useState} from "react";

export const InputCurrency = () => {

    const [value, setValue] = useState('');

    const handleChange = (e: any) => {
        let val = e.target.value;
        val = val.replace(/\D/g, "");
        val = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(val / 100);
        setValue(val);
    };


    return (
        <Wrapper>
            <Input value={value} onChange={handleChange} placeholder="R$ 1.500,00"/>
            <Label>BRL</Label>
        </Wrapper>
    )
}
