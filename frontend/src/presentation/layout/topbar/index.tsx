import React from 'react';
import { Avatar, Center, Logo, Sides, Wrapper } from './styles.ts';
import { ItemMenu } from './components/itemMenu';

export const TopBar = () => {
  return (
    <Wrapper>
      <Sides side={'left'}>
        <Logo
          src={
            'https://quickin-media-production.s3.sa-east-1.amazonaws.com/KjWrSm01yF3aXlitW59fK9rusARuomEudxA2Ph35mdJKTq1kM7pK4fnLpfqffK3N/ADGROWTH-HOR-ROXO-PRETO_1.png'
          }
        />
      </Sides>
      <Center>
        <ItemMenu />
      </Center>
      <Sides side={'right'}>
        <Avatar
          src={
            'https://computeronthebeach.com.br/wp-content/uploads/2023/02/adgrowth_preto.png'
          }
        />
      </Sides>
    </Wrapper>
  );
};
