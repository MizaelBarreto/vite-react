/* import React from 'react'; // Importa a biblioteca React
import './index.css'; // Importa o arquivo de estilos CSS
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa componentes do react-router-dom para roteamento

function App() {
    return (
        // BrowserRouter é um componente que envolve toda a aplicação para habilitar o roteamento
        <BrowserRouter>
            {/* Routes é um contêiner para os componentes Route *///}
         /*   <Routes>
                {/* Route define uma rota específica. path="/" define a rota raiz e element define o componente a ser renderizado *///}
          /*      <Route path="/" element={<div><a>ola mundo</a></div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;  Exporta o componente App como padrão    */
/*import React from 'react';
import Home from './pages/Home';

const App: React.FC = () => (
  <div className="App">
    <Home />
  </div>
);

export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
// Importe as outras páginas (Experience, Work, Contact)

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
        {/* Adicione as rotas para Experience, Work, Contact */}
      </Routes>
    </Router>
  );
};

export default App;
