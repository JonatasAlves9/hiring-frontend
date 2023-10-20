// theme.ts
export interface Theme {
  colors: Colors;
  fonts: Fonts;
  sizes: Sizes;
}

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  dark: string;
  white: string;
  border_dark: string;
}

export interface Fonts {
  regular: string;
  bold: string;
  semibold: string;
  medium: string;
  light: string;
}

export interface Sizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

const themeDark: Theme = {
  colors: {
    primary: '#0C5F66',
    secondary: '#D0DA5F',
    white: '#fff',
    dark: '#1D1D20',
    background: '#141518',
    border_dark: '#2C2D31',
  },
  fonts: {
    regular: 'NunitoRegular',
    bold: 'NunitoBold',
    semibold: 'NunitoSemiBold',
    medium: 'NunitoMedium',
    light: 'NunitoLight',
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 22,
  },
};

export { themeDark };
