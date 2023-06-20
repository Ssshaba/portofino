import React from 'react';
import Header from './Header';
import Footer from './footer';
import Contacts from './contacts';
import Menu from './menu';

import './index.css';


function App() {
  return (
    <div className='app-container'>
      <Header />
      <Menu />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
