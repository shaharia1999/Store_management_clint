
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './compunant/AddItem/AddItem';
import InventoryDetels from './compunant/InvantotyDetels/InventoryDetels';
import ManageInventory from './compunant/ManageInventory/ManageInventory';
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
       <Route path="/manageItem" element={<ManageInventory/>}></Route>
       <Route path="addItems" element={<AddItem></AddItem>}></Route>
     </Routes>
    </div>
  );
}

export default App;
