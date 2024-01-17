export interface OrderProps {
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export type LabelFormProps = {
  title: string;
  type: string;
  autoComplite: string;
  id: string;
};

export type ItemsProps = {
  price: string;
  quantity: number;
};

export type BagItemsProps = {
  stripePrice: string;
  name: string;
};

export interface CheckoutFormProps {
  totalPrice: number;
  handlePayment: (paymentMethodId: string) => void;
}

export interface PromoCodeProps {
  setDiscount: (value: boolean) => void;
}

export interface SummaryProps {
  totalPrice: number;
  visible?: boolean;
}