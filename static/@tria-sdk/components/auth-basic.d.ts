import { LitElement } from "lit";
import "./auth-content";
declare class AuthBasic extends LitElement {
    darkMode: boolean;
    dappName: string;
    logo: string;
    iframeUrl: string;
    otpIframeUrl: string;
    signupIframeUrl: string;
    eventData: any;
    otpLogin: boolean;
    signUp: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    addMessageListener(): void;
    removeMessageListener(): void;
    handleMessage: (event: MessageEvent) => void;
    createRenderRoot(): this;
    get step(): string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "auth-basic": AuthBasic;
    }
}
export {};
