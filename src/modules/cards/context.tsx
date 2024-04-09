import { createContext, useContext, useState, useEffect } from "react";
import { MaskedCards } from "../../types";
import { generateCards, maskCard, storeFullCards } from "./utils";

interface InitialState {
  activeCardId: string;
  setActiveCardId: (cardId: string) => void;
  cards: MaskedCards[] | null;
  addCard: (card: Record<string, string | number | boolean>) => void;
  removeCard: (cardId: string) => void;
  updateCard: (card: Partial<MaskedCards>) => void;
}

const CardsContext = createContext<InitialState | undefined>(undefined);

const { Provider } = CardsContext;

function CardsProvider({ children }: { children: React.ReactNode }) {
  const [activeCardId, setActiveCardId] = useState("");
  const [cards, setCards] = useState<MaskedCards[]>(() => {
    const cards = JSON.parse(localStorage.getItem("cards") || "[]");
    if (cards.length === 0) {
      const cards = generateCards(3);
      storeFullCards(cards);
      const maskedCards = cards.map((card) => maskCard(card));
      localStorage.setItem("cards", JSON.stringify(maskedCards));
      return maskedCards;
    }
    return cards;
  });

  const addCard = (card: Record<string, number | string | boolean>) => {
    storeFullCards([card]);
    setCards([...cards, maskCard(card)]);
  };

  const removeCard = (cardId: string) => {
    removeCard(cardId);
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const updateCard = (card: Partial<MaskedCards>) => {
    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, ...card } : c
    );
    setCards(newCards);
  };

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <Provider
      value={{
        activeCardId,
        setActiveCardId,
        cards,
        addCard,
        removeCard,
        updateCard,
      }}
    >
      {children}
    </Provider>
  );
}

function useCardsContext() {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }
  return context;
}

export { CardsProvider, useCardsContext };

export default CardsContext;
