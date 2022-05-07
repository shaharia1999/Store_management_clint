import React from 'react';

const MyitemSngle = (props) => {
    const item=props.item;
    const product=props.pro;
    console.log(product);
    const setData=props.setData;
    
    const {name,price, picture,description,supliyer,quantity,_id,email}=item;
    const deletes=(_id)=>{
        const url=`https://afternoon-shelf-86767.herokuapp.com/product/${_id}`
        console.log(url)
        const prosit=window.confirm("Are You sure You want to Delete the Id")
        if(prosit){
        fetch(url,{
        method: 'DELETE',
            })
       
      .then(res=>res.json())
      .then(datas=>{
        const remaining=product.filter(d=>d._id !==_id);
        console.log(remaining);
        setData(remaining);
              
      })
    }
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
            <p className='text-primary'> Email: {email}</p>
            <button onClick={()=>deletes(_id)}>Delete</button>
        </div>
        </div>
    );
};

export default MyitemSngle;