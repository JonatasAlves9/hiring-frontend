// LoadingPanel.tsx
import React from 'react';
import {Dots} from 'react-activity';
import {LoadingMessage, PanelContainer} from "./styles.ts";
import {themeDark} from "../../style/themes.ts"; // Import the CSS for the activity spinner


export const LoadingPanel: React.FC = () => {
    return (
        <PanelContainer>
            <LoadingMessage>
                <Dots color={themeDark.colors.dark}/> {/* Activity Spinner */}
                Carregando...
            </LoadingMessage>
        </PanelContainer>
    );
};

