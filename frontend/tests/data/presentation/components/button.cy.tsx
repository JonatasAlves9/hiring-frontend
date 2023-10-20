import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'cypress/react18';
import { Button } from '../../../../src/presentation/components/button';
import 'react-activity/dist/library.css';
import { themeDark } from '../../../../src/presentation/style/themes';

describe('Button', () => {
  it('renders correctly', () => {
    mount(
      <ThemeProvider theme={themeDark}>
        <Button />
      </ThemeProvider>,
    );

    cy.get('div').should('exist');
  });

  it('should display the spinner when loading', () => {
    mount(
      <ThemeProvider theme={themeDark}>
        <Button loading={true} />
      </ThemeProvider>,
    );

    cy.get('div[data-testid="rai-activity-indicator"]').should('exist');
  });
});
