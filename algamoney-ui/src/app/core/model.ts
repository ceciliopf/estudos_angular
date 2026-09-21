export class Endereco {
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cep?: string;
    cidade?: string;
    estado?: string;
}

export class Pessoa {
    codigo?: number;
    nome?: string;
    endereco = new Endereco();
    ativo = true;
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