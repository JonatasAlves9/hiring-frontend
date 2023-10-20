import React from 'react';
import {
  ButtonSuggestion,
  ButtonSuggestionLabel,
  CenteredDiv,
  LogoSearch,
  ViewSuggestion,
  Wrapper,
} from './styles.ts';
import { SearchInput } from '../../components/searchInput';
import { useNavigate } from 'react-router-dom';
import { useStock } from '../../hooks/useStocks.tsx';

const LogoContainer = () => (
  <CenteredDiv marginTop={200}>
    <LogoSearch
      src={
        'https://quickin-media-production.s3.sa-east-1.amazonaws.com/KjWrSm01yF3aXlitW59fK9rusARuomEudxA2Ph35mdJKTq1kM7pK4fnLpfqffK3N/ADGROWTH-HOR-ROXO-PRETO_1.png'
      }
    />
  </CenteredDiv>
);

const SearchBar = ({ onChange }: { onChange: (value: string) => void }) => (
  <CenteredDiv marginTop={80}>
    <SearchInput onChange={onChange} />
  </CenteredDiv>
);

const suggestions = ['IBM', 'VALE', 'VAL', 'V'];

export const HomeSearch = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LogoContainer />
      <SearchBar
        onChange={(route) => {
          navigate(`/stocks/${route}`);
        }}
      />
      <ViewSuggestion>
        <ButtonSuggestionLabel>Sugestões:</ButtonSuggestionLabel>
        {suggestions.map((item, index) => (
          <ButtonSuggestion
            key={index}
            onClick={() => navigate(`/stocks/${item}`)}
          >
            <ButtonSuggestionLabel>{item}</ButtonSuggestionLabel>
          </ButtonSuggestion>
        ))}
      </ViewSuggestion>
    </Wrapper>
  );
};
