import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {t} from "../../i18n/intl";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import {breakpoint} from "../../mixins/breakpoint";
import { WrapperTableOnly } from '../../CloverLibrary';

interface Props {
	startBuild: () => void;
	navList: any[];
	handleChange: (tab: any) => void;
	currentTab: any;
}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 48px;
    width: 100vw;
    padding: 24px 24px 20px;
	background-color: ${(props) => props.theme.colors.BACKGROUND};
	z-index: 9;

    ${breakpoint({
        mobile: css`
            top: 48px;
        `,
        tablet_mini: css`
            top: 48px;
        `,
        tablet: css`
            top: 64px;
        `,
    })};

    .MuiPaper-root {
        background-color: ${(props) => props.theme.colors.BACKGROUND};
		
		.MuiAccordionSummary-root {
			padding: unset;
			
			.MuiAccordionSummary-content {
				margin: unset;
			}
		}
	}
	
	.MuiAccordion-root.Mui-expanded {
		margin: unset;
	}
	
	.MuiAccordionSummary-root.Mui-expanded {
		min-height: unset;
	}

	.MuiAccordionDetails-root {
		padding: unset;
	}
`;

const TopButtonGroup = styled.div`
	display: flex;
	flex-direction: row;

	div {
		height: 40px;
		flex: 1;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        border-radius: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

        ${breakpoint({
            mobile: css`
                flex: 1;
							display: none;
            `,
            tablet_mini: css`
                flex: 1;
            `,
            tablet: css`
                flex: unset;
	            width: 152px;
            `,
        })};
	}

    .menu-start-building {
        color: #0C0B0B !important;
        margin-right: 8px;
	    border-radius: 32px;
        --c1: #BDFDE2;
        --c2: #9BDAF6;
        background: linear-gradient(90deg, var(--c1, #f6d365), var(--c2, #fda085) 51%, var(--c1, #f6d365)) var(--x, 0)/ 200%;
    }
	
	.menu-view-documentation {
        color: #FFFFFF;
        border-radius: 32px;
        border: 1px solid #FFFFFF;
	}
`

const Title = styled.div`
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
	margin-top: 24px;
    color: ${(props) => props.theme.colors.TITLE};
	
`

const MenuItem = styled.div<{ showBorder?: boolean, isSelected?: boolean }>`
	width: 100%;
	font-weight: 400;
	font-size: 20px;
	line-height: 32px;
	color: ${(props) => props.theme.colors.TITLE};
	opacity: ${({isSelected}) => isSelected ? '0.6' : '1'};
	padding: 12px 0;
	border-top: ${({showBorder, theme}) => showBorder ? `1px solid #333232` : 'unset'};
	cursor: pointer;
`

const ClvChains = styled.div`
	
`

const ClvChainItem = styled.div<{ isSelected?: boolean }>`
    margin: 10px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.TITLE};
	opacity: ${({isSelected}) => isSelected ? '1' : '0.6'};
    cursor: pointer;
`

const StoreIcon = styled.div`
	border-radius: 8px;
	width: 100%;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
    background-color: #141414;
	cursor: pointer;

    ${breakpoint({
        mobile: css`
        `,
        tablet_mini: css`
        `,
        tablet: css`
	        margin-right: 8px;
        `,
    })};
`

const BottomDescribe = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.6;
`

const SocialButtonGroup = styled.div`
	margin-top: 8px;
	margin-bottom: 16px;
    display: flex;
    align-items: center;
`

const SocialsImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 20px;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }
`

const MobileAndTableMini = styled.div`
	display: none;
    ${breakpoint({
        mobile: css`
            display: initial;
        `,
        tablet_mini: css`
            display: initial;
        `,
        tablet: css`
            display: none;
        `,
    })};
`

const TableTitle = styled.span`
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.008em;
    color: #FFFFFF;
`

const StoreGroup = styled.div`
    display: flex;
	
    ${breakpoint({
        mobile: css`
            flex-direction: column;
        `,
        tablet_mini: css`
            flex-direction: column;
        `,
        tablet: css`
            flex-direction: row;
        `,
    })};
`

const ClvChainGroup = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
    border-top: ${({theme}) => `1px solid #333232`};
	align-items: center;
	
	img {
		width: 20px;
		height: 20px;
	}
