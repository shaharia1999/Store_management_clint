import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { signOut } from 'firebase/auth';


const AddItem = () => {
  const notify = () => toast("Product add sucess full!");
   const handleSubmit=(event)=>{
    event.preventDefault()
    const name=event.target[0].value;
     const email=event.target[1].value;
    
    const price=event.target[2].value;
    const quantity=event.target[3].value;
    const supliyer=event.target[4].value;
    const description=event.target[5].value;
    const picture=event.target[6].value;
   

    const datas={name,email,price,quantity, supliyer,description,picture};
    console.log(datas);
    // const newAreey=[...data,datas];
    // setData(newAreey);
  

    fetch('https://afternoon-shelf-86767.herokuapp.com/product', {
  method: 'POST',
  body: JSON.stringify(datas
  ),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  notify();

    
 
}
const [user, loading, error] = useAuthState(auth);
console.log(user?.email)
//   console.log(user);
//   const navigate=useNavigate();
//   const singout=()=>{
//     signOut(auth).than(()=>{
//       navigate('/login')

//     })
//     .catch((error) => {
//       // An error happened.
//     });

//    }
  
 //onSubmit={fromControl} 
    return (
          
        <div className='mt-5 mb-5 '>
          <ToastContainer></ToastContainer>
        <h1 className='mt-5 text-center'> Add Item</h1>
        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
    <Form.Group className="mb-3" >
    <Form.Label>Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Worner Email address</Form.Label>
    <Form.Control type="email" placeholder="" value={user?.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Price" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>quantity</Form.Label>
    <Form.Control type="text" placeholder="Price" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Supliyer</Form.Label>
    <Form.Control type="text" placeholder="Price" />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <label htmlFor="">description</label><br />
      <textarea name="" id="" cols="50" rows="4"></textarea>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Photo </Form.Label>
    <Form.Control type="text" placeholder="Url" />
  </Form.Group>
 
  <Button variant="danger" type="submit">
      Add Item
  </Button>
  
</Form>
             
            
        </div>
    );
};

export default AddItem;