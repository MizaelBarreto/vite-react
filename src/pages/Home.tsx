import React from 'react';
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

export default Home;
