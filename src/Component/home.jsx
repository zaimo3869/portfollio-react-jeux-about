import React, { Component } from 'react'
import logo from '../logo.svg';

import Footer from './footer'
//----------------IMG----------------
import reserviaDesktop from "../img/reserviaDesktop.png";
import ohmyfoodDesktop from "../img/ohmyfoodDesktop.png";
import LachouetteAgence from "../img/LachouetteAgence.png";
import kanap from "../img/kanapDesktop.png";
import piquante from "../img/PiquanteDesktop.png";
import groupomania from "../img/groupomania.png";

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
        <nav>  
            <img src={logo} className="App-logo" alt="logo" />
            <a href={"https://cvzaimbouarfa.netlify.app/"}><button>Portfolio</button></a>
            
            <button onClick={this.redirectProj}>Projets</button>
            <button onClick={this.redirect}>About</button>
        </nav>
        
            <section className='containLez'>
                <div className='leZ'><p>Passionné depuis maintenant 1 an et demi par ce domaine 
                    J'ai beaucoup développé mon autonomie ces derniers mois grâce à mon parcours au sein de openclassroom.
                    Pendant cette formation j'ai appris plusieurs language. 
                    J'ai grâce à ces compétences une bonne vue d'ensemble des technologies du web et peut comprendre facilement les attentes d'un projet (front/back/seo).
                    
                    </p>

                    <div className='containImg'>
                        <div 
                        style={{display: "flex",margin:"5px",height:"10%",justifyContent: "center"}}>
                        {/* <p>J'ai réalisé une maquette et intégrées celle-ci via HTML et CSS. 
                        J'ai appris ce qu'était le seo et les méthodes qu'ils existait</p>  */}

                        <img style={{margin: "2%"}} src={reserviaDesktop} alt="ohmyfoodMobile" />
                        </div>
                        <div 
                        style={{display: "flex",margin:"5px",height:"10%",justifyContent: "center"}}>
                        <img style={{margin: "2%"}} src={ohmyfoodDesktop} alt="ohmyfoodMobile" />
                        </div>
                        <div 
                        style={{display: "flex",margin:"5px",justifyContent: "center",height:"20vh"}}> 
                         {/* <p>J'ai découvert JavaScript en créant des interactions avec un back-end.</p>  */}
                        <img style={{margin: "2%"}} src={kanap} alt="kanap" />
                        </div>
                        <div 
                        style={{display: "flex",margin:"5px",height:"10%",justifyContent: "center"}}>
                         {/* <p>J'ai créé une API Rest qui devait s’implémenter avec le front-end. (node.js)</p>  */}
                        <img style={{margin: "2%"}} src={piquante} alt="ohmyfoodMobile" />
                        </div>
                        <div 
                        style={{display: "flex",margin:"5px",height:"10%",justifyContent: "center"}}>
                            {/* <p>Et pour finir ma formation j'ai créé le front-end et le back-end d’un réseau social d'entreprise.</p>  */}
                        <img style={{ margin: "2%"}} src={groupomania} alt="ohmyfoodMobile" />
                        </div>
                        </div>

                        
                </div>
            </section>
            <Footer></Footer>
      </div>
    )
  }
}
