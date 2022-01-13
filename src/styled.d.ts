// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    colors: {
      TICKER_NEGATIVE: string;
      TICKER_POSITIVE: string;
      NEUTRAL: string;
      TITLE: string;
      SUBTITLE: string;
      BODY: string;
      ACCENT: string;
      BAR: string;
      BACKGROUND: string;
      ECOSYSTEM_BACKGROUND: string;
      SECONDARY: string;
      FOOTER: string;
      HEADER: string;
      HEADERBACK: string;
      EMAIL_US: string;
      YELLOW_BG: string;
      PINK_BG: string;
    };
    fontSizes: {
      // used for titles
      TITLE: string;
      // used for labels in subsections
      SUBTITLE: string;
      // used for some specific subsection headers instead of FONT_SIZE_LARGE
      SMALLER_SUBTITLE: string;
      // used for most copy text
      BODY: string;
      // used in coin prices
      SMALL: string;
    };
    fontSizesMobile: {
      TITLE: string;
      SUBTITLE: string;
      SMALLER_SUBTITLE: string;
      BODY: string;
      SMALL: string;
    };
    margins: {
      MAIN_GUTTER_HORIZONTAL: string;
      MAIN_GUTTER_MOBILE_HORIZONTAL: string;
      MINI_GUTTER_HORIZONTAL: string;
    };
    breakpoints: {
      mobile: string;
    };
    misc: {
      DEFAULT_BORDER_RADIUS: string;
    };
  }
}
