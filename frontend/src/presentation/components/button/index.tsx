import React from "react";
import {Label, Wrapper} from "./styles.ts";

interface IProps extends React.HTMLProps<HTMLDivElement> {
}

export const Button = ({...rest}: IProps) => {
    return (
        <Wrapper {...rest}>
            <Label>Projetar</Label>
        </Wrapper>
    )
}
