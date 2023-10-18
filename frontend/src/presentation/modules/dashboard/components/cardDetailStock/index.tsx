import {Content, DescriptionValueStock, Header, Title, ValueStock, Wrapper} from "./styles.ts";

export const CardDetailStock = () => {
    return (
        <Wrapper>
            <Header>
                <Title>Val</Title>
            </Header>
            <Content>
                <ValueStock>R$ 26,343.24</ValueStock>
                <DescriptionValueStock>Valor Atual</DescriptionValueStock>
            </Content>
        </Wrapper>
    )
}
