import produtosData from '../data/produtos.json';
import categoriasData from '../data/categorias.json';
import type { Produto, Categoria } from '../types';

export const fetchProdutos = (): Promise<Produto[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(produtosData as Produto[]);
    }, 1000);
  });
};

export const fetchCategorias = (): Promise<Categoria[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoriasData as Categoria[]);
    }, 1000);
  });
};
