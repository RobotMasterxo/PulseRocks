import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { polygonMumbai, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Chain } from "@rainbow-me/rainbowkit";

const shardeum: Chain = {
  id: 943,
  name: "Pulsechain Testnet",
  network: "Pulsechain Testnet V4",
  nativeCurrency: {
    decimals: 18,
    name: "WPLS",
    symbol: "WPLS",
  },
  iconUrl:
    "https://bafkreic7ujchsg65vi7b26vkititbq2k3fddwhcutq3fpmraxj4sfjhyli.ipfs.nftstorage.link",
  rpcUrls: {
    default: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
    },
    public: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
    },
  },
  testnet: true,
};

const goerli: Chain = {
  id:5,
  name: "Pulsechain Testnet",
  network: "Pulsechain Testnet V4",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  iconUrl:
    "https://bafkreic7ujchsg65vi7b26vkititbq2k3fddwhcutq3fpmraxj4sfjhyli.ipfs.nftstorage.link",
  rpcUrls: {
    default: {
      http: ["https://endpoints.omniatech.io/v1/eth/goerli/public"],
    },
    public: {
      http: ["hhttps://endpoints.omniatech.io/v1/eth/goerli/public"],
    },
  },
  testnet: true,
}

export const { chains, provider } = configureChains(
  [goerli],
  [
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "mintfolio",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default wagmiClient;
