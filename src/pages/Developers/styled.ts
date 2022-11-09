import styled, { css } from 'styled-components';
import { breakpoint } from '../../mixins/breakpoint';
import { GrayButton } from '../../components/Btn';
import { NormalButton } from '../../components/Btn';

export const Content = styled.div`
  width: 100%;
  background: #000000;
  & > div {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const SocialsImg = styled.img`
  width: 48px;
  height: 48px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #fff;
  ${breakpoint({
    mobile: css`
      width: 40px;
      height: 40px;
    `,
    tablet_mini: css`
      width: 40px;
      height: 40px;
    `,
    tablet: css`
      width: 64px;
      height: 64px;
    `,
  })}
  &:hover {
    opacity: 0.8;
  }
`;

export const UpperCaseSpan = styled.div`
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.026em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  ${breakpoint({
    mobile: css`
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
    `,
    tablet_mini: css`
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
    `,
    tablet: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    `,
  })}
`;

export const EnterWeb3 = styled.div`
  width: 100%;
  padding-top: 289px;
  ${breakpoint({
    mobile: css`
      padding-top: 0;
    `,
    tablet_mini: css`
      padding-top: 144px;
    `,
    tablet: css`
      padding-top: 168px;
    `,
  })}
  video {
    position: absolute;
    z-index: -1;
    top: 80px;
    left: 0;
    right: 0;
    width: 100%;
    ${breakpoint({
      mobile: css``,
      tablet_mini: css``,
      tablet: css``,
    })}
  }
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

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${breakpoint({
    mobile: css`
      align-items: flex-start;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}

  ${breakpoint(css`
    width: unset;
    flex-direction: column;
    margin-left: 0;
  `)};
`;

export const BuildWithCLVEnterWeb3Img = styled.img`
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

export const BuildWithCLVEnterWeb3 = styled.div`
  font-family: 'Roboto Flex';
  font-weight: 600;
  font-size: 72px;
  line-height: 76px;
  letter-spacing: 0.008em;
  color: #ffffff;
  gap: 10px;
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
  }
`;

export const BuildWithCLVEnterWeb3Span = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.006em;
  color: #ffffff;
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

export const TextWrapper = styled.div`
  width: 59%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;
  gap: 24px;
  ${breakpoint({
    mobile: css`
      width: 100%;
      padding-top: 0;
      gap: 16px;
    `,
    tablet_mini: css`
      gap: 32px;
    `,
    tablet: css`
      gap: 24px;
    `,
  })}

  ${breakpoint(css`
    span {
      font-size: 15px;
      line-height: 24px;
    }
  `)};
`;

export const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  width: 100%;
  gap: 48px;
  ${breakpoint({
    mobile: css`
      margin-top: 64px;
      flex-direction: column;
      align-items: center;
    `,
    tablet_mini: css`
      margin-top: 40px;
    `,
    tablet: css`
      margin-top: 120px;
      gap: 16px;
    `,
  })}
`;

export const ContentBottomLeft = styled.div`
  width: 49%;
  /* height: 388px; */
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: url('images/tools_bg.svg') no-repeat;
  background-size: cover;
  border-radius: 32px;
  ${breakpoint({
    mobile: css`
      padding: 16px;
      width: 100%;
      gap: 12px;
      border-radius: 16px;
    `,
    tablet_mini: css`
      padding: 16px;
      border-radius: 16px;
    `,
    tablet: css`
      padding: 24px 32px;
    `,
  })}
`;

export const ContentBottomLeftTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.008em;
    color: #ffffff;
    ${breakpoint({
      mobile: css`
        flex-direction: column;
        align-items: flex-start;
        font-weight: 590;
        font-size: 16px;
        line-height: 24px;
      `,
      tablet_mini: css`
        font-weight: 590;
        font-size: 16px;
        line-height: 24px;
      `,
      tablet: css`
        font-weight: 590;
        font-size: 16px;
        line-height: 24px;
      `,
    })}
  }
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: right;
    letter-spacing: 0.006em;
    color: #ffffff;
    ${breakpoint({
      mobile: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
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
      `,
    })}
  }
  ${breakpoint({
    mobile: css`
      flex-direction: column;
      align-items: flex-start;
    `,
    tablet_mini: css`
      flex-direction: column;
      align-items: flex-start;
    `,
    tablet: css``,
  })}
`;

export const ContentBottomLeftContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  align-items: center;
  gap: 16px;
  & > div:last-child {
    img {
      margin-bottom: 0;
    }
  }
`;

