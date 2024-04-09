import { LeftNavItem } from "../types";

export const LeftNavConfig: LeftNavItem[] = [{
    label: 'Home',
    path: '/',
    key: 'home'
}, {
    label: 'Cards',
    path: '/cards',
    key: 'cards'
}, {
    label: 'Payments',
    key: 'payments',
    path: '/payments',
}, {
    label: 'Credit',
    path: '/credit',
    key: 'credit'
}, {
    label: 'Settings',
    path: '/settings',
    key: 'settings'
}];


export const getFullCard = (cardId: string): Record<string, string | number | boolean> => {
    return JSON.parse(localStorage.getItem(`full-card-${cardId}`) || "{}");
};