import { AddCard, CardTabs, Info } from "./components";
import { CardsProvider } from "./context";

const CardsModule = () => {
  return (
    <CardsProvider>
      <div className='container p-14'>
        <div className='mb-8 flex justify-between items-end'>
          <Info availableBalance={3400} currency='$$' />
          <AddCard />
        </div>
        <CardTabs />
      </div>
    </CardsProvider>
  );
};

export default CardsModule;
