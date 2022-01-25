import { SplashSection } from "./SplashSection";
import {
  Grid,
  GridItem,
  LeftAlignTitle,
  Small,
  SpanAccent,
} from "./CloverLibrary";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { breakpoint } from "./mixins/breakpoint";
import { Swiper, SwiperSlide } from "swiper/react";

export const SectionBlog = () => {
  const mode = useContext(SplashModeContext);
  const items = mode === SplashPageMode.SAKURA ? SakuraItems : CloverItems;
  return (
    <SplashSection>
      <DivContainer>
        {mode === SplashPageMode.SAKURA && (
          <LeftAlignTitle id={AnchorLinkIds.BLOG}>
            <SpanAccent>Blog</SpanAccent>
          </LeftAlignTitle>
        )}
        {mode === SplashPageMode.CLOVER && (
          <LeftAlignTitle id={AnchorLinkIds.BLOG}>Blog</LeftAlignTitle>
        )}

        <GridWithLargerGaps>
          {items.map((item, i) => {
            return <Blog {...item} key={i} />;
          })}
        </GridWithLargerGaps>
        <DivMobileOnly>
          <Swiper navigation={true}>
            {items.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Blog {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </DivMobileOnly>
      </DivContainer>
    </SplashSection>
  );
};

const Blog: React.FC<{
  image: string;
  title: string;
  url: string;
}> = ({ image, title, url }) => {
  return (
    <GridItem>
      <DivBlogContainer>
        {/* Set initial aspect ratio */}
        <ImgBlog src={image} width={372} height={212} />
        <DivBlogCaption>
          <Small>{title}</Small>
          <DivSeeMore>
            <SpanAccent>
              <a href={url} target="_blank" rel="noreferrer">
                SEE MORE
              </a>
            </SpanAccent>
          </DivSeeMore>
        </DivBlogCaption>
      </DivBlogContainer>
    </GridItem>
  );
};

const GridWithLargerGaps = styled(Grid)`
  grid-gap: 2em;
  ${breakpoint(css`
    display: none;
  `)}
`;

const DivMobileOnly = styled.div`
  display: none;
  ${breakpoint(css`
    display: unset;
  `)}
`;

const DivBlogCaption = styled.div`
  margin-top: 16px;
  display: flex;
`;

const ImgBlog = styled.img`
  border-radius: ${(props) => props.theme.misc.DEFAULT_BORDER_RADIUS};
  width: 100%;
  height: unset;
`;

const DivBlogContainer = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
`;

const DivSeeMore = styled(Small)`
  margin-left: auto;
  padding-left: 24px;
  //padding-left: 30px;
  //min-width: 100px;
  //text-align: end;

  white-space: nowrap;
`;

const CloverItems = [
  {
    image: `images/blog-seed.png`,
    title:
      "Clover completes Seed round with Polychain, Hypersphere, Bithumb Global and Divergence Ventures",
    url: "https://medium.com/projectclover/clover-completes-seed-round-with-polychain-hypersphere-bithumb-global-and-divergence-ventures-828120164074",
  },
  {
    image: `images/blog-round-4.png`,
    title: "Clover Monthly | March 2021",
    url: "https://blog.coinlist.co/clover-token-sale-update-announcing-round-4-community-sale-on-coinlist/",
  },
  {
    image: `images/blog-announcing.png`,
    title:
      "Clover Finance: The Lightest and Easiest DeFi Infrastructure Empowered by Polkadot",
    url: "https://blog.clover.finance/announcing-the-30-million-clv-wallet-incentive-program-3a495a06b147",
  },
];

const SakuraItems = [
  ...CloverItems, // change if necessary
];

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;
