import { DatePicker, Form, Input, Modal, message } from "antd";
import React from "react";
import { faker } from "@faker-js/faker";
import { FaTimes, FaPlus } from "react-icons/fa";
import moment, { Moment } from "moment";
import { capitalize } from "../utils";
import { useCardsContext } from "../context";
import { ISSUER_TYPES } from "../../../types";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  onSubmit?: () => void;
}

function Button({ onClick, children, ...rest }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className='bg-[#325BAF] opacity-90 hover:opacity-100 flex items-center gap-1 text-white text-sm font-bold rounded-lg shadow-sm h-9 px-2 cursor-pointer'
      {...rest}
    >
      {children}
    </button>
  );
}

interface CardFormProps {
  onSubmit: (values: Record<string, string | number | Moment>) => void;
}

function CardForm({ onSubmit }: CardFormProps): JSX.Element {
  const number = faker.finance.creditCardNumber();
  const cvv = faker.finance.creditCardCVV();
  const expiry = moment(faker.date.future());
  const cardIssuer = capitalize("visa").replace("_", " ");

  return (
    <Form className='py-4' onFinish={onSubmit}>
      <Form.Item
        label='Card Number'
        required
        name='cardNumber'
        initialValue={number}
      >
        <Input type='text' maxLength={19} defaultValue={number} />
      </Form.Item>
      <div className='flex gap-4'>
        <Form.Item
          label='Expiry'
          required
          name='expiryDate'
          initialValue={expiry}
        >
          <DatePicker picker='month' format={"MM/YYYY"} defaultValue={expiry} />
        </Form.Item>
        <Form.Item label='CVV' required name='cvv' initialValue={parseInt(cvv)}>
          <Input.Password
            type='number'
            maxLength={3}
            defaultValue={parseInt(cvv)}
          />
        </Form.Item>
        <Form.Item label='Issuer' required name='issuer' initialValue={cardIssuer}>
          <Input type='text' defaultValue={cardIssuer} />
        </Form.Item>
      </div>
      <Form.Item label='Card Holder Name' name='holderName' required>
        <Input type='text' />
      </Form.Item>
      <Form.Item htmlFor='submit'>
        <Button htmlType='submit'>Add Card</Button>
      </Form.Item>
    </Form>
  );
}

const AddCard: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { addCard } = useCardsContext();

  const handleSubmit = (values: Record<string, string | number | Moment>) => {
    const invalidValue = Object.keys(values).find((key) => !values[key]);
    if (invalidValue)
      message.error(`Please fill the ${capitalize(invalidValue)} field`);
    else {
      addCard({
        active: true,
        id: crypto.randomUUID(),
        holderName: values.holderName as string,
        cardNumber: values.cardNumber as string,
        cvv: values.cvv as string,
        expiryDate: (values.expiryDate as Moment).format("MM/YYYY") as string,
        issuer: values.issuer as ISSUER_TYPES,
      });
      message.success("Card added successfully");
      setIsModalVisible(false);
    }
  };

  return (
    <>
      <Button onClick={() => setIsModalVisible(true)}>
        <FaPlus className='w-4 h-4' />
        <text>New card</text>
      </Button>
      <Modal
        title='Add a new card'
        footer={null}
        width={640}
        open={isModalVisible}
        destroyOnClose
        closable
        closeIcon={
          <FaTimes
            onClick={() => setIsModalVisible(false)}
            className='w-5 h-5'
          />
        }
      >
        <CardForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default AddCard;
