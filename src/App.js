import React from 'react';

//Style
import './App.css';

//Components
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Chosse from './Components/Chosse';
import Footer from './Components/Footer';
import Baner from './Components/Baner';
import Categori from './Components/Categori';
import Haraji from './Components/Haraji';

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Header />
      <Baner />
      <Chosse />
      <Categori />
      <Haraji />
      <Footer />

    </div>
  );
};

export default App;