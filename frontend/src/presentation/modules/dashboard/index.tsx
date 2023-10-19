import {CenteredDiv, ContentFlex, LogoSearch, Wrapper} from "./styles.ts";
import {IconBack} from "../../components/iconBack";
import {CardDetailStock} from "./components/cardDetailStock";
import {CardSimulateStock} from "./components/cardSimulateStock";
import {SearchInput} from "./components/searchInput";
import {useStock} from "../../hooks/useStocks.tsx";
import {Spinner} from "react-activity";
import {themeDark} from "../../style/themes.ts";
import {STATUS_REQUEST} from "../../../domain/models/status-request.ts";

const LogoContainer = () => (
    <CenteredDiv marginTop={200}>
        <LogoSearch
            src={'https://quickin-media-production.s3.sa-east-1.amazonaws.com/KjWrSm01yF3aXlitW59fK9rusARuomEudxA2Ph35mdJKTq1kM7pK4fnLpfqffK3N/ADGROWTH-HOR-ROXO-PRETO_1.png'}/>
    </CenteredDiv>
);

const SearchBar = ({onChange}: {
    onChange: (value: string) => void
}) => (
    <CenteredDiv marginTop={80}>
        <SearchInput onChange={onChange}/>
    </CenteredDiv>
);

const LoadingSpinner = () => (
    <CenteredDiv marginTop={80}>
        <Spinner color={themeDark.colors.white}/>
    </CenteredDiv>
);

export const Dashboard = () => {
    const {
        stockDetail,
        getDetailAboutStock,
        loadingStockDetail,
        resetStock
    } = useStock();

    return (
        <Wrapper>
            {
                stockDetail ? (
                    <>
                        <IconBack onPress={() => resetStock()}/>
                        <ContentFlex>
                            <CardDetailStock/>
                            <CardSimulateStock/>
                        </ContentFlex>
                    </>
                ) : (
                    <div>
                        <LogoContainer/>
                        <SearchBar onChange={getDetailAboutStock}/>
                        {
                            loadingStockDetail === STATUS_REQUEST.LOADING && (<LoadingSpinner/>)
                        }
                    </div>
                )
            }
        </Wrapper>
    );
}
