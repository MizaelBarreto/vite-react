import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="intro">Olá, meu nome é</h1>

      {/* Nome principal */}
      <h2 className="name">Mizael Barreto.</h2>

      {/* Subtítulo */}
      <h3 className="subtitle">Eu transformo identidades digitais.</h3>

      {/* Descrição */}
      <p className="description">
        Sou um desenvolvedor full-stack especializado em construir experiências digitais excepcionais.
        Tenho domínio sobre frameworks como Node, React, Vue, Vite, Laravel e .NET, programando em
        múltiplas linguagens de programação.
      </p>

      {/* Botão */}
      <a href="/Curriculum Mizael Barreto 2025 (1).pdf" className="resume-button">Baixe Aqui meu currículum</a>
  
    </div>
  );
};

export default Home;

