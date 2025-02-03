DROP TABLE IF EXISTS projetos;

CREATE TABLE projetos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    imagens TEXT[] NOT NULL
);
INSERT INTO projetos (titulo, descricao, imagens)
VALUES
-- Projeto 1
(
    'MTO - HAYDAM', 
    'Meu Trabalho de Conclusão de Curso (TCC), o My Time Organizer (MTO), é um site que otimiza a administração e a geração de horários. Os horários são gerados de maneira automatizada por um algoritmo de alta complexidade em Python, que utiliza dados obtidos do banco de dados. O sistema conta com uma plataforma para gerenciamento de informações como professores, disciplinas, atribuições e laboratórios. Inclui um sistema de coleta de indisponibilidade dos docentes, utilizado como parâmetro pelo algoritmo. Há ainda uma tela interativa que permite edição manual dos horários, com suporte a cálculo de erros e conflitos, além da geração de PDFs formatados com os horários finais. O site foi programado em Laravel, com maior parte em JavaScript e PHP, e o algoritmo de otimização foi implementado como uma API em Python.', 
    ARRAY['/src/assets/MTO1.png', '/src/assets/MTO2.png', '/src/assets/MTO3.png', '/src/assets/MTO4.png', '/src/assets/MTO5.png', '/src/assets/MTO6.png', '/src/assets/MTO7.png', '/src/assets/MTO8.png', '/src/assets/MTO9.png']
),
-- Projeto 2
(
    'E-commerce MIPRON', 
    'O site e-commerce MIPRON foi desenvolvido em equipe, onde atuei como gerente de marketing e desenvolvedor. Trata-se de uma plataforma completa para login, compra e venda de produtos comercializados pelo nosso grupo durante o evento da semana do colégio. Inclui suporte para registro de vendas e geração de relatórios de análise. O site foi programado principalmente em PHP e JavaScript.', 
    ARRAY['/src/assets/ecom1.png', '/src/assets/ecom2.png', '/src/assets/ecom3.png', '/src/assets/ecom4.png', '/src/assets/ecom5.png', '/src/assets/ecom6.png', '/src/assets/ecom7.png', '/src/assets/ecom8.png', '/src/assets/ecom9.png']
),
-- Projeto 3
(
    'ONG de Pets', 
    'Um sistema desenvolvido em C# com Windows Forms, no framework .NET. Ele oferece suporte para registro de adoção, cadastro de animais e informações dos adotantes, com funcionalidades para realizar adoções e acompanhar o status dos animais.', 
    ARRAY['/src/assets/ong1.png', '/src/assets/ong2.png', '/src/assets/ong3.png']
),
-- Projeto 4
(
    'CINEMIZA', 
    'O CINEMIZA é um projeto em Java Spring que funciona como um guia de séries. Ele fornece avaliações e sinopses, organizadas por categorias e gêneros. O sistema também gera um ranking das 5 séries mais bem avaliadas. As séries são armazenadas em um banco de dados PostgreSQL e os dados são alimentados via uma API.', 
    ARRAY['/src/assets/Java1.png', '/src/assets/Java2.png', '/src/assets/Java3.png']
),
-- Projeto 5
(
    'Sistemas de vendas de Smartphones', 
    'Um sistema desenvolvido no framework .NET, com opções de pesquisa específicas por faixa de preço, modelo e marca. É possível realizar a compra e o cadastro de aparelhos disponíveis para venda.', 
    ARRAY['/src/assets/C1.png', '/src/assets/C2.png', '/src/assets/C3.png']
),
-- Projeto 6
(
    'Site de gerenciamento de vendas de cursos', 
    'Um site desenvolvido em Laravel que permite o controle e o gerenciamento de cursos à venda em uma plataforma. O sistema conta com funcionalidade de login e banco de dados em PostgreSQL.', 
    ARRAY['/src/assets/laravel1.png', '/src/assets/laravel2.png', '/src/assets/laravel3.png', '/src/assets/laravel4.png']
),
-- Projeto 7
(
    'Academia MIFit - MIPRON', 
    'Desenvolvido com Windows Forms no framework .NET, o sistema MIFit é voltado para academias. Ele oferece cadastro de alunos, geração de planilhas de treino de acordo com os objetivos dos alunos e atribuição de personal trainers. Também inclui um painel administrativo para gerenciamento de profissionais cadastrados.', 
    ARRAY['/src/assets/acad1.png', '/src/assets/acad2.png', '/src/assets/acad3.png', '/src/assets/acad4.png', '/src/assets/acad5.png', '/src/assets/acad6.png']
);
