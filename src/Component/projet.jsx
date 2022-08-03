import React from 'react';
// import Imc from './imc'
import Price from './price';
import Footer from './footer'

function projet() {
   
  return (
    <div className="App">
        <h1 style=
        {{margin:"0px",
        display:"flex",
        justifyContent:"center",
        backgroundColor:"rgb(70, 69, 69)",
        color:"white"}}> Bouarfa Zaim 
         </h1>
        <section>
            <div className='leZ'>
            
            <Price></Price>
            </div>
            
        </section>
        <Footer></Footer>
  </div>
  )
}

export default projet