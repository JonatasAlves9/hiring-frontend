import styled from "styled-components";

interface ISides {
    side: 'left' | 'right'
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-top: 15px;
`;

export const Sides = styled.div<ISides>`
  display: flex;
  width: 30%;
  justify-content: ${({side}) => side !== 'left' ? 'flex-end' : 'none'}; 
  padding: 0 20px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Logo = styled.img`
 width: 120px;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 100%;
  object-fit: cover;
`;

