import { css, FlattenInterpolation, DefaultTheme } from 'styled-components';

type InputType = Record<
  keyof DefaultTheme['breakpoints'],
  FlattenInterpolation<any>
>;

// TODO: 加类型
const sorted = ['mobile', 'desktop'];
export const breakpoint = (input: InputType | FlattenInterpolation<any>) => {
  if (Object.prototype.hasOwnProperty.call(input, 'mobile')) {
    const query = (props: any) =>
      sorted.reduce((q, key) => {
        // @ts-ignore
        const value = (input as InputType)[key];
        q += `  

    @media screen and (max-width: ${props.theme.breakpoints[key]}) {
      ${value}
    }
    `;
        return q;
      }, '');
    return css`
      ${query}
    `;
  }

  return css`
    @media (max-width: ${(props: any) => props.theme.breakpoints.mobile}) {
      ${input as any}
    }
  `;
};
