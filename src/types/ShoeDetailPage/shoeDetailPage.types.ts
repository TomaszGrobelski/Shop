import { Shoe } from '../ShoesPage/interfaceShoe';

export interface AccordionShippingProps {
  title: string;
  children: React.ReactNode;
}

export interface ModalDetailProps {
  setModalVisible: (visible: boolean) => void;
}

export interface SizeShoeDetailProps {
  shoeDetails: Shoe;
  onSizeSelect: (size: number) => void;
  selectedSize: number | null | false;
}
