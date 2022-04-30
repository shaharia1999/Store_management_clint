import React, { useEffect, useState } from 'react';
import Eachproduct from '../Eachproduct/Eachproduct';
import './Inventoty.css';


const Inventory = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-shelf-86767.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
     const newproduct=product.slice(0,6);
     
    return (
        <div  className='container-inventory'>
            <h1 className='text-center py-5'>Inventory {newproduct.length}</h1>
            <div className='inventory-grid container'>
            {
               newproduct.map(item=><Eachproduct key={item._id} item={item}></Eachproduct>)
            }
            </div>
            
        </div>
    );
};

export default Inventory;