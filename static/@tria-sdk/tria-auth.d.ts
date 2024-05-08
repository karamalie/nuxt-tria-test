import { LitElement } from "lit";
import "./components/auth-container";
import { AaDetails, dappDetails } from "@tria-sdk/connect";
import { ContractDetails, ENV } from "@tria-sdk/utils";
export declare class TriaAuth extends LitElement {
  constructor();
  connectedCallback(): void;
  static styles: import("lit").CSSResult[];
  darkMode: boolean;
  triaStaging: boolean;
  dappName: string;
  logo: string;
  clientId: string;
  chain: string;
  environment?: ENV;
  dappDetails?: dappDetails;
  aa?: AaDetails;
  rpcUrl?: string;
  get iframeUrl(): string;
  get authIframeUrl():
    | "https://auth-tria.vercel.app/verified"
    | "https://auth.tria.so/verified";
  get otpIframeUrl(): string;
  get signupIframeUrl():
    | "https://auth-tria.vercel.app/signUpUserNameIframe"
    | "https://auth.tria.so/signUpUserNameIframe";
  configure({
    chain,
    environment,
    dappDetails,
    aa,
    rpcUrl,
  }: {
    chain: string;
    environment: ENV;
    dappDetails: dappDetails;
    aa?: AaDetails;
    rpcUrl?: string;
  }): void;
  render(): import("lit").TemplateResult<1>;
  getAccount(): import("@tria-sdk/connect").Account | null;
  isAuthenticated(): boolean;
  disconnect(): Promise<void>;
  send(
    amount: number,
    recepientAddress: string,
    tokenAddress?: string
  ): Promise<import("@tria-sdk/connect").TxnResponse>;
  signMessage(
    message: string
  ): Promise<import("@tria-sdk/connect").StringDataResponse>;
  writeContract(
    contractDetails: ContractDetails,
    payToken?: {
      tokenAddress: string;
      amount: number;
    }
  ): Promise<import("@tria-sdk/connect").TxnResponse>;
  readContract(
    contractDetails: ContractDetails
  ): Promise<import("@tria-sdk/connect/dist/utils/chain").ReadContractResponse>;
}
declare global {
  interface HTMLElementTagNameMap {
    "tria-auth": TriaAuth;
  }
}
