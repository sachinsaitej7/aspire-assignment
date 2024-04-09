import CardsCarousel from "./cards-carousel";
import DetailsCollapse from "./details-collapse";
import { Controls } from "../constants";
import { useCardsContext } from "../context";

const MyDebitCards: React.FC = () => {
  const { updateCard, activeCardId, cards } = useCardsContext();
  const activeCard = cards?.find((card) => card.id === activeCardId);

  const handleControlClick = (key: string) => {
    if (key === "freeze") {
      updateCard({
        id: activeCardId,
        active: !activeCard?.active,
      });
    }
  };

  return (
    <div className='flex justify-stretch gap-8 mt-4 p-10 rounded shadow-[0px_2px_12px_#00000014] h-[60vh] overflow-y-auto'>
      <div>
        <CardsCarousel />
        <div className='flex justify-between bg-[#EDF3FF] p-4 rounded-lg w-[414px] mt-8'>
          {Controls.map(({ icon, text, key }) => {
            return (
              <div
                key={text}
                className='max-w-16 flex flex-col items-center cursor-pointer hover:scale-110'
                onClick={() => handleControlClick(key)}
              >
                <img src={icon} alt='icon' className='w-8 h-8 mb-2' />
                <p className='text-xs text-center text-[#0C365A]'>
                  {key === "freeze" && !activeCard?.active
                    ? "Unfreeze card"
                    : text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-8 w-full'>
        <DetailsCollapse />
      </div>
    </div>
  );
};

export default MyDebitCards;
