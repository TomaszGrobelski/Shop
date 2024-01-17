import { ReactNode } from 'react';

import { Shoe } from '../ShoesPage/interfaceShoe';

export type FavoritiestContextType = {
  favorities: Shoe[];
  setFavorities: React.Dispatch<React.SetStateAction<Shoe[]>>;
};

export interface FavoritesProviderProps {
  children: ReactNode;
}
