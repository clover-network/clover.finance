import { css, FlattenInterpolation, DefaultTheme } from "styled-components";

type InputType = Record<
  keyof DefaultTheme['breakpoints'],
  FlattenInterpolation<any>
>;

export const breakpoint = (input: InputType | FlattenInterpolation<any>) => {
  if (Object.prototype.hasOwnProperty.call(input, 'mobile')) {
    const sortedInputList = Object.entries(input).sort();
    const query = (props: any) => sortedInputList.reduce((q, [key, value]) => {
      q += `  
    @media screen and (max-width: ${props.theme.breakpoints[key]}) {
      ${value}
    }
    `;
      return q;
    }, '');
    return css`
      ${query}
    `
  }

  return css`
    @media (max-width: ${(props: any) => props.theme.breakpoints.mobile}) {
      ${input as any}
    }
  `;
}