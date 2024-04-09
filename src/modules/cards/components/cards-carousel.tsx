import styled from "styled-components";
import { Carousel } from "antd";
import { useCardsContext } from "../context";

import { FaEye } from "react-icons/fa";
import DebitCard from "./debit-card";
import { useEffect, useState } from "react";

const StyledCarousel = styled(Carousel)`
  width: 414px;
  .slick-dots {
    bottom: -16px;

    li.slick-active button {
      background-color: #01d167;
    }

    li button {
      background-color: rgba(1, 209, 103, 1);
    }
  }
`;

const CardsCarousel = () => {
  const { cards, setActiveCardId, activeCardId } = useCardsContext();
  const [showFullCardId, setShowFullCardId] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (cards && cards.length && !activeCardId) setActiveCardId(cards[0].id);
  }, [cards, activeCardId, setActiveCardId]);

  const toggleShowFullCard = (cardId: string) => {
    if (showFullCardId === cardId) setShowFullCardId(undefined);
    else setShowFullCardId(cardId);
  };

  if (!cards || !cards.length) return "No cards found.";

  return (
    <StyledCarousel
      className='rounded'
      afterChange={(index: number) => setActiveCardId(cards[index].id)}
    >
      {cards.map((card) => {
        return (
          <div key={card.id}>
            <div
              className='flex text-brand text-xs font-bold justify-end mb-3 items-center cursor-pointer'
              onClick={() => toggleShowFullCard(card.id)}
            >
              <FaEye className='mr-2' />
              <p>{showFullCardId === card.id ? "Hide" : "Show"} card number</p>
            </div>
            <DebitCard {...card} showFullCard={showFullCardId === card.id} />
          </div>
        );
      })}
    </StyledCarousel>
  );
};

export default CardsCarousel;
