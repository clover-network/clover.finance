import { createGlobalStyle, css } from "styled-components";
import { breakpoint } from "./mixins/breakpoint";

export const GlobalStyle = createGlobalStyle`
 *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
    background: ${(props) => props.theme.colors.BACKGROUND};
    max-width: 100%;

    // for 4k monitors, constrain to 1800px width
    @media (min-width: 1800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 max(calc((100vw - 1800px)/2), 0px);
    }
  }
  
  body.menu-visible{
    ${breakpoint(css`
      overflow: hidden;
    `)};
  }
  
  a {
    :hover {
      text-decoration: underline;
    }
    text-decoration: none;
    cursor: pointer;
    color: unset;
    font-size: unset;
  }
  html {
    scroll-behavior: smooth;
  }

 ul {
   list-style: outside;
   margin-left: 24px; //adjust so bullet points are within div

 }


 li::marker
 {
   //font-size: 2rem;
   //line-height: 3rem;
   //font-weight: bolder;
    color: ${(props) => props.theme.colors.ACCENT}; /* Change the color */
    font-size: 24px;
 }
 
 //
 //li:before {
 //  content: '\\00b7';
 //  font-size: 100px;
 //}

 //
 // li:before {
 //   //content: "\\2022 \\00A0";
 //   //color: ${(props) => props.theme.colors.ACCENT}; /* Change the color */
 //   //font-size: 2em; /* Change the color */
 //   //font-size: 30px; /* Change the color */
 //   //vertical-align: bottom;
 // }

 li {
    color: ${(props) => props.theme.colors.TITLE}; /* Change the color */
    //margin-left: 1em; /* Also needed for space (tweak if needed) */
    line-height: 3rem;
    font-size: ${(props) =>
      props.theme.fontSizes.SMALLER_SUBTITLE}; /* Change the color */
 }
 
 // customize swiper.js

 .swiper-button-prev {
   background-image: url("${(props) =>
     props.theme.id === "Sakura"
       ? "images/right arrow pink.svg"
       : "images/right arrow.svg"}") !important;
   background-repeat: no-repeat;
   background-position: center;
   transform: rotateZ(180deg);
   ::after {
     display: none;
   }
     width: 40px;
     height: 40px;
     
     ${breakpoint(css`
       width: 24px;
       height: 24px;
     `)};
 }

 .swiper-button-next {
   background-image: url("${(props) =>
     props.theme.id === "Sakura"
       ? "images/right arrow pink.svg"
       : "images/right arrow.svg"}") !important;
   background-repeat: no-repeat;
   background-position: center;

   ::after {
     display: none;
   }
     width: 40px;
     height: 40px;

     ${breakpoint(css`
       width: 24px;
       height: 24px;
     `)};
 }

 .swiper-pagination-bullet{
   background: ${(props) => props.theme.colors.TITLE};
   opacity: 0.5;
 }

 .swiper-pagination-bullet-active{
   opacity: 1.0;
   background: ${(props) => props.theme.colors.ACCENT};
 }
`;
