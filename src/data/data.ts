import { starIcon, shieldIcon, sendIcon, heroImg, airbnb, binance, coinbase, dropbox } from '../assets'

// NavLinks
const NavLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "billing",
    title: "Billing",
  }
];

const HeroInfo = [
    {
        heading1 : "20% DISCOUNT FOR 1 MONTH ACCOUNT",
        heading2 : "The Next Payment Method.",
        subheading : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        image : heroImg ,
    }
];

const PartnerImg = [
  {
    id: "airbnb",
    image : airbnb,
  },
  {
    id: "binance",
    image : binance,
  },
  {
    id: "coinbase",
    image : coinbase,
  },
  {
    id: "dropbox",
    image: dropbox,
  }
];

const ClientInfo = [
    {
        total: '3800+',
        details: 'USER ACTIVE',
    },
    {
        total: '280+',
        details: 'TRUSTED BY COMPANY',
    },
    {
        total: '$230M+',
        details: 'TRANSACTION',
    },
];

const SolutionsCard = [
    {
        icon: starIcon,
        title: 'Reward',
        subHeading: 'The best credit cards offer some tantalizing combinations of promotions and prizes',
    },
    {
        icon: shieldIcon,
        title: '100% Secured',
        subHeading: 'We take proactive steps make sure your information and transactions are secure.',
    },
    {
        icon: sendIcon,
        title: 'Balance Transfer',
        subHeading: 'A balance transfer credit card can save you a lot of money in interest charges.',
    },
];

const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Home",
          link: "home",
        },
       
        {
          name: "Features",
          link: "features",
        },
        {
          name: "Billing",
          link: "billing",
        },
        
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "#",
        },
        {
          name: "Become a Partner",
          link: "#",
        },
      ],
    },
  ];

export {
  NavLinks,
  ClientInfo,
  SolutionsCard,
  footerLinks,
  HeroInfo,
  PartnerImg,
}