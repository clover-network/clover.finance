import React, { ReactElement } from "react";
import styled, {css} from "styled-components";
import { t } from '../../i18n/intl';
import {breakpoint} from "../../mixins/breakpoint";

const CLVIsBackedWrapper = styled.div`
  width: 100%;
  margin-top: 180px;

  ${breakpoint({
    mobile: css`
        margin-top: 64px;
        margin-bottom: 24px;
    `,
    tablet: css`
    `,
    tablet_mini: css`
    `
  })};
`;

const CLVIsBackedTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

    ${breakpoint({
        mobile: css`
	        padding: 0;
            flex-direction: column;
            align-items: flex-start;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`;

const CLVIsBackedTitle = styled.div`
  width: 50%;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  margin-right: 16px;

    ${breakpoint({
        mobile: css`
            width: 100%;
            font-weight: 590;
            font-size: 32px;
            line-height: 32px;
	        margin-bottom: 8px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};

  h3 {
    font-size: 48px;
    line-height: 60px;
    color: #FFFFFF;

      ${breakpoint({
          mobile: css`
              font-weight: 590;
              font-size: 32px;
              line-height: 32px;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }
  span {
    color: #9BDAF6;
  }
`;
const CLVIsBackedHint = styled.div`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.006em;
  color: #FFFFFF;
  opacity: 0.6;
  width: 50%;

    ${breakpoint({
        mobile: css`
            width: 100%;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`

const CLVIsBackedBottom = styled.div`
  background: linear-gradient(28.19deg, #BDFDE2 -14.72%, #9BDAF6 116.35%);
  border-radius: 32px;
  padding: 32px;
  margin-top: 48px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  align-items: center;
  justify-content: space-between;
  grid-gap: 0;

    ${breakpoint({
        mobile: css`
            display:flex;
            flex-wrap: wrap;
	        margin: 28px 0;
            grid-template-columns: unset;
        `,
        tablet: css`
        `,
        tablet_mini: css`
        `
    })};
`

const CLVIsBackedBottomItem = styled.div`
  img {
    height: 96px;

      ${breakpoint({
          mobile: css`
	          height: unset;
	          width: 30vw;
          `,
          tablet: css`
          `,
          tablet_mini: css`
          `
      })};
  }
`

export default function CLVIsBacked(props: any): ReactElement {
  const images = [
    "images/leaders/polychain.png",
    "images/leaders/huobi.png",
    "images/leaders/okex.png",
    "images/leaders/hyperw.png",
    "images/leaders/alameda.png",
    "images/leaders/bithumb.png",
    "images/leaders/bitcom.png",
    "images/leaders/kr1.png",
    "images/leaders/cmsw.png",
    "images/leaders/gate.png",
  ];
  return (
    <CLVIsBackedWrapper>
      <CLVIsBackedTop>
        <CLVIsBackedTitle>
          <h3>{t('CLVIsBacked')}</h3>
          <span>{t('ByIndustryLeaders')}</span>
        </CLVIsBackedTitle>
        <CLVIsBackedHint>{t('CLVIsBackedHint')}</CLVIsBackedHint>
      </CLVIsBackedTop>
      <CLVIsBackedBottom>
        {images.map((item, index) => (
          <CLVIsBackedBottomItem key={`CLVIsBackedBottomItem_images_${index}`}>
            <img src={item} alt='' />
          </CLVIsBackedBottomItem>
        ))}
      </CLVIsBackedBottom>
    </CLVIsBackedWrapper>
  );
}
