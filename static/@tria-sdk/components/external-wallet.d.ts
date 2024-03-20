import { LitElement } from "lit";
declare class ExternalWallets extends LitElement {
    darkMode: boolean;
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1>;
    clickMetamask(): Promise<void>;
    clickWalletConnect(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        "external-wallets": ExternalWallets;
    }
}
export {};
