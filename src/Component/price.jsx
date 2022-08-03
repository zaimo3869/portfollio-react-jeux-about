import React, { Component } from 'react'
import Counter from './compteur';

export class price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plus:false,
      moins:false,
      Bravo:false,
      hide:false,
      Generate:'',
      value: ''};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();
}


price = () => {

  if(Number(this.state.value) === Number(this.state.Generate)){
    this.setState({Bravo:true})
    this.setState({plus:false})
    this.setState({moins:false})
  }
  if(Number(this.state.value) < Number(this.state.Generate)){
    this.setState({Bravo:false})
    this.setState({plus:true})
    this.setState({moins:false})
  }
  if(Number(this.state.value) > Number(this.state.Generate)){
    this.setState({Bravo:false})
    this.setState({moins:true})
    this.setState({plus:false})
  }


}

numberGenerator = () => {
  this.setState({hide:true})
  const generateNumber = Math.floor(Math.random()*( 100 - 1 + 1) + 1 )
  console.log(generateNumber);
  this.setState({Generate:generateNumber})
return generateNumber
}

  render() {
    console.log(this.state);
    const priceValue  = this.state
    return (
      <div className='PriceDiv'>
      <div className='containerMarquee'>
        <div className='marquee'>Clique sur jouer </div>
      </div>
      <h1>Quelle est le juste Prix ???</h1>
      
      <button onClick={this.numberGenerator}>Jouer</button>
      
      {priceValue.plus && <span>👆 C'est plus </span> }
      {priceValue.Bravo &&  <span>🔥🔥🔥 Bravo🔥🔥🔥</span> }
      {priceValue.hide &&  
      <span>
        <p>Le prix est entre 1 et 100 </p>
        <form onSubmit={this.handleSubmit}>
      <input name='price' value={this.state.price} onChange={this.handleChange} type="number" placeholder='Ecris ton prix ' />
      <button onClick={() => this.price()}> Valider</button>
     
      </form> {priceValue.moins &&  <span>👇 C'est moins </span> }
      </span> }
<Counter></Counter>

      </div>
    )
  }
}

export default price