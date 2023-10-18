import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.dark};
  border-radius: 20px;
  padding: 10px;
  width: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({theme}) => theme.colors.white};
`;
