import React from 'react';

const MyitemSngle = ({item}) => {
    const {name,price, picture,description,supliyer,quantity,_id,email}=item;

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
            <p> Email:{email}</p>
            {/* <button onClick={()=>deletes(_id)}>Delete</button> */}
        </div>
        </div>
    );
};

export default MyitemSngle;