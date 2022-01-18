import intl from 'react-intl-universal';
import { shallowEqual } from 'react-redux';
import { locales } from '.';

// small polyfill for intl
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const format = (key: string, vari?: object): string => {
  const str = key.split('.').reduce((acc, val) => acc?.[val], locales['en-US']);
  if (!vari || !str) {
    return key;
  }
  return Object.entries(vari).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, value),
    str,
  );
};
// const cache = Object.create(null);
//
// export function t(key: string, variables?: any): string {
//   // const cache = Object.create(null);
//   // console.log(cache)
//   const memo = cache[key];
//   if (memo && shallowEqual(memo.variables, variables)) {
//     return memo.value;
//   }
//   const value = intl.get(key, variables) || key;
//
//   cache[key] = {
//     variables,
//     value,
//   };
//
//   return value;
// }

export function t(key: string, variables?: any): string {
  return intl.get(key, variables) || key;
}

export function tHTML(key: string, variables?: any): string {
  return intl.getHTML(key, variables) || key;
}
