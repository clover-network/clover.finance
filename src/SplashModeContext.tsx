import { createContext } from "react";

export enum SplashPageMode {
  CLOVER,
  SAKURA,
}

export const SplashModeContext = createContext(SplashPageMode.CLOVER);
