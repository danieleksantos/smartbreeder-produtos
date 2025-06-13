import { createContext } from "react";
import type { Produto } from "../types";

export interface FavoritesContextType {
  favoritos: Produto[];
  toggleFavorito: (produto: Produto) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
