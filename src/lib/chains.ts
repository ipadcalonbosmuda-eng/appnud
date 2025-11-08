import { defineChain } from 'viem';

export const plasmaMainnetBeta = defineChain({
  id: 9745,
  name: 'Monad Mainnet Beta',
  nativeCurrency: { name: 'Monad', symbol: 'XPL', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.plasma.to'] },
    public: { http: ['https://rpc.plasma.to'] },
  },
  blockExplorers: {
    default: { name: 'PlasmaScan', url: 'https://plasmascan.to/' },
  },
});
