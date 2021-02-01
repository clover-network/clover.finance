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
    link: 'https://medium.com/projectclover/',
    label: 'Blog',
  },
  {
    link: 'https://discord.gg/z2egJBsBWx/',
    label: 'Discord',
  },
];

const SOCIAL_ICONS = {
  twitter: 'twitter',
  telegram: 'telegram',
  discord: 'discord',
  medium: 'medium',
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
    link: 'https://discord.gg/z2egJBsBWx/',
    icon: SOCIAL_ICONS.discord,
  },
  {
    link: 'https://medium.com/projectclover/',
    icon: SOCIAL_ICONS.medium,
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
    text: 'EVM compatibility allows deploying Ethereum dApps on&nbsp;Polkadot and creating trustless two-way pegs between ERC20 and DOT-based assets.',
  },
  {
    icon: BLOCKS_ICONS.schedule,
    text: 'Identity fee-based schedule identifies frequent dApp users and rewards them with lower gas fees.',
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

const PROJECTS = [
  {
    image: '/linch.png',
    width: 141,
    height: 70,
    title: 'Linch Exchange',
  },
  {
    image: '/barnbridge.png',
    width: 200,
    height: 34,
    title: 'Barnridge',
  },
  {
    image: '/litentry.png',
    width: 172,
    height: 58,
    title: 'Litentry',
  },
  {
    image: '/dodo.png',
    width: 134,
    height: 31,
    title: 'DODO',
  },
  {
    image: '/boring.png',
    width: 178,
    height: 54,
    title: 'BoringDAO',
  },
  {
    image: '/mathWallet.png',
    width: 211,
    height: 58,
    title: 'Math Wallet',
  },
  {
    image: '/dydx.png',
    width: 91,
    height: 50,
    title: 'dy/dx',
  },
  {
    image: '/injective.png',
    width: 155,
    height: 47,
    title: 'Injective Protocol',
  },
  {
    image: '/opium.png',
    width: 135,
    height: 32,
    title: 'Opium',
  },
  {
    image: '/wbtc.png',
    width: 117,
    height: 35,
    title: 'WBTC',
  },
];

const ARTICLES = [
  {
    text: 'EVM compatibility to&nbsp;easily deploy Ethereum dApps on&nbsp;Polkadot and create trustless 2-way pegs between ERC20 and DOT-based assets.',
  },
  {
    text: 'EVM compatibility to&nbsp;easily deploy Ethereum dApps on&nbsp;Polkadot and create trustless 2-way pegs between ERC20 and DOT-based assets.',
  },
  {
    text: 'EVM compatibility to&nbsp;easily deploy Ethereum dApps on&nbsp;Polkadot and create trustless 2-way pegs between ERC20 and DOT-based assets.',
  },
  {
    text: 'EVM compatibility to&nbsp;easily deploy Ethereum dApps on&nbsp;Polkadot and create trustless 2-way pegs between ERC20 and DOT-based assets.',
  },
]

export {
  HEADER_MENU,
  SOCIAL_ICONS,
  SOCIALS,
  BLOCKS_ICONS,
  BLOCKS,
  PROJECTS,
  ARTICLES,
};
