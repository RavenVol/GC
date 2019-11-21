import React from 'react';

import '../styles/css/app.css';
import '../styles/css/reset.css';

import Header from './Header1';

class App extends React.Component{
  constructor() {
    super();

    this.state={
      menuVisible: false,
      mainMenuText: "",
    }
  }

  мenuShow = (show) => {
    this.setState({menuVisible: show});
  }

  changeMainMenuText = (text) => {
    this.setState({mainMenuText: text});
  }

  render() {
    return (
      <>
        <header>
          <Header 
            lang='en'
            menuVisible={this.state.menuVisible}
            mainMenuText={this.state.mainMenuText}
            мenuShow={this.мenuShow}
            changeMainMenuText={this.changeMainMenuText}
          />
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
