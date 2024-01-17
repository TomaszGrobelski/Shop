import { createContext } from 'react';

import { FavoritiestContextType } from '../types/context/context.types';

export const FavoritiestContext = createContext<FavoritiestContextType>({
  favorities: [],
  setFavorities: () => {},
});
