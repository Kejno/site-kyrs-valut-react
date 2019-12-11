import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header.js';
import Rate from './Rate/Rate.js';
import Contacts from './Contacts/Contacts.js';
import Exchange from './Exchange/Exchange.js';
import Other from './Other/Other.js';

import Footer from './Footer/Footer.js';
import Guarantees from './Guarantees/Guarantees.js';
import Terms from './Terms/Terms.js';
import Agreement from './Agreement/Agreement.js';
import About from './About/About.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: localStorage.getItem('display'),

    }
  }

  okwell = () => {

    localStorage.setItem('display', 'none');
    this.setState({ display: localStorage.getItem('display') });

  }

  render() {


    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/exchange" component={Exchange} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/guarantees" component={Guarantees} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/agreement" component={Agreement} />
                <Route exact path="/about" component={About} />
                <Route component={Other} />
              </Switch>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well" style={{ display: this.state.display }}>На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
                частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm" onClick={this.okwell}>OK</button></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
