import { SplashSection } from "./SplashSection";
import {
  Grid,
  GridItem,
  SpanAccent,
} from "./CloverLibrary";
import React from "react";
import styled, { css, useTheme } from 'styled-components';
import { breakpoint } from "./mixins/breakpoint";
import { t } from './i18n/intl';

export const SectionBlog = () => {
  const CloverItems = [
    {
      image: `images/blog-seed.png`,
      title: t('blogText1'),
      url: "https://medium.com/projectclover/clover-completes-seed-round-with-polychain-hypersphere-bithumb-global-and-divergence-ventures-828120164074",
    },
    {
      image: `images/blog_report.png`,
      title: t('blogText2'),
      url: "https://blog.coinlist.co/clover-token-sale-update-announcing-round-4-community-sale-on-coinlist/",
    },
    {
      image: `images/blog-foundational.png`,
      title: t('blogText3'),
      url: "https://blog.clover.finance/announcing-the-30-million-clv-wallet-incentive-program-3a495a06b147",
    },
  ];

  const theme = useTheme();

  return (
    <SplashSection backgroundColor={theme.colors.TITLE} bottomLeftBackground='images/blog_bg.png' bottomLeftSize='60%'>
      <DivContainer>
        <SectionBlogTitle>
          {t('blog')}
        </SectionBlogTitle>
        <GridWithLargerGaps>
          {CloverItems.map((item, i) => {
            return <Blog {...item} key={i} />;
          })}
        </GridWithLargerGaps>
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
    <BlogItem>
      <DivBlogContainer>
        {/* Set initial aspect ratio */}
        <ImgBlog>
          <img src={image} alt='' />
        </ImgBlog>
        <DivBlogCaption>
          <TextSpan>{title}</TextSpan>
          <DivSeeMore>
            <SpanAccent>
              <a href={url} target="_blank" rel="noreferrer">
                {t('seeMore')}
              </a>
            </SpanAccent>
          </DivSeeMore>
        </DivBlogCaption>
      </DivBlogContainer>
    </BlogItem>
  );
};

const BlogItem = styled(GridItem)`
`

const SectionBlogTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${breakpoint(css`
    font-size: 32px;
    line-height: 40px;
  `)}
`

const GridWithLargerGaps = styled(Grid)`
  margin-top: 45px;
  grid-gap: 2em;
  ${breakpoint(css`
    margin-top: 20px;
  `)}
`;

const DivBlogCaption = styled.div`
  margin-top: 16px;
`;

const TextSpan = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.BACKGROUND};
  ${breakpoint(css`
    font-size: 15px;
  `)}
`;

const ImgBlog = styled.div`
  background: ${(props) => props.theme.colors.TITLE};
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 256px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 368px;
  }
`;

const DivBlogContainer = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
`;

const DivSeeMore = styled.div`
  margin-left: auto;
  white-space: nowrap;
  margin-top: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.ACCENT};
  ${breakpoint(css`
    margin-top: 8px;
    font-size: 12px;
  `)}
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 128px 0;
  
  ${breakpoint(css`
    width: 100vw;
    background-image: url("images/mobile_blog_bg.png");
    background-position: 0 38%;
    background-repeat: no-repeat;
    padding: 50px 24px;
    margin-left: -24px;
  `)};
`;
