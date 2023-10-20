// errorPanel.tsx
import React from 'react';
import { ErrorMessage, PanelContainer, RetryButton } from './styles.ts';

type ErrorPanelProps = {
  message?: string;
  onRetry?: () => void; // Callback for the retry button
};

export const ErrorPanel: React.FC<ErrorPanelProps> = ({
  message = 'Ocorreu um erro!',
  onRetry = () => null,
}) => {
  return (
    <PanelContainer>
      <ErrorMessage>
        {message}
        <RetryButton onClick={onRetry}>Tentar novamente</RetryButton>
      </ErrorMessage>
    </PanelContainer>
  );
};
