import { css, FlattenInterpolation, DefaultTheme } from 'styled-components';

type InputType = Record<
  keyof DefaultTheme['breakpoints'],
  FlattenInterpolation<any>
>;

const scopes: Array<keyof DefaultTheme['breakpoints']> = [
  'mobile',
  'tablet_mini',
  'tablet',
];
export const breakpoint = (input: InputType | FlattenInterpolation<any>) => {
  if (Object.prototype.hasOwnProperty.call(input, 'mobile')) {
    const query = (props: any) =>
      scopes.reduce((q, key) => {
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
