import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetels.css';


const InventoryDetels = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-shelf-86767.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    // const [inventory,setInventory]=useState({})
       const {id}=useParams();
      const result=product.find(pro=>pro._id ===id);
        // setInventory(result)
        // console.log(inventory);
      const deliverd=()=>{
        const Remaining = parseFloat( result?.quantity-1);


      }
         
     
    return (
        <div>
            <h1 className='text-center p-5'>Product Deteles</h1>
            <div className='eachitem inventory-ubdate mx-auto'>
            <div className='img'>
                <img src={result?.picture} alt="img" />
            </div>
            <div className='each-deteles '>
                <h3>Name :{result?.name}</h3>
                <h4>Price :{result?.price}</h4>
                <h4> Supliyar :{result?.supliyer}</h4>
                <h4>Quattity :{result?.quantity}</h4>
                <p> Description :{result?.description}</p>
                <button onClick={deliverd}> delivered</button>
            </div>
            
           
            
        </div>
            
        </div>
    );
};

export default InventoryDetels;