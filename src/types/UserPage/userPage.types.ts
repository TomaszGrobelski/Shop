import { Dispatch, SetStateAction } from 'react';

export interface CityProps {
  name: string;
}

export interface SportsData {
  name: string;
}

type InterestDataItem = { name: string };
export type InterestData = InterestDataItem[];

export interface CategoryDivProps {
  setCurrentCategory: (category: string) => void;
  setSelectedList: (list: InterestData) => void;
  currentCategory: string;
}

export interface HeaderModalProps {
  closeModal: () => void;
}

export interface ModalInterestsProps {
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

export interface SelectedDivProps {
  selectedList: InterestData;
}

export type BoxInterestsProps = {
  interest: string;
  modalVisibility: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
};

export interface InterestsProps {
  setInterest: Dispatch<SetStateAction<string>>;
}
