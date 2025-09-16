// styled.d.ts
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            bgMain: string;
            bgSecondary: string;
            text: {
                primary: string;
                title: string;
                inverted: string;
            };
            border: string;
            error: string;
            success: string;
        };
        fontSize: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        fontWeights: {
            regular: number;
            medium: number;
            bold: number;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        borderRadius: {
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
        shadows: {
            sm: string;
            md: string;
            lg: string;
        };
        zIndex: {
            dropdown: number;
            modal: number;
            tooltip: number;
        };
        breakpoints: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        media: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        transition: string;
    }
}
