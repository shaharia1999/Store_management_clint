
import React, { useEffect, useState } from 'react';
import Feedback from 'react-bootstrap/esm/Feedback';
import { useParams } from 'react-router-dom';
import './InventoryDetels.css';


const InventoryDetels = () => {
    const [product,setProduct]=useState([]);
    const {id}=useParams();

    async function getAndUpdateProduct(id){
        return fetch(`https://afternoon-shelf-86767.herokuapp.com/product/${id}`)
        
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }

    useEffect( ()=>{
      getAndUpdateProduct(id)
    },[id]);


     const [inventory,setInventory]=useState({});
      
   
        // setInventory(result)
        // console.log(inventory);

      const deliverd=()=>{
        fetch(`https://afternoon-shelf-86767.herokuapp.com/product/reduce/${id}`,{method:"PUT"})
        .then(res=>res.json())
        .then(data=>
            getAndUpdateProduct(id)
            )
      }
      const deliverdIncrease=()=>{
          const inputValue=parseFloat( document.getElementById("increse").value);
        
        
        fetch(`https://afternoon-shelf-86767.herokuapp.com/product/increase/${id}`,{method:"PUT",  headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }, body:`{"amount":${inputValue ||2}}`})
        .then(res=>res.json())
        .then(data=>
            getAndUpdateProduct(id)
            )
            
      }
         
     
    return (
        <div>
            <h1 className='text-center p-5'>Product Deteles</h1>
            <div className='eachitem inventory-ubdate mx-auto'>
            <div className='img'>
                <img src={product?.picture} alt="img" />
            </div>
            <div className='each-deteles '>
                <h3>Name :{product?.name}</h3>
                <h4>Price :{product?.price}</h4>
                <h4> Supliyar :{product?.supliyer}</h4>
                <h4>Quattity :{product?.quantity}</h4>
                <p> Description :{product?.description}</p>
                <button onClick={deliverd}> delivered</button>
                <br />
                <label htmlFor=""> Add Quentity</label>
                <br />
                <br />
                <input type="text" id="increse" />
                <button onClick={deliverdIncrease}>Add product</button>
            </div>
            
           
            
        </div>
            
        </div>
    );
};

export default InventoryDetels;













































