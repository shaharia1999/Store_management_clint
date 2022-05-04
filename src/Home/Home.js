import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contract from './Contract/Contract';
import Inventory from './Inventory/Inventory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <About/>
            <Contract/>
            
        </div>
    );
};

export default Home;