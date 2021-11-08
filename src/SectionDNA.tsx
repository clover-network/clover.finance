import { SplashSection } from "./SplashSection";
import { LeftAlignTitle, SpacerSection, Subtitle } from "./CloverLibrary";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SplashModeContext, SplashPageMode } from "./SplashModeContext";
import { AnchorLinkIds } from "./AnchorLinkIds";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { breakpoint } from "./mixins/breakpoint";

SwiperCore.use([Navigation, Pagination]);

export const SectionDNA = () => {
  const mode = useContext(SplashModeContext);

  const backedBy =
    mode === SplashPageMode.SAKURA ? backedBySakura : backedByClover;
  const partners =
    mode === SplashPageMode.SAKURA ? partnersSakura : partnersClover;

  return (
    <SplashSection>
      <DivContainer id={AnchorLinkIds.DNA}>
        {mode === SplashPageMode.SAKURA && (
          <LeftAlignTitle>SAKURA's DNA</LeftAlignTitle>
        )}
        {mode === SplashPageMode.CLOVER && (
          <LeftAlignTitle>CLOVER'S DNA</LeftAlignTitle>
        )}

        <SmallerSubtitle>Backed by</SmallerSubtitle>

        <DivSwiperContainer>
          <Swiper
            navigation={true}
            slidesPerView={"auto"}
            spaceBetween={16}
            slidesPerGroup={1}
          >
            {backedBy.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Item {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </DivSwiperContainer>

        <SpacerSection height={"24px"} />

        <SmallerSubtitle>Partner With</SmallerSubtitle>

        <DivSwiperContainer>
          <Swiper
            navigation={true}
            slidesPerView={"auto"}
            spaceBetween={16}
            slidesPerGroup={1}
          >
            {partners.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Item {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </DivSwiperContainer>
      </DivContainer>
    </SplashSection>
  );
};

const SmallerSubtitle = styled(Subtitle)`
  ${breakpoint(css`
    font-size: 14px;
    margin-bottom: 0;
  `)};
`;

const DivSwiperContainer = styled.div`
  .swiper-slide {
    width: 220px;
    height: 130px;
    padding: 8px;
  }
`;

const backedBySakura = [
  { image: `images/dna/BlackSuppo/Polychain_Capital.png` },
  { image: `images/dna/BlackSuppo/HUOBIBL.png` },
  { image: `images/dna/BlackSuppo/okex-black.png` },
  { image: `images/dna/BlackSuppo/AS.png` },
  { image: `images/dna/BlackSuppo/bitcom-black.png` },
  { image: `images/dna/BlackSuppo/Bit.png` },
  { image: `images/dna/BlackSuppo/CMSBL.png` },
  { image: `images/dna/BlackSuppo/GATEIOBL.png` },
  { image: `images/dna/BlackSuppo/HYPERBL.png` },
  { image: `images/dna/BlackSuppo/HYPERSPBL.png` },
  { image: `images/dna/BlackSuppo/IGBL.png` },
  { image: `images/dna/BlackSuppo/KR1.png` },
];

const backedByClover = [
  { image: `images/dna/WhiteSuppo/Polychain_Capital.png` },
  { image: `images/dna/WhiteSuppo/HUOBIW.png` },
  { image: `images/dna/WhiteSuppo/okex-white.png` },
  { image: `images/dna/WhiteSuppo/ASW.png` },
  { image: `images/dna/31Whitee/bitcom-white.png` },
  { image: `images/dna/WhiteSuppo/BitW.png` },
  { image: `images/dna/WhiteSuppo/CMSW.png` },
  { image: `images/dna/WhiteSuppo/GATEIOW.png` },
  { image: `images/dna/WhiteSuppo/HYPERW.png` },
  { image: `images/dna/WhiteSuppo/HYPERSPW.png` },
  { image: `images/dna/WhiteSuppo/IGW.png` },
  { image: `images/dna/WhiteSuppo/KR1.png` },
];

const partnersSakura = [
  { image: `images/dna/31Blackk/0chain_black.png` },
  { image: `images/dna/31Blackk/alice.png` },
  { image: `images/dna/31Blackk/ANKR.png` },
  { image: `images/dna/31Blackk/apron.png` },
  { image: `images/dna/31Blackk/automata-black.png` },
  { image: `images/dna/31Blackk/bella-black.png` },
  { image: `images/dna/31Blackk/bitcom-black.png` },
  { image: `images/dna/31Blackk/boringdao.png` },
  { image: `images/dna/31Blackk/bounce.png` },
  { image: `images/dna/31Blackk/chainlink.png` },
  { image: `images/dna/31Blackk/chainswap.png` },
  { image: `images/dna/31Blackk/crust.png` },
  { image: `images/dna/31Blackk/Cryptoblades.png` },
  { image: `images/dna/31Blackk/darwinia.png` },
  { image: `images/dna/31Blackk/dego.png` },
  { image: `images/dna/31Blackk/dodo (1).png` },
  { image: `images/dna/31Blackk/easyfi.png` },
  { image: `images/dna/31Blackk/etha_lend.png` },
  { image: `images/dna/31Blackk/fantom-black.png` },
  { image: `images/dna/31Blackk/graph.png` },
  { image: `images/dna/31Blackk/hedget.png` },
  { image: `images/dna/31Blackk/injective.png` },
  { image: `images/dna/31Blackk/kiranetwork.png` },
  { image: `images/dna/31Blackk/manta-black.png` },
  { image: `images/dna/31Blackk/mathwallet.png` },
  { image: `images/dna/31Blackk/parsiq (1).png` },
  { image: `images/dna/31Blackk/polygon.png` },
  { image: `images/dna/31Blackk/showcase.png` },
  { image: `images/dna/31Blackk/snowswap.png` },
  { image: `images/dna/31Blackk/unilend.png` },
];

const partnersClover = [
  { image: `images/dna/31Whitee/0chain_white.png` },
  { image: `images/dna/31Whitee/alice.png` },
  { image: `images/dna/31Whitee/ANKR.png` },
  { image: `images/dna/31Whitee/apron.png` },
  { image: `images/dna/31Whitee/automata-white.png` },
  { image: `images/dna/31Whitee/bella.png` },
  { image: `images/dna/31Whitee/bitcom-white.png` },
  { image: `images/dna/31Whitee/boringdao.png` },
  { image: `images/dna/31Whitee/bounce.png` },
  { image: `images/dna/31Whitee/chainlink.png` },
  { image: `images/dna/31Whitee/chainswap.png` },
  { image: `images/dna/31Whitee/crust.png` },
  { image: `images/dna/31Whitee/Cryptoblades.png` },
  { image: `images/dna/31Whitee/darwinia.png` },
  { image: `images/dna/31Whitee/dego.png` },
  { image: `images/dna/31Blackk/dodo (1).png` },
  { image: `images/dna/31Whitee/easyfi.png` },
  { image: `images/dna/31Whitee/etha_lend.png` },
  { image: `images/dna/31Whitee/fantom-white.png` },
  { image: `images/dna/31Whitee/graph.png` },
  { image: `images/dna/31Whitee/hedget.png` },
  { image: `images/dna/31Whitee/injective.png` },
  { image: `images/dna/31Whitee/kiranetwork.png` },
  { image: `images/dna/31Whitee/manta-white.png` },
  { image: `images/dna/31Whitee/mathwallet.png` },
  { image: `images/dna/31Whitee/parsiq.png` },
  { image: `images/dna/31Whitee/polygon.png` },
  { image: `images/dna/31Whitee/showcase.png` },
  { image: `images/dna/31Whitee/snowswap.png` },
  { image: `images/dna/31Whitee/unilend.png` },
];

const Item: React.FC<{ image: string }> = ({ image }) => {
  return (
    <DivSponsor>
      <ImgSponsor src={image} />
    </DivSponsor>
  );
};

const DivSponsor = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.misc.DEFAULT_BORDER_RADIUS};
  display: flex;
  border-width: 5px;
  padding: 10px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.ACCENT};
`;

const ImgSponsor = styled.img`
  margin: auto;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;
