const HEADER_MENU = [
  {
    label: 'Community',
    children: [
      {
        link: 'https://t.me/clover_en/',
        label: 'Telegram',
      },
      {
        link: 'https://discord.com/invite/z2egJBsBWx/',
        label: 'Discord',
      },
      {
        link: 'https://twitter.com/clover_finance/',
        label: 'Twitter',
      },
      {
        link: 'https://projectclover.medium.com/',
        icon: 'Medium',
      },
    ],
  },
  {
    label: 'Builders',
    children: [
      {
        link:
          'https://docs.clover.finance/clover-eco-incentive-program/clover-dapp-developer-incentive-structure',
        label: 'Developer Incentive Program',
      },
      {
        link: 'https://docs.clover.finance/quick-start/testnet',
        label: 'Testnet',
      },
      {
        link: 'https://discord.gg/RMwkeyKTqE',
        label: 'Developer Discord',
      },
      {
        link: 'https://github.com/clover-network',
        icon: 'Github',
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        link: 'https://docs.clover.finance',
        label: 'Documentation',
      },
      {
        link: 'https://docs.clover.finance',
        label: 'Litepaper',
      },
    ],
  },
]

// const HEADER_MENU = [
//   {
//     link: 'https://github.com/clover-network/',
//     label: 'Github',
//   },
//   {
//     link: 'https://docs.clover.finance/',
//     label: 'Docs',
//   },
//   {
//     link: 'https://projectclover.medium.com/',
//     label: 'Blog',
//   },
//   {
//     link: 'https://discord.com/invite/z2egJBsBWx/',
//     label: 'Discord',
//   },
// ];

const SOCIAL_ICONS = {
  twitter: 'twitter',
  telegram: 'telegram',
  discord: 'discord',
  medium: 'medium',
  linkedin: 'linkedin',
}

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
]

const BLOCKS_ICONS = {
  polkadot: 'polkadot',
  schedule: 'schedule',
  income: 'income',
  nofee: 'nofee',
}
const BLOCKS = [
  {
    icon: BLOCKS_ICONS.polkadot,
    text:
      'EVM compatibility to&nbsp;easily deploy Ethereum dApps on&nbsp;Polkadot and create trustless two&#8209;way pegs between ERC20 and DOT&#8209;based assets.',
  },
  {
    icon: BLOCKS_ICONS.schedule,
    text:
      'Identity fee&#8209;based schedule identifies frequent dApp users and rewards them with lower gas fees.',
  },
  {
    icon: BLOCKS_ICONS.income,
    text:
      'Unique incentive structure creates passive income streams for contract developers.',
  },
  {
    icon: BLOCKS_ICONS.nofee,
    text:
      'Gasless transactions lowers the barrier by&nbsp;taking the transaction fee directly from the transacted asset.',
  },
]

const MAIN_PARTNERS = [
  {
    image: '/partners/hypersphere-mono.png',
    hover: '/partners/hypersphere-mono.png',
    width: 278,
    height: 68,
    title: 'Hypersphere',
    link: 'https://hypersphere.ai/',
  },
  {
    image: '/partners/polychain-capital-mono.png',
    hover: '/partners/polychain-capital-mono.png',
    width: 204,
    height: 83,
    title: 'Polychain Capital',
    link: 'https://polychain.capital/',
  },
  {
    image: '/partners/divergence-mono.png',
    hover: '/partners/divergence-mono.png',
    width: 197,
    height: 26,
    title: 'Divergence',
    link: 'https://www.div.vc/',
  },
]

