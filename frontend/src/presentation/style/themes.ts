// theme.ts
export interface Theme {
    colors: Colors,
    fonts: Fonts,
    sizes: Sizes,
}

export interface Colors {
    primary: string;
    secondary: string;
    background: string;
    white: string;
}

export interface Fonts {
    regular: string;
    bold: string;
    semibold: string;
    medium: string,
    light: string,
}

export interface Sizes {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}

const themeLight: Theme = {
    colors: {
        primary: '#0C5F66',
        secondary: '#188E81',
        background: '#FAF9FB',
        white: '#fff',
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
const themeDark: Theme = {
    colors: {
        primary: '#0C5F66',
        secondary: '#D0DA5F',
        white: '#fff',
        background: '#141518',
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

export {themeDark, themeLight};
