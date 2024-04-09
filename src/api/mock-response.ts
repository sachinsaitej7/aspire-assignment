import { LeftNavConfig, getFullCard } from "./data";

export function getMockResponse<T>(url: string, ...args: unknown[]): T | undefined {
    switch (url) {
        case '/left-nav':
            return LeftNavConfig as unknown as T;
        case `/get-full-card/${args[0]}`:
            return getFullCard(args[0] as string) as unknown as T;
        default:
            return undefined;
    }
}

