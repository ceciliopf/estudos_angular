CREATE TABLE lancamento (
    codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    data_vencimento DATE NOT NULL,
    data_pagamento DATE,
    valor DECIMAL(10,2) NOT NULL,
    observacao VARCHAR(100),
    tipo VARCHAR(20) NOT NULL,
    codigo_categoria BIGINT(20) NOT NULL,
    codigo_pessoa BIGINT(20) NOT NULL,
    FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo),
    FOREIGN KEY (codigo_pessoa) REFERENCES pessoa(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO lancamento 
(descricao, data_vencimento, data_pagamento, valor, observacao, tipo, codigo_categoria, codigo_pessoa) 
VALUES 
('Salário mensal', '2023-10-05', '2023-10-05', 6500.00, 'Salário referente a Setembro', 'RECEITA', 1, 1),
('Supermercado', '2023-10-10', '2023-10-09', 850.50, 'Compras do mês', 'DESPESA', 2, 2),
('Conta de Luz', '2023-10-15', NULL, 180.90, 'Referência Setembro', 'DESPESA', 3, 1),
('Conta de Água', '2023-10-20', '2023-10-18', 95.00, NULL, 'DESPESA', 3, 1),
('Restaurante', '2023-10-08', '2023-10-08', 120.00, 'Almoço de domingo', 'DESPESA', 4, 2),
('Venda de notebook', '2023-10-12', '2023-10-12', 3200.00, 'Venda de equipamento usado', 'RECEITA', 5, 1),
('Mensalidade Academia', '2023-10-05', '2023-10-05', 110.00, 'Plano anual', 'DESPESA', 1, 2),
('Farmácia', '2023-10-18', NULL, 65.40, 'Remédios para gripe', 'DESPESA', 2, 1),
('Aluguel', '2023-10-10', '2023-10-10', 1500.00, NULL, 'DESPESA', 3, 1),
('Rendimento de Investimentos', '2023-10-31', '2023-10-31', 450.00, 'Dividendos e FIIs', 'RECEITA', 4, 1),
('Gasolina', '2023-10-02', '2023-10-02', 200.00, 'Viagem fim de semana', 'DESPESA', 5, 2),
('Manutenção Carro', '2023-10-25', NULL, 850.00, 'Troca de óleo e freios', 'DESPESA', 1, 2),
('Freelance de Design', '2023-10-15', '2023-10-15', 1200.00, 'Criação de logo', 'RECEITA', 2, 2),
('Internet e TV', '2023-10-20', '2023-10-19', 160.00, 'Plano combo', 'DESPESA', 3, 1),
('Cinema e Pipoca', '2023-10-22', '2023-10-22', 85.00, 'Ingressos e lanche', 'DESPESA', 4, 2);