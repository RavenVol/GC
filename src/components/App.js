import React from 'react';

import '../styles/css/app.css';
import '../styles/css/reset.css';

import Header from './Header1';

class App extends React.Component{
  constructor() {
    super();

    this.state={
      
    }
  }

  render() {
    return (
      <>
        <header>
          <Header lang='ru'/>
        </header>
        
        <main>
          
        </main>

        <footer>

        </footer>
      </>
    );
  }
}

export default App;
