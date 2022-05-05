import React, { useEffect, useState } from 'react';
import './Myitem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyitemSngle from './MyitemSngle';

const Myitem = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-shelf-86767.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    const [user, loading, error] = useAuthState(auth);
    const email=user?.email;
  console.log(user?.email)
  const myproduct=product.filter(mypro=>mypro.email ===email)
  console.log(myproduct);
    return (
        <div className=''>
            <div className="my-item">
            {
                myproduct.map(item=><MyitemSngle key={item.key} item={item}></MyitemSngle>)
               
            }
            </div>
            
        </div>
    );
};

export default Myitem;