import styles from './header.module.css';
import { useFavorites } from '../../hooks/useFavorites';
import { Heart } from 'lucide-react';

export default function Header() {
  const { favoritos } = useFavorites();
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>SmartBreeder</h1>
            <div className={styles.headerFavorites}>
                < Heart size={20} color="red" fill="red" />
                <span className={styles.headerContador}>{favoritos.length ? favoritos.length : '0'}</span>
            </div>
        </header>
    );
};
