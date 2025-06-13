import { useEffect, useState } from 'react';
import { fetchProdutos } from '../../services/api';
import type { Produto } from '../../types';
import { CardProduto } from '../cardProdutos/CardProduto';
import style from './listaProduto.module.css'
import { ModalProduto} from '../modalProduto/ModalProduto'


export const ListaProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);


  useEffect(() => {
    fetchProdutos().then(setProdutos);
  }, []);

  return (
    <>
    <ul className={style.container}>
      {produtos.map((produto) => (
        < CardProduto
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
      )
    }
    </>
  );
};
