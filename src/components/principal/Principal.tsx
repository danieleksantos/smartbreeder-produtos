import { useState } from 'react';
import { ListaProdutos } from '../listaProdutos/ListaProdutos';
import { ListaFavoritos } from '../listaFavoritos/ListaFavoritos';
import { FiltrarProdutos } from '../filtrarProdutos/FiltrarProdutos';
import styles from './principal.module.css';

export function Principal() {
    const [filtro, setFiltro] = useState('');
  return (
    <main className={styles.principal}>
      <FiltrarProdutos filtroNomeOuCategoria={filtro} onFiltrar={setFiltro} />
      <section className={styles.produtos}>
        <h2>Produtos</h2>
        <ListaProdutos filtro={filtro} />
      </section>
      <aside className={styles.favoritos}>
        <h2>Favoritos</h2>
        <ListaFavoritos />
      </aside>
    </main>
  );
}
