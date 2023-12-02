
import { Evento } from './Evento';
import { Palestrante } from './Palestrantes';

export interface RedeSocial {
  id: number;
  nome: String;
  URL: String;
  eventoId: number;
  palestranteId: number;
}
