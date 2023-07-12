import styled, { css } from 'styled-components';
import { breakpoint } from '../../mixins/breakpoint';
import { NormalButton } from '../../components/Btn';
import { GrayButton } from '../../components/Btn';

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 0 64px;
  margin: 0 auto;
  ${breakpoint({
    mobile: css`
      padding: 0 24px;
      max-width: 375px;
    `,
    tablet_mini: css`
      padding: 0 24px;
      max-width: 744px;
    `,
    tablet: css`
      padding: 0 40px;
      max-width: 1026px;
    `,
  })}
`;

export const Background = styled.div`
  background: #000000;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`;

export const Content = styled.div`
  width: 100%;
  background: #000000;
  ${breakpoint({
    mobile: css``,
    tablet_mini: css``,
    tablet: css``,
  })}
  & > div {
    max-width: 1440px;
    margin: 0 auto;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css``,
      tablet: css``,
    })}
  }
`;

export const EnterWeb3 = styled.div`
  width: 100%;
  padding-top: 96px;
  video {
    position: absolute;
    z-index: -1;
    top: 80px;
    left: 0;
    right: 0;
    width: 100%;
    ${breakpoint({
      mobile: css`
        padding-top: 0;
      `,
      tablet_mini: css``,
      tablet: css``,
    })}
  }
  & > div {
    /* padding: 0 64px; */

    margin: 0 auto;
  }
  ${breakpoint({
    mobile: css`
      padding-top: 0;
    `,
    tablet_mini: css`
      padding-top: 136px;
    `,
    tablet: css``,
  })}
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 100px;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
      align-items: flex-start;
      padding-top: 0;
    `,
    tablet_mini: css`
      padding-top: 0; ;
    `,
    tablet: css`
      padding-top: 0;
    `,
  })}
