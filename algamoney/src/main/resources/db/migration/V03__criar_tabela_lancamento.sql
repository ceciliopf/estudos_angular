CREATE TABLE lancamento (
    codigo BIGINT(20) NOT NULL,
    data_vencimento DATE NOT NULL,
    data_pagamento DATE,
    vakir DECIMAL(10,2) NOT NULL,
    observacao VARCHAR(100),
    tipo VARCHAR(20) NOT NULL,
    codigo_categoria BIGINT(20)NOT NULL,
    codigo_pessoa BIGINT(20) NOT NULL,
    FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo),
    FOREIGN KEY (codigo_pessoa) REFERENCES pessoa(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO lancamento (codigo, data_vencimento, data_pagamento, vakir, observacao, tipo, codigo_categoria, codigo_pessoa) VALUES 
(1, '2026-08-10', '2026-08-10', 1500.00, 'Salário mensal', 'RECEITA', 1, 1),
(2, '2026-08-15', NULL, 120.50, 'Conta de luz', 'DESPESA', 2, 2),
(3, '2026-08-20', '2026-08-18', 85.00, 'Conta de água', 'DESPESA', 2, 3),
(4, '2026-08-05', '2026-08-05', 300.00, 'Venda de bicicleta', 'RECEITA', 3, 4),
(5, '2026-08-25', NULL, 1500.00, 'Aluguel da casa', 'DESPESA', 4, 5),
(6, '2026-08-12', '2026-08-11', 250.00, 'Compras no supermercado', 'DESPESA', 5, 1),
(7, '2026-08-30', NULL, 50.00, 'Provedor de internet', 'DESPESA', 2, 2),
(8, '2026-08-01', '2026-08-01', 500.00, 'Rendimento de investimentos', 'RECEITA', 3, 3),
(9, '2026-08-18', NULL, 120.00, 'Mensalidade da academia', 'DESPESA', 4, 4),
(10, '2026-08-22', '2026-08-22', 80.00, 'Medicamentos na farmácia', 'DESPESA', 5, 5);
