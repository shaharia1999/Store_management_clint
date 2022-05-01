import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {
  
 //onSubmit={fromControl} 
    return (
    
        <div className='mt-5 mb-5 '>
        <h1 className='mt-5 text-center'> Add Item</h1>
        <Form className='w-50 mx-auto'>
    <Form.Group className="mb-3" >
    <Form.Label>Name : </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Worner Email address</Form.Label>
    <Form.Control type="email" placeholder=""  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
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
     Register
  </Button>
  
</Form>
             
            
        </div>
    );
};

export default AddItem;