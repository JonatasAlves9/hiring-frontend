import {ContentFlex, LogoSearch, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";
import {CardDetailStock} from "./components/cardDetailStock";
import {CardSimulateStock} from "./components/cardSimulateStock";
import {SearchInput} from "./components/searchInput";
import {useStock} from "../../hooks/useStocks.tsx";

export const Dashboard = () => {

    const {
        stockDetail,
        getDetailAboutStock,
        getGainsOfStock
    } = useStock();

    return (
        <Wrapper>
            {
                stockDetail ? (
                    <>
                        <IconBack/>
                        <ContentFlex>
                            <CardDetailStock/>
                            <CardSimulateStock getGainsOfStock={getGainsOfStock} gainsOfStock={{
                                "name": "VAL",
                                "lastPrice": 62.83,
                                "priceAtDate": 62.92,
                                "purchasedAmount": 10.5,
                                "purchasedAt": "2022-11-01",
                                "capitalGains": -0.9449999999999363
                            }}/>
                        </ContentFlex>
                    </>
                ) : (
                    <div>
                        <div style={{
                            marginTop: 200,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <LogoSearch
                                src={'https://quickin-media-production.s3.sa-east-1.amazonaws.com/KjWrSm01yF3aXlitW59fK9rusARuomEudxA2Ph35mdJKTq1kM7pK4fnLpfqffK3N/ADGROWTH-HOR-ROXO-PRETO_1.png'}/>
                        </div>
                        <div style={{
                            marginTop: 80,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <SearchInput onChange={getDetailAboutStock}/>
                        </div>
                    </div>
                )
            }
        </Wrapper>
    )
}
