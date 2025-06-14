import { useEffect, useState } from 'react';
import { fetchProdutos } from '../../services/api';
import type { Produto } from '../../types';
import { CardProduto } from '../cardProdutos/CardProduto';
import { ModalProduto } from '../modalProduto/ModalProduto';
import { useCategoriaNome } from '../../hooks/useCategoriaNome';
import style from './listaProduto.module.css';

interface ListaProdutosProps {
  filtro: string;
}

export const ListaProdutos = ({ filtro }: ListaProdutosProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const { getNomes } = useCategoriaNome();

  useEffect(() => {
    fetchProdutos().then(setProdutos);
  }, []);

  const filtroNormalizado = filtro.toLowerCase().trim();

  const produtosFiltrados = produtos.filter((produto) => {
    const nomeProduto = produto.nome?.toLowerCase() ?? '';
    const nomesCategorias = getNomes(produto.categorias).join(' ').toLowerCase();

    return (
      nomeProduto.includes(filtroNormalizado) ||
      nomesCategorias.includes(filtroNormalizado)
    );
  });

  return (
    <>
      <ul className={style.container}>
        {produtosFiltrados.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            aoClicar={() => setProdutoSelecionado(produto)}
          />
        ))}
      </ul>

      {produtoSelecionado && (
        <ModalProduto
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </>
  );
};
