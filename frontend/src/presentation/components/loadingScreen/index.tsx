// LoadingPanel.tsx
import React from 'react';
import { LoadingMessage, PanelContainer, ViewAnimation } from './styles.ts';
import Lottie from 'lottie-react';
import animationLoading from './../../assets/animations/animation_lnxpfkub.json';

export const LoadingScreen: React.FC = () => {
  return (
    <PanelContainer>
      <div>
        <ViewAnimation>
          <Lottie animationData={animationLoading} loop={true} />
        </ViewAnimation>
        <ViewAnimation>
          <LoadingMessage>Buscando dados do servidor...</LoadingMessage>
        </ViewAnimation>
      </div>
    </PanelContainer>
  );
};
