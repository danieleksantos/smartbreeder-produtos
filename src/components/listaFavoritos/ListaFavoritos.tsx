import { useState } from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import { CardProduto } from '../cardProdutos/CardProduto';
import { ModalProduto } from '../modalProduto/ModalProduto';
import type { Produto } from '../../types';
import styles from './listaFavoritos.module.css';

export function ListaFavoritos() {
  const { favoritos } = useFavorites();
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  function abrirModal(produto: Produto) {
    setProdutoSelecionado(produto);
  }

  function fecharModal() {
    setProdutoSelecionado(null);
  }

  if (favoritos.length === 0) {
    return <p className={styles.vazio}>Nenhum produto favoritado ainda.</p>;
  }

  return (
    <>
      <ul className={styles.lista}>
        {favoritos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            aoClicar={() => abrirModal(produto)}
          />
        ))}
      </ul>

      {produtoSelecionado && (
        <ModalProduto produto={produtoSelecionado} onClose={fecharModal} />
      )}
    </>
  );
}
