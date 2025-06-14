import type { ChangeEvent } from 'react';
import styles from './filtrarProdutos.module.css';

interface FiltrarProdutosProps {
  filtroNomeOuCategoria: string;
  onFiltrar: (valor: string) => void;
}

export function FiltrarProdutos({ filtroNomeOuCategoria, onFiltrar }: FiltrarProdutosProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onFiltrar(event.target.value);
  }

  return (
    <div className={styles.filtrarProdutos}>
      <label htmlFor="filtro" className={styles.filtrarProdutos__label}>
        Buscar por nome ou categoria:
      </label>
      <input
        id="filtro"
        type="text"
        value={filtroNomeOuCategoria}
        onChange={handleChange}
        className={styles.filtrarProdutos__input}
        placeholder="Ex: Games ou Móvel"
      />
    </div>
  );
}
