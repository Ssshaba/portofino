import React from 'react';
import Header from './Header';
import Footer from './footer';
import Contacts from './contacts';
import Menu from './menu';
import About from './about';

import './index.css';


function App() {
  return (
    <div className='app-container'>
      <Header />
      <About />
      <Menu />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
