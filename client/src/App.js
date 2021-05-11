import React from 'react';
import './style.scss';
import { Home, About, Projects, Contact } from './screens';
import { Navbar, FloatNav, Footer, Card } from './components';


export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Card />
      </div>
    )
  }
}

// <Navbar />
// <Home />
// <About />
// <Projects />
// <Contact />
// <Footer />
