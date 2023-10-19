import {Button, Icon, Input, Sides, Wrapper} from "./styles.ts";
import {faSearch, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";

interface IProps {
    onChange: (value: string) => void;
}

export const SearchInput = ({onChange}: IProps) => {
    const [query, setQuery] = useState('');
    return (
        <Wrapper onSubmit={(e) => {
            e.preventDefault();
            onChange(query)
        }}>
            <Sides side={'left'}>
                <Icon icon={faSearch}/>
            </Sides>
            <Input placeholder={"Pesquise por uma ação"} autoFocus={true} onChange={(e) => setQuery(e.target.value)}
                   value={query}/>
            <Button onClick={() => onChange(query)}>
                <Sides side={'left'}>
                    <Icon icon={faArrowRight}/>
                </Sides>
            </Button>
        </Wrapper>
    )
}
