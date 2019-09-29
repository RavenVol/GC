import React from 'react';
import { Switch, Router } from 'react-router-dom';

import Header from './Header';

import '../styles/normalize.css';
import '../styles/app.css';

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        Main Section
      </main>
      <footer>
        Footer Section
      </footer>
    </>
  );
}

export default App;
