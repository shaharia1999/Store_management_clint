import React, { useState } from 'react';

const ManageInventoryCard = (props) =>{
    const items= props.item;
    const products=props.product;
    const setData=props.areey;
     console.log(setData)
    // console.log(items);
    // const products=product;
    // console.log(products);
    const {name,price, picture,description,supliyer,quantity,_id}=items;
    //   const [data,setData]=useState()
        const deletes=(_id)=>{
            const url=`http://localhost:5000/product/${_id}`
            console.log(url)
            const prosit=window.confirm("Are You sure You want to Delete the Id")
            if(prosit){
            fetch(url,{
            method: 'DELETE',
                })
           
          .then(res=>res.json())
          .then(datas=>{
            const remaining=products.filter(d=>d._id !==_id);
            setData(remaining);
                  
          })
        }
    }
        
    
    
    return (
        <div>
            <div className='eachitem'>
            <div className='img'>
                <img src={picture} alt="img" />
            </div>
            <div className='each-deteles'>
                <h3>Name :{name}</h3>
                <h4>Price :{price}</h4>
                <h4> Supliyar :{supliyer}</h4>
                <h4>Quattity :{quantity}</h4>
                <p> Description :{description}</p>
                <button onClick={()=>deletes(_id)}>Delete</button>
            </div>
            
           
            
        </div>
        
            
        </div>
    );
};

export default ManageInventoryCard;