`;

export const TextWrapper = styled.div`
  width: 50%;
  padding-top: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;
  ${breakpoint({
    mobile: css`
      width: 100%;
      padding-top: 0;
    `,
    tablet_mini: css`
      padding-top: 0;
    `,
    tablet: css`
      padding-top: 0;
    `,
  })}

  & > div:first-child {
    font-weight: 600;
    font-size: 72px;
    line-height: 76px;
    letter-spacing: 0.008em;
    color: #ffffff;
    ${breakpoint({
      mobile: css`
        font-weight: 590;
        font-size: 40px;
        line-height: 40px;
      `,
      tablet_mini: css`
        font-weight: 590;
        font-size: 40px;
        line-height: 40px;
      `,
      tablet: css`
        font-weight: 590;
        font-size: 64px;
        line-height: 64px;
      `,
    })}
    img {
      margin-left: 10px;
      ${breakpoint({
        mobile: css`
          width: 24px;
        `,
        tablet_mini: css`
          width: 24px;
        `,
        tablet: css`
          width: 32px;
        `,
      })}
    }
  }

  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #ffffff;
    margin: 40px 0 30px;
  }

  ${breakpoint(css`
    span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;

export const ContentBottom = styled.div`
  margin-top: 128px;
  width: 100%;
  padding: 40px 40px 20px;
  background: #141414;
  border-radius: 30px;
  justify-content: center;
  ${breakpoint({
    mobile: css`
      margin-top: 40px;
      background: unset;
      border-radius: unset;
      gap: 0;
    `,
    tablet_mini: css`
      margin-top: 40px;
      padding: 0;
      background: unset;
      border-radius: unset;
      gap: 0;
    `,
    tablet: css`
      margin-top: 80px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    `,
  })}
`;

export const ContentBottomTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.008em;
  color: #ffffff;
  margin-bottom: 60px;
  padding: 10px 24px;
  ${breakpoint({
    mobile: css`
      font-weight: 590;
      font-size: 20px;
      line-height: 28px;
      padding: 0;
      margin-bottom: 8px;
    `,
    tablet_mini: css`
      font-weight: 590;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
      padding: 0;
    `,
    tablet: css`
      font-weight: 590;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 0;
    `,
  })}
`;

export const ContentBottomContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${breakpoint({
    mobile: css`
      gap: 8px;
      padding: 8px;
      background-color: #232323;
      border-radius: 16px;
    `,
    tablet_mini: css`
      gap: 8px;
    `,
    tablet: css`
      gap: 32px;
    `,
  })}
`;

export const ContentBottomTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 24px;
  ${breakpoint({
    mobile: css`
      flex-direction: column;
      display: flex;
    `,
    tablet_mini: css`
      display: grid;
      grid-template-columns: repeat(2, 50%);
    `,
    tablet: css`
      gap: 8px;
    `,
  })}
`;

export const ContentBottomBottom = styled.div`
  & > span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.026em;
    color: rgba(255, 255, 255, 0.6);
    display: inline-block;
    margin: 10px 0;

    ${breakpoint({
      mobile: css`
        padding: 0;
        margin: 0 0 8px 0;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.006em;
        color: #ffffff;
      `,
      tablet_mini: css`
        padding: 0;
        margin: 0 0 8px 0;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.006em;
        color: #ffffff;
      `,
      tablet: css`
        padding: 0 24px;
        margin: 0 0 12px 0;
      `,
    })}
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
    justify-content: center;
    ${breakpoint({
      mobile: css`
        display: flex;
        flex-direction: column;
        gap: 8px;
      `,
      tablet_mini: css`
        display: grid;
        grid-template-columns: repeat(2, 50%);
        gap: 8px;
      `,
      tablet: css`
        gap: 20px;
      `,
    })}
  }
`;

export const ContentBottomItem = styled.div`
  background: #0c0b0b;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333232;
  height: 210px;
  padding: 24px;
  flex: 1;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.006em;
  color: #ffffff;
  transition: background 0.3s ease-in-out;
  ${breakpoint({
    mobile: css`
      flex-direction: row;
      width: 100%;
      align-items: center;
      height: 80px;
      justify-content: flex-start;
      border-radius: 16px;
    `,
    tablet_mini: css`
      width: 100%;
      height: 80px;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      border-radius: 16px;
    `,
    tablet: css`
      flex: 1;
      height: 144px;
      padding: 16px;
      border-radius: 16px;
    `,
  })}

  &:first-child {
    img {
      margin-top: -60px;
      ${breakpoint({
        mobile: css`
          margin-top: 0;
        `,
        tablet_mini: css`
          margin-top: 0;
        `,
        tablet: css`
          margin-top: -45px;
        `,
      })}
    }
  }
  img {
    width: 160px;
    margin-bottom: 8px;
    margin-top: -40px;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
    ${breakpoint({
      mobile: css`
        margin: 0;
        width: 48px;
      `,
      tablet_mini: css`
        margin: 0;
        width: 48px;
      `,
      tablet: css`
        width: 112.93px;
        margin-top: -30px;
      `,
    })}
  }
  span {
    word-break: break-word;
    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      `,
      tablet_mini: css``,
      tablet: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      `,
    })}
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    img {
      transform: translateY(-10px);
    }
  }
`;

export const DAppFeaturesItem = styled.div`
  height: 116px;
  padding: 16px;
  flex: 1;
  background: #0e0d0d;
  border: 1px solid #333232;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  ${breakpoint({
    mobile: css`
      width: 100%;
      height: 46px;
    `,
    tablet_mini: css`
      width: 100%;
      height: 46px;
    `,
    tablet: css`
      height: 86px;
      flex: 1;
    `,
  })}

  span {
    font-family: Inter;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.006em;
    color: #ffffff;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
      `,
      tablet: css`
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
      `,
    })}
  }
`;

export const Btns = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 16px;
  }
`;

export const CLVChain = styled.div`
  width: 100%;
  margin-top: 24px;
  background: #141414;
  border-radius: 30px;
  padding: 40px;
  ${breakpoint({
    mobile: css`
      background: unset;
      border-radius: unset;
      padding: 0;
    `,
    tablet_mini: css`
      background: unset;
      border-radius: unset;
      padding: 0;
    `,
    tablet: css`
      padding: 16px;
    `,
  })}
`;

export const CLVChainTitle = styled.div`
  ${breakpoint({
    mobile: css``,
    tablet_mini: css`
      margin: 0;
      padding: 0;
    `,
    tablet: css`
      margin: 0;
      padding: 10px 24px;
    `,
  })}
  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #ffffff;
    margin: 0 0 24px;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css`
        margin: 0;
        font-weight: 590;
        font-size: 20px;
        line-height: 28px;
      `,
      tablet: css``,
    })}
  }

  span {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.008em;
    color: #ffffff;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
      `,
      tablet: css``,
    })};
  }
