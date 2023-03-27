import styled, {css} from 'styled-components';
import {breakpoint} from '../../mixins/breakpoint';
import {GrayButton, NormalButton} from '../../components/Btn';

export const Content = styled.div`
  width: 100%;

  & > div {
    max-width: 1440px;
    padding: 0 64px 64px;
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
  }
`;

export const IntroducingCrypto = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 64px;
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
export const UpperCaseSpan = styled.span`
  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.026em;
  text-transform: uppercase;
  color: #4e5d60 !important;
  margin-bottom: 24px;
  ${breakpoint({
    mobile: css`
      font-size: 10px;
      line-height: 24px;
      font-weight: 700;
    `,
    tablet_mini: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    `,
    tablet: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 0px;
    `,
  })}
`;

export const BuiltForCryptoUsersSpan = styled.div`
  font-family: RobotoFlex;
  font-weight: 600;
  font-size: 72px;
  line-height: 76px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  margin-bottom: 24px;
  ${breakpoint({
    mobile: css`
      font-weight: 590;
      font-size: 40px;
      line-height: 40px;
      margin: 0;
    `,
    tablet_mini: css`
      font-weight: 590;
      font-size: 40px;
      line-height: 40px;
      margin: 0;
    `,
    tablet: css`
      font-weight: 590;
      font-size: 64px;
      line-height: 64px;
      margin: 0;
    `,
  })}
`;

export const BuiltForCryptoUsersImg = styled.img`
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
`;

export const BuiltForCryptoUsersHint = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.026em;
  color: #0c0b0b;
  margin-bottom: 24px;
  ${breakpoint({
    mobile: css`
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 0;
    `,
    tablet_mini: css`
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 0;
    `,
    tablet: css`
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 0;
    `,
  })};
`;

export const BuiltForCryptoUsersHintBottom = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.006em;

  color: #0C0B0B;
  margin-top: 40px;
  ${breakpoint({
    mobile: css`
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 0;
    `,
    tablet_mini: css`
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 0;
    `,
    tablet: css`
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 0;
    `,
  })};
`

export const TextWrapper = styled.div`
  width: 50%;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 48px;

  ${breakpoint({
    mobile: css`
      font-size: 15px;
      line-height: 24px;
      width: 100%;
      padding-bottom: 40px;
      gap: 16px;
    `,
    tablet_mini: css``,
    tablet: css`
      font-weight: 590;
      font-size: 64px;
      line-height: 64px;
      gap: 24px;
      padding-bottom: 40px;
    `,
  })};
`;

