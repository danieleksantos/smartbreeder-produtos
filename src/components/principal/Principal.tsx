import { useState } from 'react';
import { ListaProdutos } from '../listaProdutos/ListaProdutos';
import { ListaFavoritos } from '../listaFavoritos/ListaFavoritos';
import { FiltrarProdutos } from '../filtrarProdutos/FiltrarProdutos';
import styles from './principal.module.css';

export function Principal() {
  const [filtro, setFiltro] = useState('');
  const [abaAtiva, setAbaAtiva] = useState<'produtos' | 'favoritos'>('produtos');

  return (
    <main className={styles.principal}>
      <nav className={styles.principalAbas}>
        <button
          onClick={() => setAbaAtiva('produtos')}
          className={abaAtiva === 'produtos' ? styles.principalAbaAtiva : ''}
        >
          Produtos
        </button>
        <button
          onClick={() => setAbaAtiva('favoritos')}
          className={abaAtiva === 'favoritos' ? styles.principalAbaAtiva : ''}
        >
          Favoritos
        </button>
      </nav>

      {abaAtiva === 'produtos' && (
        <>
          <FiltrarProdutos filtroNomeOuCategoria={filtro} onFiltrar={setFiltro} />
          <section className={styles.produtos}>
            <h2>Produtos</h2>
            <ListaProdutos filtro={filtro} />
          </section>
        </>
      )}

      {abaAtiva === 'favoritos' && (
        <section className={styles.favoritos}>
          <h2>Favoritos</h2>
          <ListaFavoritos />
        </section>
      )}
    </main>
  );
}