`;

export const CLVChainContent = styled.div`
  display: flex;
  grid-template-columns: auto auto auto auto auto;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  ${breakpoint({
    mobile: css``,
    tablet_mini: css`
      display: grid;
      grid-template-columns: repeat(2, 50%);
      justify-content: center;
      margin-top: 16px;
    `,
    tablet: css`
      gap: 8px;
      margin-top: 32px;
    `,
  })}
`;

export const CLVChainItem = styled.div`
  height: 210px;
  flex: 1;
  padding: 24px;
  background: #000000;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333232;
  transition: background 0.3s ease-in-out;
  ${breakpoint({
    mobile: css`
      border-radius: 16px;
    `,
    tablet_mini: css`
      width: 100%;
      height: 90px;
      border-radius: 16px;
    `,
    tablet: css`
      height: 144px;
      padding: 16px;
      border-radius: 16px;
    `,
  })}

  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.006em;
    color: #ffffff;
    word-break: break-word;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      `,
      tablet: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      `,
    })}
  }

  img {
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css`
        width: 36px;
      `,
      tablet: css`
        width: 68px;
      `,
    })}
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    img {
      transform: translateY(-10px);
    }
  }
`;

export const ProductSolution = styled.div`
  width: 100%;
  margin-top: 140px;
  display: flex;
  align-items: center;
  gap: 72px;
  ${breakpoint({
    mobile: css`
      margin-top: 100px;
      flex-direction: column;
    `,
    tablet_mini: css`
      margin-top: 64px;
    `,
    tablet: css`
      margin-top: 120px;
      gap: 16px;
    `,
  })}
