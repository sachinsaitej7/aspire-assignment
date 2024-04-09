import useSWR from "swr";
import { getMockResponse } from "./mock-response";

async function mockFetch<T>(url: string): Promise<T> {
    const delay = Math.floor(Math.random() * 1000) + 500;
    return new Promise((resolve) => {
        setTimeout(async () => {
            const pathParams = url.split('/').reverse();
            const data = getMockResponse<T>(url, ...pathParams);
            if (!data) {
                throw new Error(`No mock response found for ${url}`);
            }
            resolve(data);
        }, delay);
    });
}

export function useFetch<T>(url: string) {
    const { data, error, isLoading, mutate } = useSWR<T>(url, async (url: string) => {
        const response = await mockFetch<T>(url);
        return response;
    });

    return { data, error, isLoading, mutate};
}

