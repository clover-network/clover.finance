const HEADER_MENU = [
  {
    link: 'https://github.com/clover-network/',
    label: 'Github',
  },
  {
    link: 'https://docs.clover.finance/',
    label: 'Docs',
  },
  {
    link: 'https://projectclover.medium.com/',
    label: 'Blog',
  },
  {
    link: 'https://discord.com/invite/z2egJBsBWx/',
    label: 'Discord',
  },
];

const SOCIAL_ICONS = {
  twitter: 'twitter',
  telegram: 'telegram',
  discord: 'discord',
  medium: 'medium',
  linkedin: 'linkedin',
};
const SOCIALS = [
  {
    link: 'https://twitter.com/clover_finance/',
    icon: SOCIAL_ICONS.twitter,
  },
  {
    link: 'https://t.me/clover_en/',
    icon: SOCIAL_ICONS.telegram,
  },
  {
    link: 'https://discord.com/invite/z2egJBsBWx/',
    icon: SOCIAL_ICONS.discord,
  },
  {
    link: 'https://projectclover.medium.com/',
    icon: SOCIAL_ICONS.medium,
  },
  {
    link: 'https://www.linkedin.com/company/projectclover/',
    icon: SOCIAL_ICONS.linkedin,
  },
];

const BLOCKS_ICONS = {
  polkadot: 'polkadot',
  schedule: 'schedule',
  income: 'income',
  nofee: 'nofee',
};
const BLOCKS = [
  {
    icon: BLOCKS_ICONS.polkadot,
    text: 'EVM compatibility to&nbsp;easily deploy Ethereum dApps on&nbsp;Polkadot and create trustless two&#8209;way pegs between ERC20 and DOT&#8209;based assets.',
  },
  {
    icon: BLOCKS_ICONS.schedule,
    text: 'Identity fee&#8209;based schedule identifies frequent dApp users and rewards them with lower gas fees.',
  },
  {
    icon: BLOCKS_ICONS.income,
    text: 'Unique incentive structure creates passive income streams for contract developers.'
  },
  {
    icon: BLOCKS_ICONS.nofee,
    text: 'Gasless transactions lowers the barrier by&nbsp;taking the transaction fee directly from the transacted asset.',
  },
];

const PARTNERS = [
  {
    image: '/partners/advanca-mono.png',
    hover: '/partners/advanca.png',
    width: 112,
    height: 60,
    title: 'Advanca Network',
    link: 'https://www.advanca.network/',
  },
  {
    image: '/partners/litentry-mono.png',
    hover: '/partners/litentry.png',
    width: 172,
    height: 59,
    title: 'Litentry',
    link: 'https://www.litentry.com/',
  },
  {
    image: '/partners/boringDAO-mono.png',
    hover: '/partners/boringDAO.png',
    width: 172,
    height: 51,
    title: 'BoringDAO',
    link: 'https://www.boringdao.com/',
  },
  {
    image: '/partners/polkadot-mono.png',
    hover: '/partners/polkadot.png',
    width: 171,
    height: 86,
    title: 'Polkadot',
    link: 'https://polkadot.network/',
  },
  {
    image: '/partners/crust-mono.png',
    hover: '/partners/crust.png',
    width: 97,
    height: 24,
    title: 'CRUST',
    link: 'https://crust.network/',
  },
  {
    image: '/partners/matic-mono.png',
    hover: '/partners/matic.png',
    width: 123,
    height: 33,
    title: 'Matic',
    link: 'https://matic.network/',
  },
  {
    image: '/partners/bithumb-mono.png',
    hover: '/partners/bithumb.png',
    width: 178,
    height: 48,
    title: 'bithumb',
    link: 'https://www.bithumb.pro/',
  },
  {
    image: '/partners/hedget-mono.png',
    hover: '/partners/hedget.png',
    width: 112,
    height: 40,
    title: 'Hedget',
    link: 'https://www.hedget.com/',
  },
  {
    image: '/partners/substrate-mono.png',
    hover: '/partners/substrate.png',
    width: 113,
    height: 44,
    title: 'substrate_',
    link: 'https://www.substrate.io/',
  },
];

const ARTICLES = [
  {
    image: '/Litentry.jpg',
    link: 'https://projectclover.medium.com/clover-finance-x-litentry-explore-more-adoption-scenarios-of-did-in-defi-158465ce77a8',
    text: 'Clover Finance X&nbsp;Litentry&nbsp;| Explore More Adoption Scenarios of&nbsp;DID in&nbsp;DeFi',
  },
  {
    image: '/BoringDAO.jpg',
    link: 'https://projectclover.medium.com/clover-x-boringdao-strategic-partnership-formed-to-empower-polkadot-defi-ecosystem-6fffbe173d21',
    text: 'Clover X&nbsp;BoringDAO&nbsp;| Strategic Partnership Formed to&nbsp;Empower Polkadot DeFi Ecosystem',
  },
  {
    image: '/Clover.jpg',
    link: 'https://projectclover.medium.com/clover-a-parachain-for-cross-chain-defi-interoperability-e765f8f644b2',
    text: 'Clover: a&nbsp;Parachain for Cross&#8209;chain DeFi Interoperability',
  },
  {
    image: '/CDIP.jpg',
    link: 'https://projectclover.medium.com/clover-developer-incentive-program-cdip-b3467d83d6ea',
    text: 'Clover Developer Incentive Program (CDIP)',
  },
]

export {
  HEADER_MENU,
  SOCIAL_ICONS,
  SOCIALS,
  BLOCKS_ICONS,
  BLOCKS,
  PARTNERS,
  ARTICLES,
};
