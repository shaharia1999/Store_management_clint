
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './compunant/AddItem/AddItem';
import InventoryDetels from './compunant/InvantotyDetels/InventoryDetels';
import ManageInventory from './compunant/ManageInventory/ManageInventory';
import Navber from './compunant/Navber/Navber';
import RequirteAuth from './compunant/RequreAuth/RequirteAuth';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './SingUp/Register';
// import Home from './Home/Home';
function App() {
  return (
    <div >
     <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/inventory/:id' element={<RequirteAuth>  <InventoryDetels/></RequirteAuth>}></Route>
       <Route path="/manageItem" element={<ManageInventory/>}></Route>
       <Route path="/addItems" element={<AddItem></AddItem>}></Route>
       <Route path="/singIn" element={<Register/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
