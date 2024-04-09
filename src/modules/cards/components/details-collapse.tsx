import React from "react";
import { Collapse } from "antd";
import styled from "styled-components";
import {
  FaChevronCircleDown,
  FaCreditCard,
  FaStore,
  FaPlane,
  FaBell,
} from "react-icons/fa";
import CardSmall from "@assets/card-small.svg?react";
import PaymentsHistory from "@assets/payments-history.svg?react";

import TransactionHistory from "./transaction-history";

const StyledCollapse = styled(Collapse)`
  max-width: 366px;
  .ant-collapse-content {
    background-color: white !important;
    border: 1px solid #f0f0f0;
  }
`;

interface CollapseProps {
  children: React.ReactNode;
  key: string;
  Header: React.ReactNode;
}

function CollapseComponent(props: CollapseProps): JSX.Element {
  const { children, key, Header } = props;

  return (
    <div className='mb-4'>
      <StyledCollapse
        expandIconPosition='end'
        bordered={false}
        size='middle'
        expandIcon={({ isActive }) => (
          <FaChevronCircleDown
            style={{
              transform: `rotate(${isActive ? 180 : 0}deg)`,
              transition: "transform 0.2s",
            }}
            className='w-5 h-5 opacity-15 hover:opacity-100 cursor-pointer'
            color='#0C365A'
          />
        )}
        items={[
          {
            label: Header,
            key,
            children: children,
          },
        ]}
      />
    </div>
  );
}

const DetailsCollapse: React.FC = () => {
  return (
    <div className='self-stretch justify-self-stretch'>
      <CollapseComponent
        Header={
          <div className='flex gap-2'>
            <CardSmall className='w-6 h-6' />
            <p>Card Details</p>
          </div>
        }
        key='1'
      >
        <div className='pt-4'>
          <div className='flex gap-2 items-center'>
            <FaCreditCard className='w-5 h-5' color='#0C365A' />
            <p>Card number</p>
          </div>
          <p>**** **** **** 1234</p>
          <div className='flex gap-2 items-center'>
            <p>Expiry date</p>
            <p>12/23</p>
          </div>
        </div>
      </CollapseComponent>
      <CollapseComponent
        Header={
          <div className='flex gap-2'>
            <PaymentsHistory className='w-6 h-6' />
            <p>Recent transactions</p>
          </div>
        }
        key='2'
      >
        <div className='pt-4'>
          <TransactionHistory
            transactions={[
              {
                amount: 100,
                Icon: FaStore,
                color: "#009DFF",
                label: "Apple Store",
                date: "12/12/21",
                type: "credit",
              },
              {
                amount: 200,
                Icon: FaPlane,
                color: "#00D6B5",
                label: "Airbnb",
                date: "12/12/21",
                type: "debit",
              },
              {
                amount: 300,
                Icon: FaBell,
                color: "#F25195",
                label: "Nike",
                date: "12/12/21",
                type: "refund",
              },
              {
                amount: 400,
                Icon: FaStore,
                color: "#009DFF",
                label: "Apple Store",
                date: "12/12/21",
                type: "credit",
              },
              {
                amount: 500,
                Icon: FaPlane,
                color: "#00D6B5",
                label: "Airbnb",
                date: "12/12/21",
                type: "debit",
              },
              {
                amount: 600,
                Icon: FaBell,
                color: "#F25195",
                label: "Nike",
                date: "12/12/21",
                type: "refund",
              },
              {
                amount: 700,
                Icon: FaStore,
                color: "#009DFF",
                label: "Apple Store",
                date: "12/12/21",
                type: "credit",
              },
              {
                amount: 800,
                Icon: FaPlane,
                color: "#00D6B5",
                label: "Airbnb",
                date: "12/12/21",
                type: "debit",
              },
              {
                amount: 900,
                Icon: FaBell,
                color: "#F25195",
                label: "Nike",
                date: "12/12/21",
                type: "refund",
              },
            ]}
          />
        </div>
        <div className='flex justify-center items-center bg-[#EDFFF5] mx-[-8%] p-4 cursor-pointer'>
          <p className='text-brand font-semibold'>View all card transactions</p>
        </div>
      </CollapseComponent>
    </div>
  );
};

export default DetailsCollapse;
