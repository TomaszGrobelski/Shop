import { createContext } from "react";
import { Shoe } from "../components/ShoesPage/Products/interfaceShoe";

type FavoritiestContextType = {
  favorities: Shoe[];
  setFavorities: React.Dispatch<React.SetStateAction<Shoe[]>>;
};

export const FavoritiestContext = createContext<FavoritiestContextType>({
  favorities: [],
  setFavorities: () => {}
});