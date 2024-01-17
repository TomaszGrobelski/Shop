import { ReactNode, useState } from "react";

import { Shoe } from "../components/ShoesPage/Products/interfaceShoe";
import { FavoritiestContext } from "../context/context";

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorities, setFavorities] = useState<Shoe[]>([]);

<<<<<<< HEAD
  return <FavoritiestContext.Provider value={{ favorities, setFavorities }}>{children}</FavoritiestContext.Provider>;
=======
  return (
    <FavoritiestContext.Provider value={{ favorities, setFavorities }}>
      {children}
    </FavoritiestContext.Provider>
  );
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
};

export default FavoritesProvider;
