import { DefaultTheme } from "styled-components";

export const ThemeClover: DefaultTheme = {
  id: "Clover",
  colors: {
    TICKER_POSITIVE: "#06E694",
    TICKER_NEGATIVE: "#FF6D5F",
    TITLE: "#FFFFFF",
    SUBTITLE: "#FFFFFF",
    BODY: "#C4C4C4",
    BAR: "#5BECB8",
    ACCENT: "#25E5DA",
    BACKGROUND: "#000000",
    NEUTRAL: "#FFFFFF",
    ECOSYSTEM_BACKGROUND: "#151E26",
    SECONDARY: "#262626",
    FOOTER: "#00000000",
    HEADER: "#000000",
    HEADERBACK: "#25E5DA",
    EMAIL_US: "#A9FFE0",
    YELLOW_BG: "#FEFFCA",
    PINK_BG: "#EDF3FF",
  },
  fontSizes: {
    TITLE: "48px",
    SUBTITLE: "24px",
    SMALLER_SUBTITLE: "18px",
    BODY: "16px",
    SMALL: "12px",
  },
  fontSizesMobile: {
    TITLE: "36px",
    SUBTITLE: "18px",
    SMALLER_SUBTITLE: "18px",
    BODY: "14px",
    SMALL: "12px",
  },
  margins: {
    MAIN_GUTTER_HORIZONTAL: "128px",
    MAIN_GUTTER_MOBILE_HORIZONTAL: "24px",
    MINI_GUTTER_HORIZONTAL: "40px",
  },
  breakpoints: {
    mobile: "481px",
    tablet_mini: "744px",
    tablet: "1026px",
  },
  misc: {
    DEFAULT_BORDER_RADIUS: "20px",
  },
};
