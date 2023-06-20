import React from 'react';
import Header from './Header';
import Footer from './footer';
import Contacts from './contacts';

import './index.css';


function App() {
  return (
    <div className='app-container'>
      <Header />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
