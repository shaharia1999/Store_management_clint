import React from 'react';
import imgabout from '../../images/1280x720-dddf.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container m-5 '>
            <h1 className='text-center about-title'> About-Us</h1>
            <div className='about py-5'>
            <div >
                <img src={imgabout} alt="" />
            </div>
            <div>
                <h2>We are Collect different Brand Product</h2>
                <p>To determine the marketing potential of an indoor planter product, researchers applied a variety of research methods: a review secondary research, trade publications and sales materials; retail audits; in-store interviews; consumer and trade member interviews; and telephone interviews with retail buyers and distributors.</p>
            </div>
            </div>
            
        </div>
    );
};

export default About;