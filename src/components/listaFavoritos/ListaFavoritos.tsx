import { useFavorites } from '../../context/useFavorites';
import { CardProduto } from '../cardProdutos/CardProduto';
import styles from './listaFavoritos.module.css';

export function ListaFavoritos() {
  const { favoritos, toggleFavorito } = useFavorites();

  if (favoritos.length === 0) {
    return <p className={styles.vazio}>Nenhum produto favoritado ainda.</p>;
  }

  return (
    <ul className={styles.lista}>
      {favoritos.map((produto) => (
        <CardProduto
          key={produto.id}
          produto={produto}
          aoClicar={() => toggleFavorito(produto)}
        />
      ))}
    </ul>
  );
}
