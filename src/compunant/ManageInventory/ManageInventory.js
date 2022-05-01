import React, { useEffect, useState } from 'react';
import ManageInventoryCard from './ManageInventoryCard';

const ManageInventory = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-shelf-86767.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    const itemtelete=(id)=>{

    }
    return (
        <div className='inventory-grid container'>
            {
                product.map(item=><ManageInventoryCard key={item._id} item={item} product={product} areey={setProduct}></ManageInventoryCard>)
            }
            
        </div>
    );
};

export default ManageInventory;