export interface Categoria {
  id: number;
  nome: string;
}

export interface Variacao {
  estoque: string; 
  vendedor: string;
  fabricante: string;
  cor: string;
  voltagem: string;
  tamanho: string;
  garantia: string;
  peso: string | null;
  dimensoes: string | null;
}

export interface Produto {
  id: number;
  nome?: string; 
  categorias: number[]; 
  preco?: string; 
  descricao?: string;
  variacao?: Variacao[];
  favorito?: boolean;
}