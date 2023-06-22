import React from 'react';
import Header from './Header';
import Name from './name';
import Footer from './footer';
import Contacts from './contacts';
import Menu from './menu';
import About from './about';

import './index.css';


function App() {
  return (
    <div className='app-container'>

      <div className='content'>
        <Header />
        <div style={{ padding: '17rem  0 0 0' }}>
          <Name />
        </div>

        <div style={{ padding: '27rem  0 0 0' }}>
          <About />
        </div>

        <div style={{ padding: '15rem  0 0 0' }}>
          <Menu />
        </div>

        <div style={{ padding: '5rem  0 6rem 0' }}>
          <Contacts />
        </div>
        <div style={{ padding: ' 0' }}>
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;
