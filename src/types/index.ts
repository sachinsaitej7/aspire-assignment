
export interface LeftNavItem {
    label: string;
    path: string;
    key: string;
}

export type ISSUER_TYPES = "visa" | "master" | "amex" | "discover" | 'diners_club';

export interface MaskedCards {
    holderName: string;
    id: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    issuer: ISSUER_TYPES;
    active: boolean;
}

