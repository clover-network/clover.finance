import { SplashSection } from "./SplashSection";
import {
  CenteredTitle,
  SpacerVertical,
} from "./CloverLibrary";
import React from "react";
import styled, { css, useTheme } from "styled-components";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { breakpoint } from "./mixins/breakpoint";
import { t } from './i18n/intl';

export const SectionGovernance = () => {
  const theme = useTheme();
  return (
    <SplashSection
      backgroundColor={theme.colors.LIGHT_PINK_BG}
    >
      <DivContainer id={AnchorLinkIds.GOVERNANCE}>
        <GovernanceContent>
          <GovernanceLeft>
            <GovernanceTitle>{t('GovernanceTitle')}</GovernanceTitle>
            <div>
              <Subtitle>{t('NewAvenue')}</Subtitle>
              <TextSpan>
                {t('NewAvenueHint1')}
              </TextSpan>
              <SpacerVertical height={"24px"} />
              <TextSpan>
                {t('NewAvenueHint2')}
              </TextSpan>
            </div>
          </GovernanceLeft>
          <GovernanceRight>
            <img src='images/governance.png' alt='' />
          </GovernanceRight>
        </GovernanceContent>
      </DivContainer>
    </SplashSection>
  );
};

const GovernanceTitle = styled(CenteredTitle)`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  text-transform: uppercase;
  color: #FF5995;
  margin-bottom: 38px;
  ${breakpoint(css`
    padding-left: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  `)};
`

const GovernanceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const GovernanceLeft = styled.div`
  max-width: 50%;
`

const GovernanceRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-left: 135px;
  img {
    width: 447px;
    height: 398px;
  }
  
  ${breakpoint(css`
    display: none;
  `)};
`

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  ${breakpoint(css`
    font-size: 15px;
    line-height: 24px;
  `)};
`

const TextSpan = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #303030;
  ${breakpoint(css`
    font-size: 15px;
    line-height: 24px;
  `)};
`

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 98px 0;

  ${breakpoint(css`
    margin-left: 0;
    padding: 48px 0 0;
  `)}
`;