export const LayoutWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  animation: overScroll 1s forwards ease-in-out;
  @keyframes overScroll {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    20% {
      opacity: 0.5;
    }
    90% {
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  ${breakpoint({
    mobile: css`
      flex-direction: column;
      align-items: center;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  overflow: hidden;

  ${breakpoint({
    mobile: css`
      padding-top: 40px;
    `,
    tablet_mini: css`
      padding-top: 0;
    `,
    tablet: css`
      padding-top: 0;
    `,
  })}
`;

export const ContentBottom = styled.div`
  margin-bottom: -200px;
`;

export const ContentBottomTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  background: #ffffff;
  border: 1px solid #eff5f5;
  border-radius: 32px;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding: 16px;
      border-radius: 16px;
    `,
    tablet_mini: css`
      padding: 16px;
      border-radius: 16px;
    `,
    tablet: css`
      padding: 16px 16px 16px 24px;
      border-radius: 16px;
    `,
  })}
`;

export const LeftContainer = styled.div`
  font-family: 'RobotoFlex';
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  display: flex;
  align-items: center;
  gap: 16px;
  ${breakpoint({
    mobile: css`
      font-weight: 590;
      font-size: 20px;
      line-height: 28px;
      gap: 8px;
    `,
    tablet_mini: css`
      font-weight: 590;
      font-size: 20px;
      line-height: 28px;
      gap: 10px;
    `,
    tablet: css`
      font-weight: 590;
      font-size: 32px;
      line-height: 40px;
    `,
  })}
`;

export const AnimationTextWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  font-weight: 590;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  ${breakpoint({
    mobile: css`
      font-size: 20px;
      line-height: 28px;
    `,
    tablet_mini: css`
      font-size: 20px;
      line-height: 28px;
    `,
    tablet: css`
      font-size: 32px;
      line-height: 40px;
    `,
  })}
`;

export const AnimationTextItem = styled.div<{ delay?: string }>`
  animation: textUp 0.3s ease-in-out both;
  animation-delay: ${({delay}) => (delay ? delay : 0)};

  @keyframes textUp {
    0% {
      transform: translateY(60px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const CreateWalletSpan = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  color: #0c0b0b;
  ${breakpoint({
    mobile: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    `,
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
`;

export const ContentBottomTopRight = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  letter-spacing: 0.006em;
  width: 568px;
  height: 64px;

  ${breakpoint({
    mobile: css`
      width: 100%;
      height: 40px;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    `,
    tablet_mini: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      width: 324px;
      height: 40px;
    `,
    tablet: css`
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      width: 436px;
      height: 56px;
    `,
  })}
`;

export const ContentBottomBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  ${breakpoint({
    mobile: css`
      margin-top: 16px;
      flex-wrap: wrap;
      gap: 16px;
      flex-shrink: 1;

      > img {
        width: 40%;
        height: 40px;
      }
    `,
    tablet_mini: css`
      margin-top: 16px;
      flex-shrink: 1;

      > img {
        width: 25%;
        height: 40px;
      }
    `,
    tablet: css`
      flex-shrink: 1;

      > img {
        width: 25%;
        height: 62px;
      }
    `,
  })}
`;

export const Wallet3DImg = styled.img`
  width: 335px !important;
  ${breakpoint({
    mobile: css`
      width: 225px !important;
    `,
    tablet_mini: css`
      width: 195px !important;
    `,
    tablet: css`
      width: 257.26px !important;
    `,
  })}
`;

export const ImgWrapper = styled.div`
  width: 50%;
  padding-left: 16%;
  ${breakpoint({
    mobile: css`
      width: 100%;;
    `,
    tablet_mini: css`
      width: 50%;
    `,
    tablet: css`
      width: 50%;
      padding-left: -39.18%;
    `,
  })}
`;

export const IdealAvailable = styled.div`
  margin-top: 380px;
  width: 100%;
  ${breakpoint({
    mobile: css`
      margin-top: 270px;
    `,
    tablet_mini: css`
      margin-top: 290px;
    `,
    tablet: css`
      margin-top: 300px;
    `,
  })}
`;

export const IdealAvailableTitleHeaderSpan = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  font-family: 'Roboto Flex';
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
    `,
  })}
`;

export const IdealAvailableTitleSpan = styled.span`
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.002em;
  color: #0c0b0b;
  font-family: 'Roboto Flex';
  ${breakpoint({
    mobile: css``,
    tablet_mini: css`
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `,
    tablet: css`
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `,
  })}
`;

export const IdealAvailableTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${breakpoint({
    mobile: css`
      display: none;
    `,
    tablet_mini: css`
      gap: 12px;
    `,
    tablet: css`
      gap: 16px;
    `,
  })}
`;

export const IdealAvailableContent = styled.div`
  width: 100%;
  margin-top: 80px;

  ${breakpoint({
    mobile: css``,
    tablet_mini: css`
      margin-top: 28px;
    `,
    tablet: css`
      margin-top: 64px;
    `,
  })}
  & > div {
    margin-bottom: 24px;

    &:last-child {
      & > img {
        margin-right: -16px;
        ${breakpoint({
          mobile: css`
            margin-right: -16px;
          `,
          tablet_mini: css`
            margin-right: 0;
          `,
          tablet: css`
            margin-right: 0;
          `,
        })}
      }
    }
  }
`;

export const IdealAvailableItemImg = styled.img`
  margin-left: '-80px';
  width: 44.8%;
  ${breakpoint({
    mobile: css`
      width: 100%;
      -webkit-mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        0.1%,
        #f7fcfe 200%
      );
    `,
    tablet_mini: css`
      width: 43%;
    `,
    tablet: css`
      width: 396px;
      top: 52px;
    `,
  })}
`;

export const StakeToEarnImg = styled(IdealAvailableItemImg)`
  width: 25%;
  margin-top: 30px;
  margin-right: 70px;
  ${breakpoint({
    tablet: css`
      width: 280px;
      top: 52px;
    `,
  })}
`

export const GetTheExtensionButton = styled(NormalButton)`
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

export const IdealAvailableItem = styled.div`
  width: 100%;
  padding: 0 80px;
  gap: 16px;
  background: rgba(155, 218, 246, 0.08);
  border: 1px solid #eff5f5;
  border-radius: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
      padding: 0 16px;
      border-radius: 16px;
    `,
    tablet_mini: css`
      gap: 24px;
      border-radius: 16px;
    `,
    tablet: css`
      padding: 0;
      border-radius: 16px;
    `,
  })}
`;

export const ReverseIdealAvailableItem = styled.div`
  width: 100%;
  padding: 0 80px;
  gap: 16px;
  background: rgba(155, 218, 246, 0.08);
  border: 1px solid #eff5f5;
  border-radius: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  ${breakpoint({
    mobile: css`
      flex-direction: column-reverse;
      padding: 0 16px;
      border-radius: 16px;
    `,
    tablet_mini: css`
      gap: 24px;
      border-radius: 16px;
    `,
    tablet: css`
      padding: 0;
      border-radius: 16px;
    `,
  })}
`;

export const SecondIdealAvailableItemWrapper = styled.div`
  margin-left: 66px;
  padding: 60px 0;
  width: 55.5%;
  ${breakpoint({
    mobile: css`
      flex-direction: column;
      margin-left: 0;
      width: 100%;
      padding: 0 0 24px 0;
    `,
    tablet_mini: css`
      margin-left: 0;
      padding: 21.56px 24px 21.56px 0;
      width: 57%;
    `,
    tablet: css`
      margin-left: 0;
      padding: 48px 40px 48px 0;
    `,
  })}
`;

export const FirstIdealAvailableItemWrapper = styled.div`
  margin-left: 66px;
  padding: 60px 0;
  width: 50%;
  ${breakpoint({
    mobile: css`
      flex-direction: column;
      margin-left: 0;
      width: 100%;
      padding: 0 0 24px 0;
    `,
    tablet_mini: css`
      margin-left: 0;
      padding: 24px 0 24px 24px;
      width: 57%;
    `,
    tablet: css`
      margin-left: 0;
      padding: 44.5px 0 44.5px 40px;
    `,
  })}
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContentSpan = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.006em;
  color: #0c0b0b;
  display: inline-block;
  ${breakpoint({
    mobile: css`
      font-size: 12px;
      line-height: 20px;
    `,
    tablet_mini: css`
      font-size: 12px;
      line-height: 20px;
    `,
    tablet: css`
      font-size: 16px;
      line-height: 24px;
    `,
  })}
`;

export const ItemContentH3 = styled.div`
  font-family: Inter;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.006em;
  color: #0c0b0b;
  ${breakpoint({
    mobile: css`
      font-size: 12px;
      line-height: 17px;
    `,
    tablet_mini: css`
      font-size: 12px;
      line-height: 17px;
    `,
    tablet: css`
      font-size: 24px;
      line-height: 36px;
    `,
  })}
`;

export const H4Image = styled.img`
  height: 32px;
  margin-right: 16px;
  ${breakpoint({
    mobile: css`
      height: 16.82px;
      margin-right: 7.41px;
    `,
    tablet_mini: css`
      height: 16.82px;
    `,
    tablet: css`
      height: 24px;
    `,
  })}
`;

export const H4Span = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.006em;
  text-decoration-line: underline;
  color: #0c0b0b;
  ${breakpoint({
    mobile: css`
      font-size: 8px;
      line-height: 11px;
    `,
    tablet_mini: css`
      font-size: 8px;
      line-height: 11px;
    `,
    tablet: css``,
  })}
`;

export const ItemContentH4 = styled.h4`
  display: flex;
  align-items: center;
`;

export const IdealAvailableItemContent = styled.div`
  width: unset;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${breakpoint({
    mobile: css`
      font-size: 8px;
      line-height: 11px;
      gap: 14.82px;
    `,
    tablet_mini: css`
      font-size: 8px;
      line-height: 11px;
      gap: 14.82px;
    `,
    tablet: css`
      gap: 20px;
    `,
  })}
`;

export const Title = styled.span`
  font-family: 'RobotoFlex';
  font-weight: 590;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  ${breakpoint({
    mobile: css`
      font-size: 20px;
      line-height: 28px;
    `,
    tablet_mini: css`
      font-size: 20px;
      line-height: 28px;
    `,
    tablet: css`
      font-size: 32px;
      line-height: 40px;
    `,
  })}
`;

export const AppStoreImg = styled.img`
  cursor: pointer;
  ${breakpoint({
    mobile: css`
      width: 100%;
      border-radius: 12px;
      border: 1px solid #eff5f5;
      background-color: #ffffff;
      height: 56px;
    `,
    tablet_mini: css`
      width: 100%;
      border-radius: 12px;
      border: 1px solid #eff5f5;
      background-color: #ffffff;
      height: 56px;
    `,
    tablet: css`
      width: 50%;
    `,
  })}
`;
export const GooglePlayImg = styled.img`
  cursor: pointer;
  height: 76px;
  ${breakpoint({
    mobile: css`
      width: 100%;
      background-color: #ffffff;
      border-radius: 12px;
      border: 1px solid #eff5f5;
      height: 56px;
    `,
    tablet_mini: css`
      width: 100%;
      border-radius: 12px;
      border: 1px solid #eff5f5;
      background-color: #ffffff;
      height: 56px;
    `,
    tablet: css`
      width: 50%;
    `,
  })};
`;
export const MobileBtns = styled.div`
  display: none;
  ${breakpoint({
    mobile: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 8px;
      gap: 4px;
    `,
    tablet_mini: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 8px;
      gap: 4px;
    `,
    tablet: css``,
  })}
`;

export const Btns = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
  ${breakpoint({
    mobile: css`
      display: none;
    `,
    tablet_mini: css`
      display: none;
    `,
    tablet: css`
      max-width: 500px;
    `,
  })}
`;

export const YourPassport = styled.div`
  margin-top: 180px;
  width: 100%;
  ${breakpoint({
    mobile: css`
      margin-top: 64px;
    `,
    tablet_mini: css`
      margin-top: 64px;
    `,
    tablet: css`
      margin-top: 120px;
    `,
  })}
`;

export const YourPassportH3 = styled.h3`
  width: 50%;
  font-weight: 590;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  flex: 1;
  ${breakpoint({
    mobile: css`
      width: 100%;
      font-size: 32px;
      line-height: 32px;
    `,
    tablet_mini: css`
      font-size: 32px;
      line-height: 32px;
    `,
    tablet: css`
      font-size: 48px;
      line-height: 52px;
    `,
  })}
`;

export const YourPassportSpan = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.002em;
  color: #0c0b0b;
  flex: 1;
  ${breakpoint({
    mobile: css`
      font-size: 16px;
      line-height: 24px;
    `,
    tablet_mini: css`
      font-size: 16px;
      line-height: 24px;
    `,
    tablet: css`
      font-size: 24px;
      line-height: 36px;
    `,
  })}
`;

export const YourPassportTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  ${breakpoint({
    mobile: css`
      flex-direction: column;
      align-items: flex-start;
      font-weight: 590;
      font-size: 32px;
      line-height: 32px;
      gap: 12px;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
`;

export const YourPassportContent = styled.div`
  width: 100%;
  margin-top: 64px;
`;

export const YourPassportTop = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 12px;
  gap: 16px;

  ${breakpoint({
    mobile: css`
      flex-direction: column;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
  & > div:last-child {
    margin-right: 0;
  }
`;

export const YourPassportTopItemImg = styled.img`
  width: 132px;
  ${breakpoint({
    mobile: css`
      width: 48px;
    `,
    tablet_mini: css`
      width: 48px;
    `,
    tablet: css`
      width: 80px;
    `,
  })}
`;

export const YourPassportTopItemDiv = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  margin-bottom: 16px;
  margin-top: 36px;
  font-family: 'RobotoFlex';

  ${breakpoint({
    mobile: css`
      margin-bottom: 8px;
      margin-top: 12px;
      font-size: 16px;
      line-height: 24px;
    `,
    tablet_mini: css`
      margin-bottom: 8px;
      margin-top: 12px;
      font-weight: 590;
      font-size: 16px;
      line-height: 24px;
    `,
    tablet: css`
      margin-bottom: 16px;
      margin-top: 16px;
      font-size: 18px;
      line-height: 24px;
    `,
  })}
`;

export const YourPassportTopItemSpan = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.006em;
  color: #0c0b0b;
  opacity: 0.6;
  ${breakpoint({
    mobile: css`
      font-size: 12px;
      line-height: 20px;
    `,
    tablet_mini: css`
      font-size: 12px;
      line-height: 20px;
    `,
    tablet: css`
      font-size: 16px;
      line-height: 18px;
    `,
  })}
`;

export const YourPassportTopItem = styled.div`
  padding: 48px;
  background: rgb(248, 252, 254);
  border: 1px solid #eff5f5;
  border-radius: 32px;

  flex: 1;
  ${breakpoint({
    mobile: css`
      padding: 16px;

      border-radius: 16px;
    `,
    tablet_mini: css`
      padding: 16px;

      border-radius: 16px;
    `,
    tablet: css`
      padding: 16px;

      border-radius: 16px;
    `,
  })}
`;

export const YourPassportBottom = styled.div`
  padding: 48px;
  background: #ffffff;
  border: 1px solid #eff5f5;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${breakpoint({
    mobile: css`
      flex-direction: column;
      align-items: flex-start;
      padding: 16px;
      border-radius: 16px;
    `,
    tablet_mini: css`
      padding: 16px;
      border-radius: 16px;
    `,
    tablet: css`
      padding: 24px;
      border-radius: 16px;
    `,
  })}
`;

export const YourPassportBottomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${breakpoint({
    mobile: css`
      gap: 10px;
    `,
    tablet_mini: css`
      gap: 10px;
    `,
    tablet: css`
      gap: 20px;
    `,
  })}
  & > div {
    & > div {
      p,
      div {
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.006em;
        color: #0c0b0b;
        display: flex;
        align-items: center;
        margin: 0;
        ${breakpoint({
          mobile: css`
            font-size: 8px;
            line-height: 12px;
          `,
          tablet_mini: css`
            font-size: 8px;
            line-height: 12px;
          `,
          tablet: css`
            font-size: 12px;
            line-height: 18px;
          `,
        })};

        span {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0c0b0b;
          margin: 0 10px;
          ${breakpoint({
            mobile: css`
              margin: 0 6px;
            `,
            tablet_mini: css`
              margin: 0 6px;
            `,
            tablet: css`
              margin: 0 12px;
            `,
          })};
        }
      }

      & > div {
        text-decoration: underline;
      }
    }
  }
`;

export const StyledGrayButton = styled(GrayButton)`
  height: 64px;
  width: 34%;
  ${breakpoint({
    mobile: css`
      height: 40px;
      width: 100%;
      margin-top: 16px;
    `,
    tablet_mini: css`
      height: 40px;
    `,
    tablet: css`
      height: 56px;
    `,
  })}
`;

export const Productivity = styled.div`
  ${breakpoint({
    mobile: css`
      margin-left: -6px !important;
    `,
    tablet_mini: css`
      margin-left: -6px !important;
    `,
    tablet: css`
      margin-left: -12px !important;
    `,
  })}
`;

export const YourPassportCloverFinance = styled.div`
  display: flex;
  align-items: center;
`;

export const YourPassportCloverFinanceImg = styled.img`
  height: 24px;
  ${breakpoint({
    mobile: css`
      width: 56px;
    `,
    tablet_mini: css`
      width: 56px;
    `,
    tablet: css``,
  })};
`;

export const YourPassportCloverFinanceSpan = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.006em;
  color: #83979f;
  ${breakpoint({
    mobile: css`
      font-size: 8px;
      line-height: 11px;
    `,
    tablet_mini: css`
      font-size: 8px;
      line-height: 11px;
    `,
    tablet: css`
      font-size: 14px;
      line-height: 22px;
    `,
  })};
`;

export const YourPassportBottomLeftH3 = styled.h3`
  font-weight: 600;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: 0.008em;
  color: #0c0b0b;
  ${breakpoint({
    mobile: css`
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 0;
    `,
    tablet_mini: css`
      font-size: 20px;
      line-height: 26px;
      font-weight: 590;
      margin-bottom: 0;
    `,
    tablet: css`
      font-size: 32px;
      line-height: 40px;
    `,
  })}
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const YourPassportBottomLeftImg = styled.img`
  ${breakpoint({
    mobile: css`
      width: 57px;
    `,
    tablet_mini: css`
      width: 57px;
    `,
    tablet: css``,
  })}
`;

export const CloverFinanceBottomFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;

  ${breakpoint({
    mobile: css`
      gap: 0;
      align-items: center;

      p {
        font-size: 8px !important;
        transform: scale(0.7) !important;
      }

      span {
        font-size: 8px !important;
        transform: scale(0.7) !important;
      }

      div {
        font-size: 8px !important;
        transform: scale(0.7) !important;
      }
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
`;

export const Wrapper = styled.div`
  background: url('images/wallet_bg.svg') no-repeat;
  background-size: cover;
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 1000px;

  video {
    position: absolute;
    z-index: 0;
    top: 0;
    height: 100%;
    width: 100vw;
    object-fit: fill;
    ${breakpoint({
      mobile: css`
        height: 96%;
        width: unset;
        right: 0;
        top: 0;
      `,
      tablet: css`
        height: 109%;
      `,
      tablet_mini: css`
        height: 132%;
      `,
    })}
  }

  & > div {
    z-index: 1;
    top: 0;
    width: 100%;
  }
`;

// export const JoinUs = styled.div`
//   padding: 48px;
//   background: linear-gradient(45.66deg, rgba(189, 253, 226, 0.4) 8.33%, rgba(155, 218, 246, 0.4) 94.75%);
//   border-radius: 32px;
//   margin: 180px 0 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//
//   &>span {
//     font-family: Inter;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 20px;
//     text-align: center;
//     letter-spacing: 0.006em;
//     color: #4E5D60;
//   }
// `
//
// export const JoinUsTitle = styled.div`
//   text-align: center;
//
//   h3 {
//     display: flex;
//     align-items: center;
//     font-weight: 600;
//     font-size: 48px;
//     line-height: 60px;
//     letter-spacing: 0.008em;
//     color: #0C0B0B;
//
//     img {
//       width: 46px;
//       height: 46px;
//       margin-left: 16px;
//     }
//   }
// `
//
// export const JoinUsInput = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: #FFFFFF;
//   border-radius: 40px;
//   width: 648px;
//   height: 64px;
//   overflow: hidden;
//   margin: 24px 0;
//
//   input {
//     flex: 1;
//     height: 100%;
//     outline: none;
//     border: none;
//     text-indent: 20px;
//     font-family: Inter;
//   }
//   div {
//     display: flex;
//     align-items: center;
//     background: #0C0B0B;
//     border-radius: 32px;
//     height: 48px;
//     padding: 16px 24px;
//     margin: 0 8px;
//     font-family: Inter;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 24px;
//     letter-spacing: 0.002em;
//     color: #FFFFFF;
//     cursor: pointer;
//     &:hover {
//       opacity: 0.8;
//     }
//   }
// `

// this is a full height container that contains the Navbar, the Hero, and the bitcoin price
// when a user first visits the site this portion should take up 100% height
