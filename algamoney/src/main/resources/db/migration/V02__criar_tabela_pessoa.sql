CREATE TABLE pessoa (
    codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    logradouro VARCHAR(50),
    numero VARCHAR(5),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cep VARCHAR(50),
    estado VARCHAR(50),
    cidade VARCHAR(50),
    ativo BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('João Silva', 'Rua das Flores', '123', 'Apto 12', 'Centro', '38010-000', 'MG', 'Uberaba');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Maria Santos', 'Av. Brasil', '456', NULL, 'São Geraldo', '38020-111', 'MG', 'Uberaba');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Pedro Souza', 'Rua Quinze', '89', 'Casa', 'Estados', '12345-678', 'SP', 'São Paulo');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Ana Costa', 'Praça da Sé', '1', 'Sala 2', 'Sé', '01001-000', 'SP', 'São Paulo');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Lucas Almeida', 'Rua do Sol', '55', 'Casa B', 'Boa Vista', '50050-000', 'PE', 'Recife');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Júlia Oliveira', 'Av. Paulista', '1500', 'Andar 10', 'Bela Vista', '01310-100', 'SP', 'São Paulo');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Marcos Pereira', 'Rua das Pedras', '10', NULL, 'Centro', '28950-000', 'RJ', 'Búzios');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Fernanda Lima', 'SCES Trecho 2', '999', 'Lote 5', 'Asa Sul', '70200-002', 'DF', 'Brasília');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Carlos Gomes', 'Rua Sete de Setembro', '200', 'Térreo', 'Centro', '20050-009', 'RJ', 'Rio de Janeiro');

INSERT INTO pessoa (nome, logradouro, numero, complemento, bairro, cep, estado, cidade) 
VALUES ('Beatriz Rocha', 'Av. Afonso Pena', '3000', NULL, 'Funcionários', '30130-007', 'MG', 'Belo Horizonte');