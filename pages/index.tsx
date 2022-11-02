import React, {useEffect} from "react";
import {SplashModeContext, SplashPageMode} from "../src/SplashModeContext";
import {GlobalStyle} from "../src/GlobalStyle";
import {DefaultHead} from "../src/DefaultHead";
import {AppBase} from '../src/layout/AppBase/AppBase';
import {NewContent} from '../src/pages/newContent';
import store from '../src/state';
import {Provider} from 'react-redux';

export default function FirstPost() {
    useEffect(() => {
        const ua = navigator.userAgent
        const isWindowsPhone = /(?:Windows Phone)/.test(ua)
        const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
        const isAndroid = /(?:Android)/.test(ua)
        const isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua))
        const isPhone = /(?:iPhone)/.test(ua) && !isTablet
        const isPc = !isPhone && !isAndroid && !isSymbian
        if (!isPc) {
            window.open('https://m.clv.org/', '_self')
        }
    }, [])
    return (
        <SplashModeContext.Provider value={SplashPageMode.CLOVER}>
            <Provider store={store}>
                <AppBase>
                    <DefaultHead/>
                    <GlobalStyle/>
                    <NewContent/>
                </AppBase>
            </Provider>
        </SplashModeContext.Provider>
    );
}
