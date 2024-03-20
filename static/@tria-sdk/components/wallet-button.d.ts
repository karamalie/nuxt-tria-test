import { LitElement } from "lit";
declare class WalletButton extends LitElement {
    bgColor: string;
    hexToRgba(hex: string, opacity: number): string;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "wallet-button": WalletButton;
    }
}
export {};
