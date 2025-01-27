/*import React from 'react';

const Header: React.FC = () => (
  <header className="header">
    <h1 className="logo">Mizael Barreto - Desenvolvedor full-stack</h1>
    <nav>
      <ul>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;*/import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import logo from '../assets/SISTEMAS.png'; // Importa a logo
const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Exibindo a logo */}
      <div className="logo">
        <Link to="/">
          <img src= {logo} alt="Logo Sistemas" className="logo-image" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">Sobre mim</a>
          </li>
          <li>
            <a href="/Projects">Projetos</a>
          </li>
          <li>
            <a href="mailto:mizaelmbarreto@gmail.com">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
