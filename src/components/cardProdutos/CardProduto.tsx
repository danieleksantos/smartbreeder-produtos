import styles from './cardProduto.module.css';
import type { Produto } from '../../types';

interface CardProdutoProps {
    produto: Produto;
    aoClicar: () => void;
}

export function CardProduto ({ produto, aoClicar }: CardProdutoProps) {
    return (
        <li className={styles.cardProduto}>
            <p className={styles.cardProdutoId}>{produto.id}</p>
            <h3 className={styles.cardProdutoTitle}>
                {produto.nome ? produto.nome : 'Nome desconhecido'}
            </h3>
            <p className={styles.cardProdutoDescription}>{produto.descricao}</p>
            <p className={styles.cardProdutoPrice}>
                <strong>Preço: </strong>{produto.preco ? `R$ ${parseFloat(produto.preco).toFixed(2)}` : ' Não disponível'}
            </p>
            <p className={styles.cardProdutoCategories}><strong>Categorias: </strong>{produto.categorias.join(', ')}</p>
            <div className={styles.cardProdutoActions}>
            <button 
                className={styles.cardProdutoBtnDetail}
                onClick={aoClicar}
                aria-label={`Ver mais detalhes do produto ${produto.nome}`}
                >
                Mais detalhes
            </button> 
            <button className={styles.cardProdutoBtnFavorite}>
                <i className="fas fa-heart"></i>
            </button>
            </div>
        </li>
    )
}