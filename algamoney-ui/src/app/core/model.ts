export class Pessoa {
    codigo?: number;
    nome?: string;
}

export class Categoria {
    codigo?: number;
    nome?: string;
}

export class Lancamento {
    codigo?: number;
    descricao?: string;
    dataVencimento?: Date;
    dataPagamento?: Date;
    valor?: number;
    tipo = 'RECEITA';
    categoria = new Categoria();
    pessoa = new Pessoa();
    observacao?: string;
}