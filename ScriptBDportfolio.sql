INSERT INTO projetos (titulo, descricao, imagens) 
VALUES 
(
    'MTO - HAYDAM', 
    'Meu trabalho de conclusão de curso(TCC) o My Time Organizator é um site que otimiza a administração e a geração de horários, os horáios são gerados de maneira automatizada por um algoritmo de alta complexidade em Python que gera horários a partir de dados obtidos do DB, o sistema possui toda plataforma para gerenciamento dos dados(Professores, Disciplinas, Atribuições, Laboratórios e etc)além de possuir um sistema de coleta de dados de indisponibilidade dos docentes , um dos dados usados pelo algoritmo, também foi realizado uma tela de altíssima complexidade que permite a edição dos horários para reparos ou melhorias totalmente interativo com um calculador de erros e conflitos automáticos dando todo suporte para geração dos pdf´s prontos com os horários formatados, o site é programado em Laravel, utiliza Java Script e PHP em sua maioria e hospeda em formato de API o algoritmo de otimização em Python.', 
    ARRAY['/src/assets/MTO1.png', '/src/assets/MTO2.png','/src/assets/MTO3.png','/src/assets/MTO4.png','/src/assets/MTO5.png','/src/assets/MTO6.png','/src/assets/MTO7.png','/src/assets/MTO8.png',
'/src/assets/MTO9.png']
),
(
    'E-commerce MIPRON', 
    'O site e-commerce MIPRON foi um projeto desenvolvido em equipe, onde atuei como gerente de marketing e desenvolvedor, foi realizado um site e-commerce completo com todo suporte para login, compra e venda de produtos vendidos por meu grupo na semana do colégio, onde o colégio é aberto ao publico e exposições são realizadas, programado em sua maioria em PHP e Java Script, o site também possui o registro de vendas e relatórios para análise de vendas.', 
     ARRAY['/src/assets/ecom1.png', '/src/assets/ecom2.png','/src/assets/ecom3.png','/src/assets/ecom4.png','/src/assets/ecom5.png','/src/assets/ecom6.png','/src/assets/ecom7.png','/src/assets/ecom8.png',
'/src/assets/ecom9.png']

);

INSERT INTO projetos (titulo, descricao, imagens)
VALUES
(
    'ONG de Pets',
    'Um sistema desenvolvido em C# com Windows Forms do framework .NET, o sistema possui todo suporte para registros de adoção,
    animais, adotantes, para realizar adoções e acompanhar status de animais',
    ARRAY['/src/assets/ong1.png','/src/assets/ong2.png','/src/assets/ong3.png']
);

INSERT INTO projetos (titulo, descricao, imagens)
VALUES
(
    'CINEMIZA',
    'O cinemiza é um projeto em Java Spring que se trata de um guia de séries que fornece sua avaliação e sinopse, dividindo as séries por categorias e gêneros, e também ranqueia o top 5 de séries mais bem avaliadas, as séries e seus dados são cadastradas em um Banco em Postgres, e os dados são recebidos de uma API.',
    ARRAY['/src/assets/Java1.png','/src/assets/Java2.png','/src/assets/Java3.png']
);

UPDATE projetos
SET imagens = ARRAY['/src/assets/laravel1.png','/src/assets/laravel2.png','/src/assets/laravel3.png','/src/assets/laravel4.png']
WHERE titulo = 'Site de gerenciamento de vendas de cursos';

UPDATE projetos
SET descricao = 'Desenvolvido com Windows Forms no framework .NET o sistema MIFit é um sistema de academias que faz o cadastro de alunos e fornece ao aluno a planilha de treino para o aluno segundo seu objetivo e o fornece um personal, além de possuir uma página de login de gerenciamento dos personais cadastrados.'
WHERE titulo = 'AcademiaMIFit - MIPRON';

INSERT INTO projetos (titulo, descricao, imagens)
VALUES
(
    'Sistemas de vendas de Smartphones',
    'Um sistema desenvolvido em .NET framework, o sistema possui opçoes de pesquisa espícificas por faixa de preço, modelo e marca, é possível realizar a compra e o cadastramento de aparelhos para venda.',
    ARRAY['/src/assets/C1.png','/src/assets/C2.png','/src/assets/C3.png']
);

INSERT INTO projetos (titulo, descricao, imagens)
VALUES
(
    'Site de gerenciamento de vendas de cursos',
    'Um site programado em Laravel que permite o controle e o gerenciamento de cursos a venda em uma plataforma, o site conta com sistema de login e banco de dados em postgres.',
    ARRAY['/src/assets/laravel1.png','/src/assets/laravel2.png','/src/assets/laravel3.png','/src/assets/laravel4.png']
);
INSERT INTO projetos (titulo, descricao, imagens)
VALUES
(
    'Academia MIFit - MIPRON', 
    'Desenvolvido com Windows Forms no framework .NET o sistema MIFit é um sistema de academias que faz o cadastro de alunos e fornece ao aluno a planilha de treino para o aluno segundo seu objetivo e o fornece um personal, além de possuir uma página de login de gerenciamento dos personais cadastrados.', 
     ARRAY['/src/assets/acad1.png', '/src/assets/acad2.png','/src/assets/acad3.png','/src/assets/acad4.png','/src/assets/acad5.png','/src/assets/acad6.png',
'/src/assets/ecom9.png']
);