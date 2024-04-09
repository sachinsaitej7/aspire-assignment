
import moment from "moment";
import { MaskedCards } from "../../types";
import { faker } from "@faker-js/faker";


const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const maskCard = (card: Record<string, string | number | boolean>): MaskedCards => {
  return {
    ...card,
    cardNumber: `**** **** **** ${(String(card.cardNumber)).slice(-4)}`,
    cvv: `***`,
  } as MaskedCards;
};

const generateCards = (limit: number): Record<string, string | number | boolean>[] => {
  const cards = Array.from({ length: limit }, () => {
    const cardNumber = faker.finance.creditCardNumber();
    const cvv = faker.finance.creditCardCVV();
    const expiryDate = moment(faker.date.future()).format("MM/YYYY");
    const holderName = faker.finance.accountName();
    return {
      cardNumber,
      cvv,
      expiryDate,
      holderName,
      issuer: "visa",
      active: true,
      id: crypto.randomUUID(),
    };
  });

  return cards;
};

const storeFullCards = (cards: Record<string, string | number | boolean>[]) => {
  cards.forEach((card) => {
    localStorage.setItem(`full-card-${card.id}`, JSON.stringify(card));
  });
};

const removeFullCard = (cardId: string) => {
  localStorage.removeItem(`full-card-${cardId}`);
}

export { capitalize, maskCard, generateCards, storeFullCards, removeFullCard };