export const ContentBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  background: url('images/tools_item_bg.svg') no-repeat;
  background-size: cover;
  border-radius: 16px;
  img {
    margin-bottom: 8px;
    width: 50px;
    ${breakpoint({
      mobile: css`
        width: 36px;
      `,
      tablet_mini: css`
        width: 38%;
      `,
      tablet: css`
        width: 40%;
      `,
    })}
  }
  span {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.006em;
    color: #ffffff;
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
        font-size: 12px;
        line-height: 20px;
      `,
    })}
  }
  ${breakpoint({
    mobile: css`
      height: 88px;
    `,
    tablet_mini: css`
      height: 88px;
    `,
    tablet: css`
      height: 96px;
    `,
  })}
`;

export const ContentBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 32px;
  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.008em;
    color: #ffffff;
    margin-bottom: 0;
    ${breakpoint({
      mobile: css`
        font-weight: 590;
        font-size: 20px;
        line-height: 28px;
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
  }

  ${breakpoint({
    mobile: css`
      width: 100%;
      gap: 8px;
    `,
    tablet_mini: css`
      gap: 8px;
    `,
    tablet: css`
      gap: 20px;
    `,
  })}
`;

export const ContentBottomGraybutton = styled(GrayButton)`
  ${breakpoint({
    mobile: css`
      height: 40px;
    `,
    tablet_mini: css`
      height: 40px;
    `,
    tablet: css`
      height: 60px;
    `,
  })}
`;

export const JoinCommunity = styled.div`
  width: 100%;
  margin-top: 88px;
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

export const JoinCommunityTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: 0.008em;
  color: #ffffff;
  ${breakpoint({
    mobile: css`
      font-weight: 590;
      font-size: 32px;
      line-height: 32px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    `,
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
  h3 {
    color: #bdfde2;
    font-size: 64px;
    line-height: 68px;
    ${breakpoint({
      mobile: css`
        font-weight: 590;
        font-size: 32px;
        line-height: 32px;
      `,
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
  }
`;

export const StyledAWrapper = styled.a`
  display: flex;
  gap: 40px;
  ${breakpoint({
    mobile: css`
      gap: 24px;
    `,
    tablet_mini: css`
      gap: 24px;
    `,
    tablet: css`
      gap: 24px;
    `,
  })}
`;

export const JoinCommunityContent = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${breakpoint({
    mobile: css`
      display: block;
      margin-top: 28px;
    `,
    tablet_mini: css``,
    tablet: css``,
  })}
`;

export const JoinCommunityItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px;
  background: #141414;
  border-radius: 32px;
  min-height: 360px;
  gap: 8px;
  ${breakpoint({
    mobile: css`
      padding: 16px;
      gap: 2px;
      margin-bottom: 16px;
      border-radius: 16px;
    `,
    tablet_mini: css`
      padding: 16px;
      gap: 2px;
      min-height: 194px;
      border-radius: 16px;
    `,
    tablet: css`
      padding: 32px;
      gap: 4px;
      min-height: 308px;
      border-radius: 16px;
    `,
  })}

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.008em;
    color: #ffffff;
    ${breakpoint({
      mobile: css`
        font-weight: 590;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
      `,
      tablet_mini: css`
        font-weight: 590;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
      `,
      tablet: css`
        font-weight: 590;
        font-size: 24px;
        line-height: 32px;
      `,
    })}
  }
  span {
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
      mobile: css`
        margin: 8px 0 12px 0;
      `,
      tablet_mini: css`
        font-size: 12px;
        line-height: 20px;
        margin: 8px 0 12px 0;
      `,
      tablet: css`
        margin: 16px 0;
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

export const InterestedPartnerships = styled.div`
  margin-top: 88px;
  display: flex;
  align-items: center;
  background: #141414;
  border-radius: 32px;
  padding: 48px;
  gap: 32px;
  & > div {
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;
    &:first-child {
      ${breakpoint({
        mobile: css``,
        tablet_mini: css``,
        tablet: css``,
      })}
    }
    h3 {
      font-weight: 600;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.008em;
      color: #ffffff;
      ${breakpoint({
        mobile: css`
          font-weight: 590;
          font-size: 16px;
          line-height: 24px;
        `,
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
    span {
      font-family: Inter;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.006em;
      color: #ffffff;
      display: inline-block;
      margin-bottom: 20px;
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
          line-height: 28px;
        `,
      })}
    }
    img {
      width: 100%;

      ${breakpoint({
        mobile: css`
          margin-left: -20px;
        `,
        tablet_mini: css``,
        tablet: css``,
      })}
    }
  }
  ${breakpoint({
    mobile: css`
      flex-direction: column-reverse;
      margin-top: 64px;
      gap: 0;
      border-radius: 16px;
    `,
    tablet_mini: css`
      padding: 16px;
      gap: 12px;
      border-radius: 16px;
    `,
    tablet: css`
      margin-top: 120px;
      gap: 40px;
      border-radius: 16px;
    `,
  })}
`;

export const GetInvolvedInTheIndustry = styled(InterestedPartnerships)`
  width: 100%;
  margin-top: 24px;
  & > div {
    img {
      ${breakpoint({
        mobile: css`
          margin-left: 18px;
        `,
        tablet_mini: css``,
        tablet: css``,
      })}
    }
  }

  ${breakpoint({
    mobile: css`
      flex-direction: column;
      margin-bottom: 64px;
    `,
    tablet_mini: css`
      margin-bottom: 64px;
    `,
    tablet: css`
      margin-bottom: 120px;
    `,
  })}
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

export const Wrapper = styled.div`
  padding: 0 64px;
  max-width: 1440px;
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
