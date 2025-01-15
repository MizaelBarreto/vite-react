import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="intro">Hi, my name is</h1>

      {/* Main Name */}
      <h2 className="name">Mizael Barreto.</h2>

      {/* Subtitle */}
      <h3 className="subtitle">I transform digital identities.</h3>

      {/* Description */}
      <p className="description">
        I am a full-stack developer specialized in building exceptional digital experiences. 
        I have expertise in frameworks such as Node, React, Vue, Vite, Laravel, and .NET, programming 
        in multiple programming languages.
      </p>

      {/* Botão */}
      <a href="/Curriculum Mizael Barreto 2025 (1).pdf" className="resume-button">Download my resume</a>
  
    </div>
  );
};

export default Home;

