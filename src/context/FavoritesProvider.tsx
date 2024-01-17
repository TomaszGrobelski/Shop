import { useState } from 'react';

import { FavoritiestContext } from '../context/context';
import { Shoe } from '../types/ShoesPage/interfaceShoe';
import { FavoritesProviderProps } from '../types/context/context.types';

const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorities, setFavorities] = useState<Shoe[]>([]);

  return (
    <FavoritiestContext.Provider value={{ favorities, setFavorities }}>
      {children}
    </FavoritiestContext.Provider>
  );
};

export default FavoritesProvider;
