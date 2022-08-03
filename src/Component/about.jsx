import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandFist,faDumbbell} from '@fortawesome/free-solid-svg-icons';
import Slide from 'react-reveal/Slide';
import Footer from './footer';

export default class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      D18:false,
      D20:false,
      D21:false,
      D22:false,
      Age:false,
      Experience:false,
      Movation:false,
      Recherche:false,
      AgeFalse:false,
      ExperienceFalse:false,
      MovationFalse:false,
      RechercheFalse:false};
}
trueAge = () => {
  this.setState({Age:true})
}
trueExperience = () => {
  this.setState({Experience:true})
}
trueMovation = () => {
  this.setState({Movation:true})
}
trueRecherche = () => {
  this.setState({Recherche:true})
}
falseAge = () => {
  this.setState({Age:false})
  this.setState({AgeFalse:true})
  this.trueAge()
}
falseExperience = () => {
  this.setState({Experience:false})
  this.setState({ExperienceFalse:true})
  this.trueExperience()
}
falseMovation = () => {
  this.setState({Movation:false})
  this.setState({MovationFalse:true})
  this.trueMovation()
}
falseRecherche = () => {
  this.setState({Recherche:false})
  this.setState({RechercheFalse:true})
  this.trueRecherche()
}
  render() {
    const state = this.state
    console.log(state);
    return (
      <div className="banana" >

      <section className='aboutSection' style={{backgroundColor: "#ffbb98"}}>
            <h1 style={{fontSize: "40px",display: "flex",justifyContent: "center"}}>About zaimo</h1>
            <article>Yeah §§§§§§
                <span>
                En 2020 je me suis mis a travailler 
                pour la première fois de ma vie en tant que préparateur de commandes 
                J'ai travailler au seins d'une équipe de 10 personnes. 
                Cette expériences m'as permis de faire un point sur ma situation.
                J'ai découvert a cette période le développement informatique.
                <button onClick={() => {this.setState({D18:true})}}>2018</button>
                {state.D18 && <p>🥳 🥳 🥳Sort du bac STMG ! Triomphant ! avec mention Assez bien 🥳 🥳 🥳 </p> }
                
                <button onClick={() => {this.setState({D20:true})}}>2020</button>
                {state.D20 && <p>Dépité par mon echec au BTS (9,78)🥲 + le covid + doute sur mon avenir = 📉</p> }
                
                <button onClick={() => {this.setState({D21:true})}}>2021</button>
                {state.D21 && <p>J'ai rebondit en travaillant 6 mois en Préparateur de commande (Confiance 📈) 
                <br /> Décourvre le développement web et suis étonnamment surpris 🤔 Je tente un parcours et cela me plait ? Oui !</p> }
                
                <button onClick={() => {this.setState({D22:true})}}>2022</button>
                {state.D22 &&  <p>Diplomé (Open Classroom)👨‍🎓, j'ai plusieurs petits projets à mon actif dont je suis fière 
                <br /> je suis à la recherche d'un emploi de dev front end 🖥️ 💻
                </p> }
               
                
                </span>
                
                <span>
                <Slide bottom>
             
             <h2>Me connait-tu vraiment ?</h2>
             {/* -------------------Age-------------------- */}
             <label >Quel age j'ai ? <br />
             <input type="number" placeholder='8 ans, 17 ans, 39 ans, 49 ans ? ' />
             <div className="boutonQuizz">
             <button onClick={ this.falseAge}
             style={{ backgroundColor: this.state.AgeFalse ? "red" : null}}>17 ans</button>
             <button onClick={ this.trueAge} 
             style={{ backgroundColor: this.state.Age ? "rgb(73, 159, 122)" : null}}>22 ans</button>
             <button onClick={ this.falseAge}
             style={{ backgroundColor: this.state.AgeFalse ? "red" : null}}>39 ans</button>
             <button onClick={ this.falseAge}
             style={{ backgroundColor: this.state.AgeFalse ? "red" : null}}>49 ans</button></div>
             {state.Age && <span>🎂 🎂 🎂 </span> }
             </label>
             {/* -------------------experience-------------------- */}
             <label >Depuis combien de temps je code ? <br />
             <input type="number" placeholder='1 an, 2 ans, 5 ans, 10 ans ? ' />
             <div className="boutonQuizz">
             <button onClick={ this.trueExperience} 
             style={{ backgroundColor: this.state.Experience ? "rgb(73, 159, 122)" : null}}>1 ans</button>
             
             <button onClick={ this.falseExperience}
             style={{ backgroundColor: this.state.ExperienceFalse ? "red" : null}}>2 ans</button>
             <button onClick={ this.falseExperience}
             style={{ backgroundColor: this.state.ExperienceFalse ? "red" : null}}>5 ans</button>
             <button onClick={ this.falseExperience}
             style={{ backgroundColor: this.state.ExperienceFalse ? "red" : null}}>10 ans</button></div>
             {state.Experience && <span>👶 👶 👶  </span> }
             </label>
             {/* -------------------motivation-------------------- */}
             <label >Pourquoi je me sens prêt ? <br />
             <input type="number" placeholder="Je connais tout mes lauguages par coeur ? J'aprends vite et suis et j'ai une bonne compréhension globale "/>
              <div className="boutonQuizz">
              <button onClick={ this.falseMovation}
              style={{ backgroundColor: this.state.MovationFalse ? "red" : null}}>J'ai de l'expérience</button>
              <button onClick={ this.trueMovation}
              style={{ backgroundColor: this.state.Movation ? "rgb(73, 159, 122)" : null}}>J'ai soif d'apprendre et d'évoluer</button>
              <button onClick={ this.falseMovation}
              style={{ backgroundColor: this.state.MovationFalse ? "red" : null}}>Il faut bien travailler dans la vie</button>
              <button onClick={ this.trueMovation}
              style={{ backgroundColor: this.state.Movation ? "rgb(73, 159, 122)" : null}}>J'ai réaliser un super site ( celui-ci ) </button></div>
             {state.Movation && <span style={{display:"flex",flexDirection:"row"}}><FontAwesomeIcon icon={faHandFist}/> <FontAwesomeIcon icon={faDumbbell}/></span> }
             </label>
             {/* -------------------recherche-------------------- */}
             <label >Ce que je cherche ? <br />
             <input type="number" placeholder=
             'Un gros salaire ? Améloirer mes compétences ? Une qualité de vie au travail ? '/>
              <div className="boutonQuizz">
              <button onClick={ this.falseRecherche}
              style={{ backgroundColor: this.state.RechercheFalse ? "red" : null}}>Un CDD </button>
              <button onClick={ this.falseRecherche}
              style={{ backgroundColor: this.state.RechercheFalse ? "red" : null}}>Un gros salaire</button>
              <button onClick={ this.trueRecherche}
              style={{ backgroundColor: this.state.Recherche ? "rgb(73, 159, 122)" : null}}>Une entreprise qui peut me faire progresser</button>
              <button onClick={ this.falseRecherche}
              style={{ backgroundColor: this.state.RechercheFalse ? "red" : null}}>Un stage </button></div>
              {state.Recherche ? <span>😅  Et oui j'ai besoin d'apprendre 🕵️‍♀️ encore </span> : null }
             </label>
             
                </Slide>
               
                
               </span> 
               
                
            </article>
         
            
      </section>
      <Footer></Footer>
          {/* <footer>
            <h3>Me contacter ?</h3>
                <FontAwesomeIcon style={{height: "4vh"}} icon={faEnvelope}>
                    <a HREF="mailto:zaimo3869@gmail.com">mail</a>
                </FontAwesomeIcon>
                <h3>Mes réseaux</h3>
                <a href={"https://www.linkedin.com/in/zaim-bouarfa-b81506193/"}>  <svg style={{color:"#0077b5 "}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg></a>
               <a href={"https://github.com/zaimo3869?tab=repositories"}>
               <svg style={{color:"#171515"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
                </a> 
          </footer> */}
            
      </div>
    )
  }
}
