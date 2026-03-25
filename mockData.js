export const mockUserData = {
  name: 'Sylvian Springer',
  subtitle: 'Mein',
  email: 'sylvian@example.com',
  totalExpenditure: 60000.00,
  cards: [
    {
      id: 1,
      name: 'Apple Pay',
      number: '4321',
      balance: 2909.00,
      currency: 'USD',
      type: 'apple',
    },
    {
      id: 2,
      name: 'Visa',
      number: '0123',
      balance: 1000.00,
      currency: 'USD',
      type: 'visa',
    },
  ],
  recentTransactions: [
    {
      id: 1,
      name: 'Money Out',
      description: 'Westerna Ravenclaw',
      amount: -120.00,
      icon: 'W',
    },
    {
      id: 2,
      name: 'Money In',
      description: 'Jake Weary',
      amount: 1500.00,
      icon: 'J',
    },
  ],
  allCards: [
    {
      id: 1,
      name: 'Paypal Wallet',
      balance: 960893.90,
      currency: 'USD',
      type: 'paypal',
      backgroundColor: '#34C759',
    },
    {
      id: 2,
      name: 'ATM Card',
      balance: 760,
      currency: 'USD',
      type: 'atm',
      backgroundColor: '#FF9500',
    },
  ],
  atmLocations: [
    {
      id: 1,
      latitude: -23.5505,
      longitude: -46.6333,
      name: 'ATM São Paulo 1',
    },
    {
      id: 2,
      latitude: -23.5506,
      longitude: -46.6334,
      name: 'ATM São Paulo 2',
    },
  ],
};

export const mockStatistics = {
  monthlySpend: [
    { month: 'Mon', value: 250 },
    { month: 'Tue', value: 300 },
    { month: 'Wed', value: 280 },
    { month: 'Thu', value: 350 },
    { month: 'Fri', value: 320 },
    { month: 'Sat', value: 400 },
    { month: 'Sun', value: 380 },
  ],
  thisMonthSpend: 2480.00,
  percentageIncrease: 14.39,
  spendThisMonth: 350.00,
  percentageThisMonth: 8.72,
  transactions: [
    { type: 'Transfers', percentage: 75 },
    { type: 'Withdrawals', percentage: 54 },
    { type: 'Subscriptions', percentage: 36 },
    { type: 'Bills', percentage: 23 },
    { type: 'Others', percentage: 8 },
  ],
};

export const mockContacts = [
  {
    id: 1,
    name: 'Ingredia Nutrisha',
    role: 'UI/UX Designer',
    avatar: 'IN',
    color: '#FFB6C1',
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Developer',
    avatar: 'JD',
    color: '#87CEEB',
  },
  {
    id: 3,
    name: 'Jane Smith',
    role: 'Product Manager',
    avatar: 'JS',
    color: '#9ACD32',
  },
];
