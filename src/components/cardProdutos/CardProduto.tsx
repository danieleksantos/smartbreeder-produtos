import styles from './cardProduto.module.css';
import type { Produto } from '../../types';
import { useFavorites } from '../../hooks/useFavorites';
import { useCategoriaNome } from '../../hooks/useCategoriaNome'

interface CardProdutoProps {
  produto: Produto;
  aoClicar: () => void;
}

export function CardProduto({ produto, aoClicar }: CardProdutoProps) {
  const { favoritos, toggleFavorito } = useFavorites(); 
  const { getNomes } = useCategoriaNome();
  const estaFavorito = favoritos.some((p) => p.id === produto.id);
  const nomesCategorias = getNomes(produto.categorias);

  return (
    <li className={styles.cardProduto}>
      <p className={styles.cardProdutoId}>{produto.id}</p>
      <h3 className={styles.cardProdutoTitle}>
        {produto.nome ? produto.nome : 'Nome desconhecido'}
      </h3>
      <p className={styles.cardProdutoDescription}>{produto.descricao}</p>
      <p className={styles.cardProdutoPrice}>
        <strong>Preço: </strong>
        {produto.preco ? `R$ ${parseFloat(produto.preco).toFixed(2)}` : 'Não disponível'}
      </p>
      <p className={styles.cardProdutoCategories}>
        <strong>Categorias: </strong>
        {nomesCategorias.join(', ')}
      </p>
      <div className={styles.cardProdutoActions}>
        <button
          className={styles.cardProdutoBtnDetail}
          onClick={aoClicar}
          aria-label={`Ver mais detalhes do produto ${produto.nome ?? produto.id}`}
        >
          Mais detalhes
        </button>

        <button
          className={styles.cardProdutoBtnFavorite}
          onClick={() => toggleFavorito(produto)}
          aria-label={`${estaFavorito ? 'Remover dos' : 'Adicionar aos'} favoritos`}
        >
          <i className={`fa${estaFavorito ? 's' : 'r'} fa-heart`}></i>
        </button>
      </div>
    </li>
  );
}
