import { SplashSection } from "./SplashSection";
import {
  BodyText,
  EscapeMargins,
  SpanEmailUs,
  Subtitle,
} from "./CloverLibrary";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { breakpoint } from "./mixins/breakpoint";
import { Socials } from "./Socials";

const modeToBackgroundImage = {
  [SplashPageMode.CLOVER]: "images/bg-footer.svg",
  [SplashPageMode.SAKURA]: "images/sakura-footer-bg.svg",
  [SplashPageMode.NFT]: "none",
};

export const SectionFooter = () => {
  const mode = useContext(SplashModeContext);

  const background = modeToBackgroundImage[mode];

  const hasMinHeight = mode !== SplashPageMode.NFT;

  // const fullWidthFooterBar = mode !== SplashPageMode.NFT;

  return (
    <SplashSection bottomBackground={background}>
      <DivContainer hasMinHeight={hasMinHeight}>
        {mode === SplashPageMode.SAKURA && <CloverSakuraColumns />}
        {mode === SplashPageMode.CLOVER && <CloverSakuraColumns />}
        {mode === SplashPageMode.NFT && <NFTColumns />}
      </DivContainer>
      <EscapeMargins>
        <FooterBar />
      </EscapeMargins>
    </SplashSection>
  );
};

const FooterBar = () => {
  return (
    <DivFooterBar>
      <DivCopyright>@Clover Inc. All Rights Reserved</DivCopyright>
      <Socials />
    </DivFooterBar>
  );
};

const CloverSakuraColumns = () => {
  return (
    <DivFooterColumns>
      <FooterColumn>
        <FooterColumnLabel>Resources</FooterColumnLabel>
        <Links>
          <Link>
            <a
              href="https://clover.finance/litepaper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </a>
          </Link>
        </Links>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnLabel>Products</FooterColumnLabel>
        <Links>
          <Link>
            <a
              href="https://apps.apple.com/app/clover-wallet/id1570072858"
              target="_blank"
              rel="noreferrer"
            >
              iOS Wallet
            </a>
          </Link>
          <Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.clover.finance.wallet&hl=en_US&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              Android Wallet
            </a>
          </Link>
          <Link>
            <a
              href="https://chrome.google.com/webstore/detail/clover-wallet/nhnkbkgjikgcigadomkphalanndcapjk"
              target="_blank"
              rel="noreferrer"
            >
              Extension Wallet
            </a>
          </Link>
          <Link>
            <a
              href="https://wallet.clover.finance/"
              target="_blank"
              rel="noreferrer"
            >
              Web Wallet
            </a>
          </Link>
          <Link>
            <a
              href="https://clover.subscan.io/"
              target="_blank"
              rel="noreferrer"
            >
              Explorer
            </a>
          </Link>
        </Links>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnLabel>Contact Us</FooterColumnLabel>
        <Links>
          <Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScl4kp4hD4Dv9JnPIdKEkTxL4ctVZQJtVoezeVqQVi676iKvw/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Wallet Integration
            </a>
          </Link>
          <Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQevVEw_hL44vvbcMkYB8kKdzTFAbtD1pR-QVraaA7h4jpKg/viewform"
              target="_blank"
              rel="noreferrer"
            >
              General Partnership
            </a>
          </Link>
        </Links>
      </FooterColumn>
      <EmailColumn>
        <FooterColumnLabel>
          <SpanEmailUs>
            Come say hello at{" "}
            <a href="mailto:info@clover.finance">info@clover.finance</a>
          </SpanEmailUs>
        </FooterColumnLabel>
      </EmailColumn>
    </DivFooterColumns>
  );
};

const NFTColumns = () => {
  return (
    <DivFooterColumns>
      <FooterColumn>
        <FooterColumnLabel>Visit Clover.finance</FooterColumnLabel>
        <Links>
          <Link>
            <a href="/" target="_blank" rel="noreferrer">
              Clover's website
            </a>
          </Link>
        </Links>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnLabel>About Polkadot Parachain</FooterColumnLabel>
        <Links>
          <Link>
            <a
              href="https://apps.apple.com/app/clover-wallet/id1570072858"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </Link>
        </Links>
      </FooterColumn>
      <EmailColumn>
        <FooterColumnLabel>
          <SpanEmailUs>
            Come say hello at{" "}
            <a href="mailto:info@clover.finance">info@clover.finance</a>
          </SpanEmailUs>
        </FooterColumnLabel>
      </EmailColumn>
    </DivFooterColumns>
  );
};

const FooterColumn = styled.div`
  max-width: 300px;
  padding-right: 48px;
  ${breakpoint(css`
    margin-bottom: 24px;
  `)};
`;

// move email to top in mobile
const EmailColumn = styled(FooterColumn)`
  ${breakpoint(css`
    order: -1;
    margin: 48px 0;
  `)};
`;

const FooterColumnLabel = styled(Subtitle)`
  color: ${(props) => props.theme.colors.TITLE};
`;

const DivFooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: auto;
  margin-bottom: 100px; //ensure footer bar has space below

  ${breakpoint(css`
    margin-bottom: unset; //ensure footer bar has space below

    flex-direction: column;
  `)}
`;

const Links = styled.div``;

const Link = styled(BodyText)`
  color: ${(props) => props.theme.colors.SUBTITLE};
`;

const DivContainer = styled.div<{
  hasMinHeight: boolean;
}>`
  display: flex;
  justify-content: start;
  flex-direction: column;

  ${(props) =>
    props.hasMinHeight &&
    css`
      min-height: 35vw;
    `};

  //min-height: 35vw;
  margin-top: 24px;
`;

const DivFooterBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.FOOTER};
  padding: 16px ${(props) => props.theme.margins.MINI_GUTTER_HORIZONTAL};

  display: flex;
  align-items: center;

  ${breakpoint(css`
    flex-direction: column;
    justify-content: center;
    position: unset;
    width: 100%;
  `)}
`;

const DivCopyright = styled(BodyText)`
  margin: 0 auto 0 0;
  ${breakpoint(css`
    margin: 24px 0;
  `)}
`;
