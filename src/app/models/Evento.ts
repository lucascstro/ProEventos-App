import { Lote } from './Lote';
import { Palestrante } from './Palestrantes';
import { RedeSocial } from './RedeSocial';

export interface Evento {
  id: number;
  local: String;
  dataEvento: Date;
  tema: String;
  qtdPessoas: number;
  imageUrl: String;
  telefone: String;
  email: String;
  lotes: Lote[];
  redesSociais: RedeSocial[];
  palestrantesEventos: Palestrante[];
}
