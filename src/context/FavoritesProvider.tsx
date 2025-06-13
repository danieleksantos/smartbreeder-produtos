import { useState } from "react";
import type { ReactNode } from "react";
import type { Produto } from "../types";
import { FavoritesContext } from "./FavoritesContext";

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  function toggleFavorito(produto: Produto) {
    const estaFavorito = favoritos.some((p) => p.id === produto.id);

    if (estaFavorito) {
      setFavoritos((prev) => prev.filter((p) => p.id !== produto.id));
    } else {
      setFavoritos((prev) => {
        const categoriasProduto = produto.categorias;
        const favoritosPorCategoria: Record<number, Produto[]> = {};

        prev.forEach((fav) => {
          fav.categorias.forEach((catId) => {
            if (!favoritosPorCategoria[catId]) favoritosPorCategoria[catId] = [];
            favoritosPorCategoria[catId].push(fav);
          });
        });

        let novosFavoritos = [...prev];

        categoriasProduto.forEach((catId) => {
          const favoritosNaCategoria = favoritosPorCategoria[catId] || [];
          if (favoritosNaCategoria.length >= 2) {
            const aRemover = favoritosNaCategoria[0];
            novosFavoritos = novosFavoritos.filter((p) => p.id !== aRemover.id);
          }
        });

        novosFavoritos.push(produto);
        return novosFavoritos;
      });
    }
  }

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}