const PARTNERS = [
  {
    image: '/partners/polkadot-mono.png',
    hover: '/partners/polkadot-mono.png',
    width: 171,
    height: 86,
    title: 'Polkadot',
    link: 'https://polkadot.network/',
  },
  {
    image: '/partners/thegraph.svg',
    hover: '/partners/thegraph.svg',
    width: 35,
    height: 45,
    title: 'The Graph',
    link: 'https://thegraph.com/',
  },
  {
    image: '/partners/chainlink.svg',
    hover: '/partners/chainlink.svg',
    width: 142,
    height: 44,
    title: 'Chainlink',
    link: 'https://chain.link/',
  },
  {
    image: '/partners/litentry-mono.png',
    hover: '/partners/litentry-mono.png',
    width: 172,
    height: 59,
    title: 'Litentry',
    link: 'https://www.litentry.com/',
  },
  {
    image: '/partners/advanca-mono.png',
    hover: '/partners/advanca-mono.png',
    width: 112,
    height: 60,
    title: 'Advanca Network',
    link: 'https://www.advanca.network/',
  },
  {
    image: '/partners/boringDAO-mono.png',
    hover: '/partners/boringDAO-mono.png',
    width: 172,
    height: 51,
    title: 'BoringDAO',
    link: 'https://www.boringdao.com/',
  },
  {
    image: '/partners/manta.svg',
    hover: '/partners/manta.svg',
    width: 157,
    height: 50,
    title: 'Manta',
    link: 'https://manta.network/',
  },
  {
    image: '/partners/dodo.svg',
    hover: '/partners/dodo.svg',
    width: 130,
    height: 31,
    title: 'Dodo',
    link: 'https://dodoex.io/',
  },
  {
    image: '/partners/dego.svg',
    hover: '/partners/dego.svg',
    width: 101,
    height: 28,
    title: 'Dego',
    link: 'https://dego.finance/',
  },
  {
    image: '/partners/etha.svg',
    hover: '/partners/etha.svg',
    width: 129,
    height: 37,
    title: 'Ethaland',
    link: 'https://www.ethalend.org/',
  },
  {
    image: '/partners/prosper.svg',
    hover: '/partners/prosper.svg',
    width: 145,
    height: 19,
    title: 'Prosper',
    link: 'https://prosper.so/',
  },
  {
    image: '/partners/easyfi-mono.png',
    hover: '/partners/easyfi-mono.png',
    width: 142,
    height: 57,
    title: 'easyfi',
    link: 'https://easyfi.network/',
  },
  {
    image: '/partners/substrate-mono.png',
    hover: '/partners/substrate-mono.png',
    width: 113,
    height: 44,
    title: 'substrate_',
    link: 'https://www.substrate.io/',
  },
  {
    image: '/partners/crust-mono.png',
    hover: '/partners/crust-mono.png',
    width: 97,
    height: 24,
    title: 'CRUST',
    link: 'https://crust.network/',
  },
  {
    image: '/partners/bella-mono.png',
    hover: '/partners/bella-mono.png',
    width: 123,
    height: 33,
    title: 'Bella',
    link: 'https://bella.fi/',
  },
  {
    image: '/partners/hedget-mono.png',
    hover: '/partners/hedget-mono.png',
    width: 112,
    height: 40,
    title: 'Hedget',
    link: 'https://www.hedget.com/',
  },
  {
    image: '/partners/polygon-mono.png',
    hover: '/partners/polygon-mono.png',
    width: 152,
    height: 36,
    title: 'Polygon',
    link: 'https://polygon.io/',
  },
  {
    image: '/partners/bithumb-mono.png',
    hover: '/partners/bithumb-mono.png',
    width: 178,
    height: 48,
    title: 'bithumb',
    link: 'https://www.bithumb.pro/',
  },
  {
    image: '/partners/injective-mono.png',
    hover: '/partners/injective-mono.png',
    width: 150,
    height: 40,
    title: 'Injective Protocol',
    link: 'https://injectiveprotocol.com/',
  },
]

const ARTICLES = [
  {
    image: '/PolychainCapital-Hypersphere.png',
    link:
      'https://medium.com/projectclover/clover-completes-seed-round-with-polychain-hypersphere-bithumb-global-and-divergence-ventures-828120164074',
    text:
      'Clover completes Seed round with Polychain, Hypersphere, Bithumb Global and Divergence Ventures',
  },
  {
    image: '/easyfi.png',
    link:
      'https://medium.com/projectclover/clover-x-easyfi-tapping-into-the-potential-of-staked-derivatives-assets-on-polkadot-659891dbded0',
    text:
      'Clover X EasyFi | Tapping into the Potential of Staked Derivatives Assets on Polkadot',
  },
  {
    image: '/bella.png',
    link:
      'https://medium.com/projectclover/clover-x-bella-building-polkadot-based-defi-infrastructure-in-collaboration-b5b89de1db1c',
    text:
      'Clover X Bella | Building Polkadot-Based DeFi Infrastructure in Collaboration',
  },
  {
    image: '/two-way-peg.png',
    link:
      'https://medium.com/projectclover/clover-re-defining-a-two-way-peg-between-blockchains-8d5b8c0dea6a',
    text: 'Clover: re-defining a two-way peg between blockchains',
  },
]

export {
  HEADER_MENU,
  SOCIAL_ICONS,
  SOCIALS,
  BLOCKS_ICONS,
  BLOCKS,
  PARTNERS,
  MAIN_PARTNERS,
  ARTICLES,
}
