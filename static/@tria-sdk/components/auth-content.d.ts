import { LitElement } from "lit";
import "./external-wallet";
declare class AuthContent extends LitElement {
    darkMode: boolean;
    iframeUrl: string;
    static styles: import("lit").CSSResult;
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "auth-content": AuthContent;
    }
}
export {};
