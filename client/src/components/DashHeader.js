import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import '../styles/dashHeader.css'
 const DashHeader = (props)=>{
    
    return (
        <nav className = "DashboardNav fixed-top">
        <img align="left" className = "landing-logo" src={require('../images/black1.png')} alt=""/>
        <NavLink to = "/Dashboard"><h3 className = "landing-name">S P L I T - K A R O O O O O</h3></NavLink> 
        <img align="center" className = "landing-logo" src={require('../images/shareKaro.png')} alt=""/>
     
     <div className = "Dashfloat">
     <NavLink to = "/login"><button className = "logoutbtn" onClick = {()=>{
       localStorage.removeItem('jwtToken');
     }
     }>Log Out</button></NavLink>
      
      {console.log("inside DashHeader")}
     
      <img className = "profile" src={require('../images/person-profile.png')} alt="" srcset=""/>
      <label htmlFor="">{props.user.username}</label>
      
     </div>
        

    </nav>
    )
}

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(DashHeader);

