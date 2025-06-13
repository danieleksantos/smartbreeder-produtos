import categorias from '../data/categorias.json';
import type { Categoria } from '../types';

export function useCategoriaNome() {
  const map = new Map<number, string>();

  (categorias as Categoria[]).forEach((cat) => {
    map.set(cat.id, cat.nome);
  });

  function getNomes(categoriasIds: number[]): string[] {
    return categoriasIds.map((id) => map.get(id) || `Categoria ${id}`);
  }

  return { getNomes };
}
