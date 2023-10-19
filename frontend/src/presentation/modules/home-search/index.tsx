import {CenteredDiv, LogoSearch, Wrapper} from "./styles.ts";
import {useStock} from "../../hooks/useStocks.tsx";
import {Spinner} from "react-activity";
import {themeDark} from "../../style/themes.ts";
import {STATUS_REQUEST} from "../../../domain/models/status-request.ts";
import {SearchInput} from "../../components/searchInput";
import {useNavigate} from "react-router-dom";

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

export const HomeSearch = () => {
    const {
        loadingStockDetail,
    } = useStock();

    const navigate = useNavigate()

    return (
        <Wrapper>
            <LogoContainer/>
            <SearchBar onChange={(route => navigate(`/stocks/${route}`))}/>
            {
                loadingStockDetail === STATUS_REQUEST.LOADING && (<LoadingSpinner/>)
            }
        </Wrapper>
    );
}
