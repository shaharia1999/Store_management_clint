import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Eachitem.css'

const Eachproduct = ({item},{productF}) => {
    const {name,price, picture,description,supliyer,quantity,_id}=item;
     const navigate=useNavigate()
    const productButton=()=>{
       navigate(`/inventory/${_id}`);

    }
    
    return (
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
                <button onClick={productButton}>Update</button>
            </div>
            
           
            
        </div>
    );
};

export default Eachproduct;