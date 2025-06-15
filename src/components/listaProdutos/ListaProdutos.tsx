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
  const [paginaAtual, setPaginaAtual] = useState(1);

  const itensPorPagina = 12;
  const { getNomes } = useCategoriaNome();

  useEffect(() => {
    fetchProdutos().then(setProdutos);
  }, []);

  useEffect(() => {
    setPaginaAtual(1);
  }, [filtro]);

  const filtroNormalizado = filtro.toLowerCase().trim();

  const produtosFiltrados = produtos.filter((produto) => {
    const nomeProduto = produto.nome?.toLowerCase() ?? '';
    const nomesCategorias = getNomes(produto.categorias).join(' ').toLowerCase();

    return (
      nomeProduto.includes(filtroNormalizado) ||
      nomesCategorias.includes(filtroNormalizado)
    );
  });

  const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);
  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const produtosPaginados = produtosFiltrados.slice(indiceInicial, indiceFinal);

  const irParaPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaAtual(pagina);
    }
  };

  return (
    <>
      <ul className={style.container}>
        {produtosPaginados.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            aoClicar={() => setProdutoSelecionado(produto)}
          />
        ))}
      </ul>

      {totalPaginas > 1 && (
        <div className={style.paginacao}>
          <button onClick={() => irParaPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>
            Anterior
          </button>

          <span>
            Página {paginaAtual} de {totalPaginas}
          </span>

          <button onClick={() => irParaPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>
            Próxima
          </button>
        </div>
      )}

      {produtoSelecionado && (
        <ModalProduto
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </>
  );
};
