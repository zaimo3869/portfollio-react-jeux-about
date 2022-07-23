 

 
 import React, { useState,useEffect} from 'react';

 const Counter = () => {
   // Déclare une nouvelle variable d'état, que l'on va appeler « count »
   const [count, setCount] = useState(0);
   const [reveal,setReveal] = useState(Math.floor(Math.random()*( 10 - 1 + 1) + 1 ))
   
   if (count === reveal) {
    alert( " vous avez trouvez : "+ reveal)
   }
   
   return (
    <div onClick={() => setReveal(reveal)}>
      <h2>Cliquez le nombre de fois qu'il faut et découvrez le reste ...</h2>
       <p>Vous avez cliqué {count} fois</p>
       <button style={{border:"solid"}} onClick={() => setCount(count + 1) }>
         Cliquez ici
       </button>
       <div>le reveal est de : {reveal}</div>
     </div>
   )
     
 }

 export default Counter

