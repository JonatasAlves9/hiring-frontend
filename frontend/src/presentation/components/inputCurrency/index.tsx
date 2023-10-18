import {Input, Label, Wrapper} from "./styles.ts";

export const InputCurrency = () => {
    return (
        <Wrapper>
            <Input placeholder={"R$ 1.500,00"} type={'number'}/>
            <Label>BRL</Label>
        </Wrapper>
    )
}