`

export const HeaderMobileMenu = (props: Props) => {
	const [showMore, setShowMore] = useState(false);

	const onViewDocumentation = () => {
		window.open("https://docs.clv.org/", "_blank")
	}

	const onClickGoogle = () => {
		window.open("https://github.com/clover-network/clover-multichain-mobile-wallet-release/releases/latest/download/clover.apk", "_blank")
	}

	const onClickApple = () => {
		window.open("https://apps.apple.com/app/clover-wallet/id1570072858", "_blank")
	}

	return (
		<Wrapper>
			<MobileAndTableMini>
				<TopButtonGroup>
					<div className='menu-start-building' onClick={props.startBuild}>{t('startBuilding')}</div>
					<div className='menu-view-documentation' onClick={onViewDocumentation}>{t('viewDocumentation')}</div>
				</TopButtonGroup>
				{/*<Title>{t('Menu')}</Title>*/}
			</MobileAndTableMini>
			<WrapperTableOnly>
				<TopButtonGroup>
					<TableTitle>{t('Menu')}</TableTitle>
					<div style={{flex: 1}}/>
					<div className='menu-start-building' onClick={props.startBuild}>{t('startBuilding')}</div>
					<div className='menu-view-documentation' onClick={onViewDocumentation}>{t('viewDocumentation')}</div>
				</TopButtonGroup>
			</WrapperTableOnly>
			<MenuItem isSelected={props.currentTab.name === t('wallet')} onClick={() => props.handleChange(props.navList[0])}>Wallet</MenuItem>
			<Accordion>
				<AccordionSummary
					// expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<ClvChainGroup>
						<MenuItem isSelected={props.currentTab.name === t('CLVChains')} onClick={() => {
							setShowMore(!showMore)
							props.handleChange(props.navList[1]);
						}}>CLV Chains</MenuItem>
						<div style={{flex: 1}}/>
						<img
							src={showMore ? 'images/arrow_to_up.svg' : 'images/arrow_to_down.svg'}
							alt=''
							onClick={() => setShowMore(!showMore)}
						/>
					</ClvChainGroup>
				</AccordionSummary>
				<AccordionDetails>
					<ClvChains>
						<ClvChainItem
							onClick={() => window.open(props.navList[1].menuList[0].url, "_blank")}
						>
							Cross Chain Explorer
						</ClvChainItem>
						<ClvChainItem
							onClick={() => window.open(props.navList[1].menuList[1].url, "_blank")}
						>
							EVM Bridge
						</ClvChainItem>
						<ClvChainItem
							onClick={() => window.open(props.navList[1].menuList[2].url, "_blank")}
						>
							CLV Scan
						</ClvChainItem>
					</ClvChains>
				</AccordionDetails>
			</Accordion>
			<MenuItem isSelected={props.currentTab.name === t('home')} onClick={() => props.handleChange(props.navList[2])} showBorder={true}>Home</MenuItem>
			<MenuItem isSelected={props.currentTab.name === t('about')} onClick={() => props.handleChange(props.navList[3])} showBorder={true}>About</MenuItem>

			<MenuItem isSelected={props.currentTab.name === t('developers')} onClick={() => props.handleChange(props.navList[4])} showBorder={true}>Developers</MenuItem>
			<MenuItem isSelected={props.currentTab.name === t('ecosystem')} onClick={() => props.handleChange(props.navList[5])} showBorder={true}>Ecosystem</MenuItem>
			<StoreGroup>
				<StoreIcon style={{marginBottom: '8px'}} onClick={onClickGoogle}>
					<img src='images/logo_google.svg' alt='' />
				</StoreIcon>
				<StoreIcon style={{marginBottom: '20px'}} onClick={onClickApple}>
					<img src='images/logo_apple.svg' alt='' />
				</StoreIcon>
			</StoreGroup>
			<BottomDescribe>Follow us in social media</BottomDescribe>
			<SocialButtonGroup>
				<a href="https://t.me/clvorg" target="_blank" rel="noreferrer">
					<SocialsImg src={`images/telegram.svg`} />
				</a>
				<a href="https://twitter.com/clover_finance/" target="_blank" rel="noreferrer">
					<SocialsImg src={`images/twitter.svg`} />
				</a>
				<a href="https://discord.com/invite/M6SxuXqMVB" target="_blank" rel="noreferrer">
					<SocialsImg src={`images/discord.svg`} />
				</a>
				<a href="https://medium.com/@clv_org" target="_blank" rel="noreferrer">
					<SocialsImg src={`images/medium.svg`} />
				</a>
				<a href="https://www.youtube.com/channel/UCrEoV9sw6lxTR6PLasqfP9Q" target="_blank" rel="noreferrer">
					<SocialsImg src={`images/youtobe.svg`} />
				</a>
				<a href="https://www.tiktok.com/@clvbyclover" target="_blank" rel="noreferrer">
					<SocialsImg src={`images/tiktok.svg`} />
				</a>
			</SocialButtonGroup>
			<BottomDescribe>CLV © All Rights Reserved</BottomDescribe>
		</Wrapper>
	);
};
