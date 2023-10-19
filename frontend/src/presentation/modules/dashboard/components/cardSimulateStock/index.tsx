import {
    Content,
    ContentResult,
    Description,
    DescriptionResult,
    Feedback,
    Header,
    HeaderResult,
    Label,
    Title,
    TitleResult,
    Value,
    ViewPrices,
    ViewQuantityStocks,
    ViewValue,
    Wrapper
} from "./styles.ts";
import {InputCurrency} from "../../../../components/inputCurrency";
import {InputDate} from "../../../../components/inputDate";
import {Button} from "../../../../components/button";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useStock} from "../../../../hooks/useStocks.tsx";


export const CardSimulateStock = () => {

    const {
        getGainsOfStock,
        gainsOfStock,
    } = useStock();

    const handleSubmit = (values: {
        currency: string,
        date: string
    }) => {
        getGainsOfStock(values.date, values.currency)
    }

    const validationSchema = yup.object({
        currency: yup.number().required('O campo moeda é obrigatório'),
        date: yup.date().required('O campo data é obrigatório'),
    });


    const formik = useFormik({
        initialValues: {
            currency: '',
            date: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        },
    });

    return (
        <Wrapper>
            <Header>
                <Title>Faça uma projeção</Title>
                <Description>Selecione uma data específica e um valor, para fazermos uma projeção de
                    ganhos. </Description>
            </Header>
            <Content>
                <form onSubmit={formik.handleSubmit}>
                    <InputCurrency
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="currency"
                    />

                    {formik.touched.currency && formik.errors.currency ? (
                        <Feedback>{formik.errors.currency}</Feedback>
                    ) : null}

                    <InputDate
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="date"
                    />

                    {formik.touched.date && formik.errors.date ? (
                        <Feedback>{formik.errors.date}</Feedback>
                    ) : null}

                    <Button onClick={() => formik.handleSubmit()}/>
                </form>
                {
                    gainsOfStock && (
                        <ContentResult>
                            <HeaderResult>
                                <TitleResult>AVA</TitleResult>
                                <DescriptionResult>{gainsOfStock.purchasedAt}</DescriptionResult>
                            </HeaderResult>

                            <ViewPrices>
                                <ViewValue>
                                    <Label>Último preço</Label>
                                    <Value>{formatCurrency(gainsOfStock.lastPrice)}</Value>
                                </ViewValue>
                                <ViewValue>
                                    <Label>Preço na data</Label>
                                    <Value>{formatCurrency(gainsOfStock.priceAtDate)}</Value>
                                </ViewValue>
                            </ViewPrices>
                            <ViewQuantityStocks>
                                <ViewValue>
                                    <Label>Quantidade de ações</Label>
                                    <Value>{gainsOfStock.purchasedAmount} unidades</Value>
                                </ViewValue>
                            </ViewQuantityStocks>
                            <ViewValue>
                                <Label>Total ganho</Label>
                                <Value>{formatCurrency(gainsOfStock.capitalGains)}</Value>
                            </ViewValue>
                        </ContentResult>
                    )
                }
            </Content>
        </Wrapper>
    )
}
