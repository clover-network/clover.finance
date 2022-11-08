import {css} from "styled-components";
import {breakpoint} from "./breakpoint";

export const mobileOnly = css`
    display: none;
    ${breakpoint({
        mobile: css`
            display: initial;
        `,
        tablet_mini: css`
            display: none;
        `,
        tablet: css`
            display: none;
        `,
    })};
`;
