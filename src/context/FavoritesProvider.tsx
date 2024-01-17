import { ReactNode, useState } from 'react';

import { Shoe } from '../components/ShoesPage/Products/interfaceShoe';
import { FavoritiestContext } from '../context/context';

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorities, setFavorities] = useState<Shoe[]>([]);

  return (
    <FavoritiestContext.Provider value={{ favorities, setFavorities }}>
      {children}
    </FavoritiestContext.Provider>
  );
};

export default FavoritesProvider;