`;

export const ProductSolutionLeft = styled.div`
  width: 50%;
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  ${breakpoint({
    mobile: css`
      width: 100%;
      border: 0 solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
  & > div:last-child {
    border: none;
  }
`;

export const ProductSolutionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  gap: 24px;
  ${breakpoint({
    mobile: css`
      padding: 8px;
      gap: 14px;
      border-radius: 16px;
    `,
    tablet_mini: css`
      padding: 8px;
      gap: 14px;
    `,
    tablet: css`
      padding: 16px;
    `,
  })}
  & > img {
    ${breakpoint({
      mobile: css`
        width: 48px;
      `,
      tablet_mini: css`
        width: 48px;
      `,
      tablet: css`
        width: 67px;
      `,
    })}
  }
  &:hover {
    background: #0c0b0b;
  }
  & > div {
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.006em;
    color: #ffffff;
    h3 {
      ${breakpoint({
        mobile: css`
          font-weight: 700;
          font-size: 12px;
          line-height: 20px;
          margin: 0;
        `,
        tablet_mini: css`
          font-weight: 700;
          font-size: 12px;
          line-height: 20px;
          margin: 0;
        `,
        tablet: css`
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;
          margin: 0;
        `,
      })}
    }

    span {
      font-weight: 400;
      opacity: 0.6;
      ${breakpoint({
        mobile: css`
          font-size: 10px;
          line-height: 14px;
        `,
        tablet_mini: css`
          font-size: 10px;
          line-height: 14px;
        `,
        tablet: css`
          font-size: 16px;
          line-height: 22px;
        `,
      })}
    }
  }
`;
export const Mobile = styled.div`
  display: none;
  ${breakpoint({
    mobile: css`
      display: flex;
      flex-direction: column;
    `,
    tablet_mini: css`
      display: none;
    `,
    tablet: css`
      display: none;
    `,
  })}
  h3 {
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.008em;
    color: #ffffff;
  }
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.006em;
    color: #ffffff;
    display: inline-block;
    margin-top: 8px;
  }
`;

export const ProductSolutionRight = styled.div`
  width: 50%;
  ${breakpoint({
    mobile: css`
      width: 100%;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #ffffff;
    ${breakpoint({
      mobile: css`
        display: none;
      `,
      tablet_mini: css`
        font-weight: 590;
        font-size: 20px;
        line-height: 28px;
      `,
      tablet: css`
        font-weight: 590;
        font-size: 32px;
        line-height: 40px;
      `,
    })}
  }
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.006em;
    color: #ffffff;
    display: inline-block;
    margin: 24px 0;
    ${breakpoint({
      mobile: css`
        display: none;
      `,
      tablet_mini: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        margin: 8px 0 24px 0;
      `,
      tablet: css`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin: 20px 0;
      `,
    })}
  }
`;

export const StyledNormalButton = styled(NormalButton)`
  height: 64px;
  ${breakpoint({
    mobile: css`
      height: 40px;
    `,
    tablet_mini: css`
      height: 40px;
    `,
    tablet: css`
      height: 56px;
    `,
  })}
`;

export const StyledGrayButton = styled(GrayButton)`
  height: 64px;
  ${breakpoint({
    mobile: css`
      height: 40px;
    `,
    tablet_mini: css`
      height: 40px;
    `,
    tablet: css`
      height: 56px;
    `,
  })}
`;

export const StyledCLVPortalButton = styled(GrayButton)`
  height: 64px;
  ${breakpoint({
  mobile: css`
    display: none;
      height: 40px;
    `,
  tablet_mini: css`
      height: 40px;
    `,
  tablet: css`
      height: 56px;
    `,
})}
`;

export const ToolsOnCLV = styled.div`
  margin: 180px 0;
  width: 100%;
  ${breakpoint({
    mobile: css``,
    tablet_mini: css`
      margin: 64px 0;
    `,
    tablet: css`
      margin: 120px 0;
    `,
  })}
`;

export const ToolsOnCLVTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  margin-bottom: 64px;
  h3 {
    color: #ffffff;
    font-size: 64px;
    line-height: 68px;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css`
        font-weight: 590;
        font-size: 32px;
        line-height: 32px;
      `,
      tablet: css`
        font-weight: 590;
        font-size: 48px;
        line-height: 52px;
        margin-bottom: 0;
      `,
    })}
  }
  span {
    color: #bdfde2;
    ${breakpoint({
      mobile: css`
        margin-left: 0;
      `,
      tablet_mini: css`
        margin-left: 10px;
      `,
      tablet: css``,
    })}
  }
  ${breakpoint({
    mobile: css`
      display: flex;
      flex-direction: column;
      width: 100%;
      font-weight: 590;
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 28px;
      height: unset;
    `,
    tablet_mini: css`
      display: flex;
      flex-direction: row;
      width: 100%;
      font-weight: 590;
      font-size: 32px;
      line-height: 32px;
      height: 32px;
      margin-bottom: 28px;
    `,
    tablet: css`
      font-weight: 590;
      font-size: 48px;
      line-height: 52px;
      height: 104px;
    `,
  })}
`;

export const ToolsOnCLVContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${breakpoint({
    mobile: css`
      display: flex;
      flex-direction: column;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
  & > div:last-child {
    & > div {
      span {
        margin: 10px 0;
      }
    }
    ${breakpoint({
      mobile: css``,
      tablet_mini: css`
        & > div {
          span {
            margin: 16px 0;
          }
        }
      `,
      tablet: css`
        & > div {
          span {
            margin: 2px 0;
          }
        }
      `,
    })}
  }
`;

export const ToolsOnCLVItem = styled.div`
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  /* height: 360px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${breakpoint({
    mobile: css`
      padding: 16px;
    `,
    tablet_mini: css`
      padding: 16px;
      /* height: 216px; */
    `,
    tablet: css`
      padding: 32px;
      /* height: 324px; */
    `,
  })}

  & > div:first-child {
    & > div {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        margin-right: 16px;
        ${breakpoint({
          mobile: css`
            width: 24px;
          `,
          tablet_mini: css`
            width: 24px;
          `,
          tablet: css`
            width: 32px;
          `,
        })}
      }
      color: #ffffff;
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.008em;
      ${breakpoint({
        mobile: css``,
        tablet_mini: css`
          font-weight: 590;
          font-size: 16px;
          line-height: 24px;
        `,
        tablet: css`
          font-weight: 590;
          font-size: 24px;
          line-height: 32px;
        `,
      })}
    }
    & > span {
      font-family: Inter;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.006em;
      color: #ffffff;
      opacity: 0.6;
      margin: 24px 0;
      display: inline-block;
      ${breakpoint({
        mobile: css``,
        tablet_mini: css`
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
        `,
        tablet: css`
          font-size: 16px;
          line-height: 28px;
          margin: 16px 0;
        `,
      })}
    }
  }
`;

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint(css`
    height: unset;
    min-height: 120vw;
    padding: 48px 0 0;
  `)}
`;
