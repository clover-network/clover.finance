import {css} from "styled-components";
import {breakpoint} from "./breakpoint";

export const desktopOnly = css`
    display: initial;
    ${breakpoint({
        mobile: css`
            display: none;
        `,
        tablet_mini: css`
            display: none;
        `,
        tablet: css`
            display: none;
        `,
    })};
`;
