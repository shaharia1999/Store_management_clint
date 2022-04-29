import React from 'react';
import './Navber.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navber = () => {
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div >
        <Link
          style={{ color: match ? "#f43530" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
     
      </div>
    );
  }
  return (
    <div className='header'>
    <Navbar bg="black" expand="lg">
<Container fluid>
<h1 ><Link className='text-white text-decoration-none' to="/"><span className='text-danger'>W</span>are<span className='text-danger'>h</span>ouse</Link></h1> 
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav
className="me-auto my-2 my-lg-0"
style={{ maxHeight: '100px' }}
navbarScroll
>

</Nav>
<div className='navber-item'>
    <li><CustomLink to='/'>Home</CustomLink></li>
    <li><CustomLink to='/manageItem'>Manage Items</CustomLink></li> 
    <li><CustomLink to='/addItems'>Add items</CustomLink></li> 
    <li><CustomLink  to='/home' >Sing in</CustomLink></li>
    <li><CustomLink to='login'>Sing Out</CustomLink></li> 
</div>

</Navbar.Collapse>
</Container>
</Navbar>
    
</div>
  )}

export default Navber;