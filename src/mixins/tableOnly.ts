import {css} from "styled-components";
import {breakpoint} from "./breakpoint";

export const tableOnly = css`
    display: none;
    ${breakpoint({
        mobile: css`
            display: none;
        `,
        tablet_mini: css`
            display: none;
        `,
        tablet: css`
            display: initial;
        `,
    })};
`;
