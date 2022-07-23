import React, { Component } from 'react'
import logo from '../logo.svg';
import Projet from './projet';
import Counter from './compteur';

export default class home extends Component {
    redirect = () => {
        document.location.pathname='/about'
    }
    redirectProj = () => {
        document.location.pathname='/projets'
    }
  render() {
    return (
        <div className="App">
        <nav>  <img src={logo} className="App-logo" alt="logo" />
            <button>Réseaux</button>
            <button onClick={this.redirectProj}>Projets</button>
            <button onClick={this.redirect}>About</button>
        </nav>
        <Counter></Counter>
            <section>
                <Projet></Projet>
                <div className='leZ'>
                <h1 style={{margin:"0px"}}> Bouarfa Zaim </h1>
                    Le Z 
                </div>
                <div className='elZ'>
                    bannana
                </div>
            </section>
      </div>
    )
  }
}
