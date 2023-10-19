import {Input, Wrapper} from "./styles.ts";
import React from "react";

interface IProps extends React.HTMLProps<HTMLInputElement> {
}

export const InputDate = ({...rest}: IProps) => {
    return (
        <Wrapper>
            <Input placeholder={"R$ 1.500,00"} type={'date'} {...rest}/>
        </Wrapper>
    )
}
