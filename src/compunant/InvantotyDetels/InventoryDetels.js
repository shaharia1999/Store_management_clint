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
    const {id}=useParams();
      const result=product.find(pro=>pro._id ===id);
      const quantity=result?.quantity;
      const deliverd=()=>{
        
         
         
         const url=`https://afternoon-shelf-86767.herokuapp.com/product/${id}`;
       
         fetch(url, {
           method: 'PUT',
           body: JSON.stringify({}),
       headers: {
      'Content-type': 'application/json; charset=UTF-8',
       },
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
         
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