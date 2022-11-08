import {css} from "styled-components";
import {breakpoint} from "./breakpoint";

export const tableMiniOnly = css`
    display: none;
    ${breakpoint({
        mobile: css`
            display: none;
        `,
        tablet_mini: css`
            display: initial;
        `,
        tablet: css`
            display: none;
        `,
    })};
`;
