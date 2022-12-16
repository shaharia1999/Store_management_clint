import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventoryCard from './ManageInventoryCard';

const ManageInventory = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://randerstore.onrender.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    const itemtelete=(id)=>{

    }
    return (
        <div className=''>
            <div className='inventory-grid container'>

           
            {
                product.map(item=><ManageInventoryCard key={item._id} item={item} product={product} areey={setProduct}></ManageInventoryCard>)
            }
             </div>
             <div className='manage-button'>
                <button><Link to="/addItems">Add Items</Link></button>
            </div>
            
        </div>
    );
};

export default ManageInventory;