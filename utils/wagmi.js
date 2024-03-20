import { http, createConfig, injected } from "@wagmi/core";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  fantom,
  fuse,
  bsc,
  avalanche,
  polygonMumbai,
} from "@wagmi/core/chains";
import { coinbaseWallet, walletConnect } from "@wagmi/connectors";

function getDefaultWallets(appName, projectId) {
  const connectors = [
    coinbaseWallet({
      appName,
    }),
    walletConnect({
      projectId,
      showQrModal: true,
      qrModalOptions: {
        themeVariables: {
          "--wcm-z-index": "9999",
        },
      },
    }),
    injected({ target: "metaMask", shimDisconnect: true }),
  ];
  return { connectors };
}

export function buildConfig(appName, projectId) {
  const { connectors } = getDefaultWallets({ appName, projectId });

  const config = createConfig({
    chains: [
      mainnet,
      polygon,
      optimism,
      arbitrum,
      fantom,
      fuse,
      bsc,
      avalanche,
      polygonMumbai,
    ],
    transports: {
      [mainnet.id]: http(),
      [polygon.id]: http(),
      [optimism.id]: http(),
      [arbitrum.id]: http(),
      [fantom.id]: http(),
      [fuse.id]: http(),
      [bsc.id]: http(),
      [avalanche.id]: http(),
      [polygonMumbai.id]: http(),
    },
    connectors,
  });
  return config;
}
