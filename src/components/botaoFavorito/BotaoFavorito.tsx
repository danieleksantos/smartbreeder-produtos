import { Heart } from 'lucide-react';
import type { Produto } from '../../types';
import { useFavorites } from '../../hooks/useFavorites';
import styles from './botaoFavorito.module.css'

interface BotaoFavoritoProps {
  produto: Produto;
}

export function BotaoFavorito({ produto }: BotaoFavoritoProps) {
  const { favoritos, toggleFavorito } = useFavorites();
  const estaFavorito = favoritos.some((p) => p.id === produto.id);

  return (
    <button
        className={styles.btnFavorite}
      onClick={() => toggleFavorito(produto)}
      aria-label={`${estaFavorito ? 'Remover dos' : 'Adicionar aos'} favoritos`}
    >
      <Heart
        size={24}
        strokeWidth={2}
        color={estaFavorito ? 'red' : 'red'}
        fill={estaFavorito ? 'red' : 'transparent'}
      />
    </button>
  );
}
