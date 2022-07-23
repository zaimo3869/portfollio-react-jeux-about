import React, { useState } from 'react';
// import Imc from './imc'
import Price from './price';

function projet() {

  return (
    <div className="App">
        <section>
            <div className='leZ'>
            <h1 style={{margin:"0px",display:"flex",justifyContent:"center"}}> Bouarfa Zaim </h1>
            <Price></Price>
            </div>
            <div className='elZ'>
                <article>
                    {/* <div><Imc></Imc></div> */}
                    <div> Banana
                        <a href='https://cvzaimbouarfa.netlify.app'>https://cvzaimbouarfa.netlify.app</a>
                    </div>
                </article>
            </div>
        </section>
  </div>
  )
}

export default projet