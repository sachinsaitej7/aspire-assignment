import React from "react";
import VisaLogo from "@assets/visa.svg";
import Logo from "@assets/logo-white.svg";
import { FaCircle } from "react-icons/fa";

import { MaskedCards } from "../../../types";
import { useFetch } from "../../../api";

const DebitCard: React.FC<MaskedCards & { showFullCard: boolean }> = ({
  holderName,
  cvv,
  expiryDate,
  cardNumber,
  active,
  showFullCard,
  id,
}) => {
  return (
    <div
      className='bg-brand rounded-lg w-[414px] h-[248px] flex flex-col justify-between shadow-lg cursor-pointer p-7 text-white'
      style={{
        opacity: active ? 1 : 0.5,
      }}
    >
      <div className='flex justify-end items-center'>
        <img src={Logo} className='w-[84px] h-[24px]' />
      </div>
      <p className='text-2xl font-semibold'>{holderName}</p>
      {showFullCard ? (
        <FullCardAccess id={id} />
      ) : (
        <div className='flex flex-col gap-5 justify-center'>
          <div className='flex gap-7 items-center'>
            <div className='flex gap-1'>
              {[0, 1, 2, 3].map((_, index) => {
                return <FaCircle key={index} className='w-[9px] h-[9px]' />;
              })}
            </div>
            <div className='flex gap-1'>
              {[4, 5, 6, 7].map((_, index) => {
                return <FaCircle key={index} className='w-[9px] h-[9px]' />;
              })}
            </div>
            <div className='flex gap-1'>
              {[8, 9, 10, 11].map((_, index) => {
                return <FaCircle key={index} className='w-[9px] h-[9px]' />;
              })}
            </div>
            <div className='flex text-base'>{cardNumber.slice(-4)}</div>
          </div>
          <div className='flex item-center gap-9'>
            <p className='text-sm'>Thru: {expiryDate}</p>
            <p className='text-sm'>CVV: {cvv}</p>
          </div>
        </div>
      )}
      <div className='flex justify-end items-center'>
        <img src={VisaLogo} className='w-[66px] h-[22px]' />
      </div>
    </div>
  );
};

function FullCardAccess({ id }: { id: string }): JSX.Element {
  const { data, isLoading } = useFetch<
    Record<string, string | boolean | number>
  >(`/get-full-card/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (!data || !data.id) return <div>Cannot fetch full card</div>;

  let cardNumber = data.cardNumber as string;
  cardNumber = cardNumber.replaceAll("-", "");

  return (
    <div className='flex flex-col gap-5 justify-center'>
      <div className='flex gap-7 items-center'>
        <div className='flex text-base tracking-widest'>
          {cardNumber.slice(1, 5)}
        </div>
        <div className='flex text-base tracking-widest'>
          {cardNumber.slice(5, 9)}
        </div>
        <div className='flex text-base tracking-widest'>
          {cardNumber.slice(9, 13)}
        </div>
        <div className='flex text-base tracking-widest'>
          {cardNumber.slice(-4)}
        </div>
      </div>
      <div className='flex item-center gap-9'>
        <p className='text-sm'>Thru: {data.expiryDate}</p>
        <p className='text-sm'>CVV: {data.cvv}</p>
      </div>
    </div>
  );
}

export default DebitCard;
