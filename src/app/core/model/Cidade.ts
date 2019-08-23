import { Estado } from './Estado';

export class Cidade {
    codigo: number;
    nome: string;
    estado = new Estado();
}

