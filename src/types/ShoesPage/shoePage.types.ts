import { Shoe } from './interfaceShoe';

export interface DiscountFilterProps {
  setDiscount: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface GenderFilterProps {
  setGenderFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genderFilter: string | null;
}

export interface ModelFilterProps {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

export interface SizeFilterProps {
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface SortFilterProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterPhoneProps {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setGenderFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genderFilter: string | null;
  setDiscount: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export interface HeaderShoesProps {
  filterVisible: boolean;
  sortBy: string;
  setFilterVisible: (visible: boolean) => void;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export interface MainFilterProps {
  filterVisible: boolean;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setGenderFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genderFilter: string | null;
  setDiscount: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface ProductsProps {
  sortBy: string;
  filterType: string;
  genderFilter: string | null;
  discount: string | null;
  selectedSize: number | null;
}

export type ShoeCardProps = {
  shoe: Shoe;
  key?: string | number;
  children?: React.ReactNode;
  favorite?: React.ReactNode;
};
