import React from "react";
import { capitalize } from "../utils";
import moment from "moment";

import { FaChevronRight, FaRegCreditCard } from "react-icons/fa";

interface TransactionHistoryProps {
  transactions: TransactionItemProps[];
}

interface TransactionItemProps {
  Icon: React.FC<{ className: string; color?: string }>;
  amount: number;
  color?: string;
  label: string;
  date: string;
  type: "credit" | "debit" | "refund";
}

function TransactionItem(props: TransactionItemProps): JSX.Element {
  const { Icon, amount, color, label, date, type } = props;

  return (
    <div className={`flex justify-between border-b py-4 cursor-pointer`}>
      <div
        className={`flex items-center justify-center w-[48px] h-[48px] rounded-full`}
        style={{ backgroundColor: color+"1A" }}
      >
        <Icon className='w-4 h-4' color={color} />
      </div>

      <div className='flex flex-col'>
        <p className='font-semibold'>{label}</p>
        <p color='text-[#AAAAAA] text-xs'>
          {moment(date, "DD/MM/YYYY").format("DD MMM YYYY")}
        </p>
        <p className='text-[#325BAF] font-semibold flex items-center '>
          <FaRegCreditCard className='w-4 h-4 mr-2' />
          <text>{capitalize(type)} on debit card</text>
        </p>
      </div>
      <div className='flex'>
        <p className={`${type === "debit" ? "" : "text-brand"} font-bold mr-1`}>
          {type === "debit" ? "-" : "+"}$ {amount}
        </p>
        <FaChevronRight className='w-4 h-4 text-slate-300' />
      </div>
    </div>
  );
}

const TransactionHistory: React.FC<TransactionHistoryProps> = (props) => {
  const { transactions } = props;
  return (
    <div>
      {transactions.map((transaction, index) => {
        return <TransactionItem key={index} {...transaction} />;
      })}
    </div>
  );
};

export default TransactionHistory;
