import React from 'react';

import '../styles/css/app.css';
import '../styles/css/reset.css';

import MainMenu from './MainMenu';
import LanguageBar from './LanguageBar';

class App extends React.Component{
  constructor() {
    super();

    this.state={
      lang: 'ru',
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

  changeLanguage = (lang) => {
    this.setState({lang});
  }

  render() {
    return (
      <>
        <header className="siteHeader">
          <LanguageBar
            lang={this.state.lang}
            changeLanguage={this.changeLanguage}
          />
          
          <MainMenu 
            lang={this.state.lang}
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
