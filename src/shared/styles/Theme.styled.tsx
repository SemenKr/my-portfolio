// src/shared/theme.ts
import { DefaultTheme } from "styled-components";


const breakpoints = {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
};


export const defaultTheme: DefaultTheme = {
    colors: {
        primary: "#FFB400",
        secondary: "#2563EB",
        bgMain: "#FFFFFF",
        bgSecondary: "#F0F0F6",
        text: {
            primary: "#767676",
            title: "#333333",
            inverted: "#FFFFFF",
        },
        border: "#E0E0E0",
        error: "#FF4D4F",
        success: "#4CAF50",
    },
    fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "32px",
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
    },
    borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        full: "50%",
    },
    shadows: {
        sm: "0 1px 3px rgba(0,0,0,0.1)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 20px rgba(0,0,0,0.2)",
    },
    zIndex: {
        dropdown: 1000,
        modal: 2000,
        tooltip: 3000,
    },
    breakpoints,
    media: {
        mobile: `@media (max-width: ${breakpoints.mobile})`,
        tablet: `@media (max-width: ${breakpoints.tablet})`,
        desktop: `@media (min-width: ${breakpoints.desktop})`,
    },
    transition: "0.3s ease",
};

// Улучшенная тёмная тема
export const darkTheme: DefaultTheme = {
    ...defaultTheme,
    colors: {
        primary: "rebeccapurple", // яркий акцент
        secondary: "#2563EB", // второстепенный акцент
        bgMain: "#121212", // основной фон
        bgSecondary: "#1E1E2F", // карточки, панели
        text: {
            primary: "#D1D5DB", // обычный текст
            title: "#FFFFFF",   // заголовки
            inverted: "#121212", // для кнопок на светлом фоне, если нужно
        },
        border: "#2A2A3A",    // линии и разделители
        error: "#FF4D4F",
        success: "#4CAF50",
    },
    shadows: {
        sm: "0 1px 3px rgba(0,0,0,0.5)",
        md: "0 4px 6px rgba(0,0,0,0.5)",
        lg: "0 10px 20px rgba(0,0,0,0.6)",
    },
};
