/*import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    <main>
      <About />
      <Projects />
    </main>
    <Footer />
  </>
);

export default Home; */
/*import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="home">
      <h1>Hi, my name is</h1>
      <h2>Brittany Chiang.</h2>
      <h3>I build things for the web.</h3>
      <p>
        I'm a software engineer specializing in building exceptional digital experiences.
        Currently, I'm focused on building accessible, human-centered products.
      </p>
      <a href="/Curriculum Mizael Barreto 2025 (1).pdf" className="resume-button">Baixe aqui meu Curriculum</a>
    </main>
  );
};

export default Home;*/
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Texto de introdução */}
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
      <a href="/Curriculum Mizael Barreto 2025 (1).pdf" className="resume-button">Baixe aqui meu Curriculum</a>
  
    </div>
  );
};

export default Home;

