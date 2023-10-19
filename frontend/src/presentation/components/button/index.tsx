import React from "react";
import {Label, Wrapper} from "./styles.ts";
import {Spinner} from "react-activity";
import {themeDark} from "../../style/themes.ts";

interface IProps extends React.HTMLProps<HTMLDivElement> {
    loading?: boolean
}

export const Button = ({loading = false, ...rest}: IProps) => {
    return (
        <Wrapper {...rest}>
            {
                loading ?
                    <Spinner color={themeDark.colors.white} size={13}/> :
                    <Label>Projetar</Label>
            }

        </Wrapper>
    )
}
