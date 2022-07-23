
import './App.css';
import Home from './Component/home';
import About from './Component/about';
import Projet from './Component/projet';
import Price from './Component/price';

import { Routes,Route,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path='/home' exact element={ <Home></Home>}></Route>
      <Route path='/projets' exact element={ <Projet></Projet>}></Route>
      <Route path='/about'exact element={ <About> </About>}></Route>
      <Route path='/price'exact element={ <Price> </Price>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
