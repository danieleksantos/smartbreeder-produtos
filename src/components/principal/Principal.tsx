import { ListaProdutos } from '../listaProdutos/ListaProdutos';
import { ListaFavoritos } from '../listaFavoritos/ListaFavoritos';
import styles from './principal.module.css';

export function Principal() {
  return (
    <main className={styles.principal}>
      <section className={styles.produtos}>
        <h2>Produtos</h2>
        <ListaProdutos />
      </section>
      <aside className={styles.favoritos}>
        <h2>Favoritos</h2>
        <ListaFavoritos />
      </aside>
    </main>
  );
}
