import './App.css';
import Cartlist from './components/cartlist/Cartlist';
import Checkout from './components/checkoutpage/Checkout';
import Nav from './components/nav/Nav';
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
import Prod from './components/prod/Prod';
import Complete from './components/complete/Complete';


function App() {
  return (
      <div className="App">
      <div className="AppContainer">  
        <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='/cartitem' element={<Cartlist />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/complete' element={<Complete />} />
        </Routes>
    </div>
    {/* <Prod /> */}
  
    
     </div>
  
  );
}

export default App;
