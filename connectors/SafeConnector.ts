import { Chain, Wallet } from "@rainbow-me/rainbowkit";
// current package is not compatible with latest wagmi version
// import { SafeConnector } from "@gnosis.pm/safe-apps-wagmi";
import { SafeConnector } from "./gnosis/SafeConnector";

export interface MyWalletOptions {
  chains: Chain[];
}
const SafeRainbowConnector = ({ chains }: MyWalletOptions): Wallet => ({
  id: "gnosis-safe",
  name: "Gnosis Safe",
  iconUrl: "/connectors/SafeConnector.jpg",
  iconBackground: "#13ff7f",
  createConnector: () => {
    const connector = new SafeConnector({ chains });
    return {
      connector,
    };
  },
});
export default SafeRainbowConnector;
