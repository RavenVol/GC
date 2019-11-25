import React from 'react';

import '../styles/css/app.css';
import '../styles/css/reset.css';

import MainMenu from './MainMenu';
import LanguageBar from './LanguageBar';
import Footer from './Footer';
import Contacts from './Contacts';
import { lang_statistics } from '../data/lang';

class App extends React.Component{
  constructor() {
    super();

    this.state={
      lang: 'ru',
      menuVisible: false,
      mainMenuText: "",
      statisticMessages: {},
    }
  }

  componentDidMount = () => {
    this.setState({statisticMessages: lang_statistics })
    this.prepairStatisticMessages();
  }

  prepairStatisticMessages = () => {
    const statisticMessages = lang_statistics;
    const delay = statisticMessages[this.state.lang].length * 2300 + 300;

    setInterval(() => {
      this.setState({ statisticMessages: {} }); 
      this.setState({ statisticMessages })}, delay);
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

        <main style={{width: "100%"}}>
          <Contacts lang={this.state.lang}/>
        </main>

        <footer style={{position: "relative"}}>
          <Footer
            lang={this.state.lang}
            messages={this.state.statisticMessages}
          />
        </footer>
      </>
    );
  }
}

export default App;
