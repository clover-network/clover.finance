import { createContext } from "react";

export enum SplashPageMode {
  CLOVER,
  SAKURA,
  NFT,
}

export const SplashModeContext = createContext(SplashPageMode.CLOVER);
