import { css, DefaultTheme, FlattenInterpolation } from 'styled-components';

type InputType = Record<
  keyof DefaultTheme['breakpoints'],
  FlattenInterpolation<any>
>;

const scopes: Array<keyof DefaultTheme['breakpoints']> = [
  'tablet',
  'tablet_mini',
  'mobile',
];
export const breakpoint = (input: InputType | FlattenInterpolation<any>) => {
  if (Object.prototype.hasOwnProperty.call(input, 'mobile')) {
    const queries = (props: any) =>
      scopes.map(key => {
        const value = (input as InputType)[key];
        return css`
          @media screen and (max-width: ${props.theme.breakpoints[key]}) {
            ${value}
          }
        `;
      });

    return css`
      ${queries}
    `;
  }

  return css`
    @media (max-width: ${(props: any) => props.theme.breakpoints.mobile}) {
      ${input as any}
    }
  `;
};
