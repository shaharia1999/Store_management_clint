
import { Route, Routes } from 'react-router-dom';
import './App.css';
import InventoryDetels from './compunant/InvantotyDetels/InventoryDetels';
import Navber from './compunant/Navber/Navber';
import Home from './Home/Home';
// import Home from './Home/Home';
function App() {
  return (
    <div >
     <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/inventory/:id' element={<InventoryDetels/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
