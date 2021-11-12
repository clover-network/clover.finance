import React, { useContext, useState } from 'react';
import styled, { css } from "styled-components";
import { SplashModeContext } from './SplashModeContext';
import { desktopOnly } from "./mixins/desktopOnly";
import { breakpoint } from "./mixins/breakpoint";
import { mobileOnly } from './mixins/mobileOnly';

const ReminderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 50px;
  background: ${(props) => props.theme.colors.HEADERBACK};
`;

const ReminderContent = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px 0 20px;
  margin: 0 auto;
`;

const ReminderIcon = styled.img`
  min-width: 26px;
  min-height: 26px;
  margin-right: 10px;
  ${desktopOnly};
`;

const ReminderWordDesk = styled.span`
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.theme.colors.HEADER};
  font-size: 18px;
  max-height: 100%;
  ${desktopOnly};
`;

const ReminderWordMobile = styled.span`
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.theme.colors.HEADER};
  font-size: 14px;
  max-height: 100%;
  ${mobileOnly};
`;

const LearnMore = styled.span`
  display: inline-block;
  padding: 0 10px;
  min-width: fit-content;
  height: 27px;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.HEADER};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.HEADER};
  box-sizing: border-box;
  border-radius: 24px;
  margin-left: 20px;
  cursor: pointer;
  ${breakpoint(css`
    padding: 0 5px;
    height: 23px;
    line-height: 20px;
    margin-left: 10px;
    font-size: 12px;
  `)};
`;

const CloseReminder = styled.img`
  position: absolute;
  right: 20px;
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

const PlaceHolder = styled.div`
  height: 26px;
`

const Header = () => {
  const [showReminder, setShowReminder] = useState(true);
  const mode = useContext(SplashModeContext);
  const louderIcon = mode ? "images/louder_icon_sku.svg" : "images/louder_icon.svg"

  return (
    <header>
      {showReminder && (
        <div>
          <ReminderWrapper>
            <ReminderContent>
              <ReminderIcon src={louderIcon}></ReminderIcon>
              <ReminderWordDesk>
                Clover crowdloan is open now.  Support the Clover parachain auction for CLV airdrop and Bonus Rewards.
              </ReminderWordDesk>
              <ReminderWordMobile>
                Clover crowdloan is open now.
              </ReminderWordMobile>
              <LearnMore
                onClick={() => window.open('https://lucky.clover.finance/')}
              >
                Learn more
              </LearnMore>
              <CloseReminder
                src="/images/close.svg"
                alt=""
                onClick={() => setShowReminder(false)}
              />
            </ReminderContent>
          </ReminderWrapper>
          <PlaceHolder></PlaceHolder>
        </div>
      )}
    </header>
  );
};

export default Header;
