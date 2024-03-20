import { LitElement } from "lit";
declare class AuthBasic extends LitElement {
    logo: string;
    darkMode: boolean;
    dappName: string;
    createRenderRoot(): this;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "auth-header": AuthBasic;
    }
}
export {};
