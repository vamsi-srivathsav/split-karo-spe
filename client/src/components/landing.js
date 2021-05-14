import React from 'react';
import '../styles/landing.css'
import  Header  from './Header';
export const Landing = ()=>{
    return (
        <div className = "landing ">
           <Header/>

            
            <main >
                <div className = "landing-heading">

                    
                <h1 className = "landing-header">Split expenses with friends.</h1>
                <p className = "landing-desc"><strong>Share</strong> bills and  <strong>Make sure</strong> everyone gets paid back. </p>
                <img className = "landing-big" src={require('../images/moneyShare.jpg')} alt=""/>   
                </div>
                
                <div className = "landing-feature">
                 
                <div className = "landing-content">
                <h1  >Sharing expenses has </h1><h1>never been easier !!!!!</h1> 
                 
                 

                <a href="http://localhost:3000/signup">   <button className = "landing-button">  Get Started</button></a>
                 
                </div>
                </div> 
            </main>
        </div>
    )
}
// goes in line 20
//<div>   
//<img className = "landing-img" src={require('../images/splitwise.png')} alt=""/>   
//</div>
//goes in line 13
//<img align="middle" className = "landing-logo" src={require('../images/shareKaro.png')} alt=""/> 