import React from 'react';
import styled from "styled-components";
import {GrayButton, NormalButton} from "../Btn";
import {t} from "../../i18n/intl";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";

interface Props {
}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 48px;
    width: 100vw;
    padding: 24px 24px 20px;
	background-color: ${(props) => props.theme.colors.BACKGROUND};
	
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

const MenuItem = styled.div<{ showBorder?: boolean }>`
	width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: ${(props) => props.theme.colors.TITLE};
	padding: 12px 0;
    border-top: ${({showBorder, theme}) => showBorder ? `1px solid ${theme.colors.BODY}` : 'unset'};
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
`

const StoreIcon = styled.div`
	border-radius: 8px;
	width: 100%;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
    background-color: #141414;
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

export const HeaderMobileMenu = (props: Props) => {

	const onStartBuilding = () => {
	}
	const onViewDocumentation = () => {
	}

	return (
		<Wrapper>
			<TopButtonGroup>
				<div className='menu-start-building' onClick={onStartBuilding}>{t('startBuilding')}</div>
				<div className='menu-view-documentation' onClick={onViewDocumentation}>{t('viewDocumentation')}</div>
			</TopButtonGroup>
			<Title>{t('Menu')}</Title>
			<MenuItem>Home</MenuItem>
			<MenuItem>About</MenuItem>

			<Accordion>
				<AccordionSummary
					// expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<MenuItem showBorder={true}>CLV Chains</MenuItem>
				</AccordionSummary>
				<AccordionDetails>
					<ClvChains>
						<ClvChainItem>Cross Chain Explorer</ClvChainItem>
						<ClvChainItem>EVM Bridge</ClvChainItem>
						<ClvChainItem>CLV Scan</ClvChainItem>
					</ClvChains>
				</AccordionDetails>
			</Accordion>
			<MenuItem showBorder={true}>Wallet</MenuItem>
			<MenuItem showBorder={true}>Developers</MenuItem>
			<MenuItem showBorder={true}>Ecosystem</MenuItem>
			<StoreIcon style={{marginBottom: '8px'}}>
				<img src='images/logo_google.svg' alt='' />
			</StoreIcon>
			<StoreIcon style={{marginBottom: '20px'}}>
				<img src='images/logo_apple.svg' alt='' />
			</StoreIcon>
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
