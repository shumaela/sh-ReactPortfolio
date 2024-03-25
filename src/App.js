import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/style.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
