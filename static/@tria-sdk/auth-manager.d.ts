import { AaDetails, Account, dappDetails } from "@tria-sdk/connect";
import { TriaAuth } from "./tria-auth";
import { ENV } from "@tria-sdk/utils";
interface TriaAuthOptions {
    darkMode?: boolean;
    triaStaging?: boolean;
    dappName?: string;
    logo?: string;
    clientId?: string;
}
interface TriaConfigOptions {
    chain: string;
    environment: ENV;
    dappDetails: dappDetails;
    aa?: AaDetails;
    rpcUrl?: string;
}
export declare class AuthManager {
    private authElement;
    private options;
    constructor(options?: TriaAuthOptions);
    private init;
    configure(configOptions: TriaConfigOptions): void;
    login(): void;
    private remove;
    getAccount(): Account | null;
    isAuthenticated(): boolean;
    disconnect(): Promise<void>;
    send(amount: number, recepientAddress: string, tokenAddress?: string): Promise<any>;
    signMessage(message: string): Promise<any>;
    writeContract(contractDetails: any, payToken?: any): Promise<any>;
    readContract(contractDetails: any): Promise<any>;
    private insertAuthIframe;
    addEventListener(eventName: string, callback: (event: Event) => void): void;
    removeEventListener(eventName: string, callback: (event: Event) => void): void;
}
export default TriaAuth;
