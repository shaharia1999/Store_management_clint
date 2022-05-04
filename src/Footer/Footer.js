
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer pt-4'>
            <div className='fitness'>
            <div >
                   <h3> WareHouse</h3>
                     <p>© Warehouse Mobile 2022 – 2022 all rights reserved</p>
            </div>
            <div className='sucess'>
                <h3> Sucess</h3>
                <li>Help & support</li>
                <li>Terms & conditions</li>
                <li>Privacy policy</li>
                <li>Coverage</li>
            </div>
            <div className='contract'>
                <h4>Contract-me</h4>
                <h6> Phone : ++39849038</h6>
                <h6>Email :adeptshaharia@gmail.com</h6>
                
            </div>
            </div>
            <div>
                <p className='text-center text-white py-3 bg-dark'>@Copy Right By Shaharia 2022</p>
              
           
                
            </div>
        </div>
    );
};

export default Footer;