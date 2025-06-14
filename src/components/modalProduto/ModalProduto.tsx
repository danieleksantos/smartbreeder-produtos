import styles from './modalProduto.module.css';
import type { Produto } from '../../types';
import { BotaoFavorito } from '../botaoFavorito/BotaoFavorito';

interface ModalProdutoProps {
  produto: Produto;
  onClose: () => void;
}

export function ModalProduto({ produto, onClose }: ModalProdutoProps) {
  return (
    <div className={styles.modalProduto}>
      <div className={styles.modalProdutoOverlay} onClick={onClose} />

      <div className={styles.modalProdutoContent} role="dialog" aria-modal="true">
        <div className={styles.modalProdutoBtn}>
          <BotaoFavorito produto={produto} />

          <button
            className={styles.modalProdutoBtnClose}
            onClick={onClose}
            aria-label="Fechar modal"
          >
           ×
          </button>
        </div>

        <h2 className={styles.modalProdutoTitle}>{produto.nome ? produto.nome : 'Nome desconhecido'}</h2>
        <p className={styles.modalProdutoDescription}>{produto.descricao}</p>

        <h3 className={styles.modalProdutoSubtitle}>Variações</h3>
        <ul className={styles.modalProdutoListaVariacoes}>
          {produto.variacao?.map((item, index) => (
            <li key={index} className={styles.modalProdutoVariacao}>
              <p><strong>Vendedor:</strong> {item.vendedor}</p>
              <p><strong>Fabricante:</strong> {item.fabricante}</p>
              <p><strong>Cor:</strong> {item.cor}</p>
              <p><strong>Voltagem:</strong> {item.voltagem}</p>
              <p><strong>Tamanho:</strong> {item.tamanho}</p>
              <p><strong>Garantia:</strong> {item.garantia}</p>
              <p><strong>Peso:</strong> {item.peso ?? 'Não informado'}</p>
              <p><strong>Dimensões:</strong> {item.dimensoes ?? 'Não informado'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
