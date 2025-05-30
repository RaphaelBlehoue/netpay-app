import { IOnboardingItem } from "./onboarding.type";


export const onBoardingData: IOnboardingItem[] = [
  {
    headTitle: 'Mobile banking you\'ll need',
    headSubTitle: "A wallet in your pocket to spend your money way smarter.",
    source: require('@/assets/iphone-need.png')
  },
  {
    source: require('@/assets/Chart.png'),
    title: 'Manage your money wisely',
    description: 'Track your money flows, balance, and everyday transactions on the go.'
  },
  {
    source: require('@/assets/send-money.png'),
    title: 'Send money with no problem',
    description: 'Send money to your friends and families with no worries.'
  },
  {
    source: require('@/assets/card.png'),
    title: 'Multiple cards in one application',
    description: 'Manage your cards so you can use them without switching app.'
  },
  {
    title: 'Before you started',
    description: 'Each section will need to be filled, it only take a couple of minutes!.',
    cartItems: [
      {
        cardSource: require('@/assets/passport.png'),
        cardTitle: 'About you',
        cardDescription: 'Your citizenship and employment status.'
      },
      {
        cardSource: require('@/assets/finance.png'),
        cardTitle: 'Your finances',
        cardDescription: 'Your income and committed spending.'
      },
      {
        cardSource: require('@/assets/cart.png'),
        cardTitle: 'Your account',
        cardDescription: 'How you’ll plan your Netpay account.'
      },
      {
        cardSource: require('@/assets/identity-cart.png'),
        cardTitle: 'Your identity',
        cardDescription: 'Checking to make sure your ID and you match.'
      }
    ]
  }
];