import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center py-5'>Blog</h1>
            <h3> Differences Between JavaScript vs Node JS??</h3>
             <h6>Ans</h6>
             <b>Javascript :</b>
             <li>	JavaScript is a programming language. It is running in any web browser with a proper browser engine.</li>
             <li>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</li>
             <li>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</li>
             <b>Node js :</b>
             <li>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</li>
             <li>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</li>
             <li>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</li>

             <h1> Differences Between  SQL vs NoSQL: </h1>
             <h6>Ans</h6>
             <b>sql</b>
             <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
             <li>These databases have fixed or static or predefined schema</li>
             <li>These databases are not suited for hierarchical data storage.</li>
             <b>Nosql</b>
             <li>Non-relational or distributed database system.</li>
             <li>They have dynamic schema</li>
             <li>These databases are best suited for hierarchical data storage.</li>

             <h1></h1>
             <p>Is a useful standard becoming more prevalent, because it sends information that can be verified and trusted with a digital signature. In their most basic form, JWTs allow you to sign information (referred to as claims) with a signature and can be verified at a later time with a secret signing key. The spec is also designed with more advanced features that help against man-in-the-middle and replay attacks. JWT contains so we can clearly understand why these best practices are important. In its most simple form, JWT has three distinct parts that are URL encoded for transport:</p>
             

            
        </div>
    );
};

export default Blog;