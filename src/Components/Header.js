import React from 'react'
import Navbar from './Navbar/Navbar'

const Header = () => {
    return (
        <div className="banner">
            <Navbar />
           <div className="banner_content">
           <div className="container">
               <div className="row">
                <div className="col col-sm-12 banner_text">
                    <h3>Pizza Delivery</h3>
                    <h1>MAESTRO PIZZINI</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti blanditiis quaerat tempora rem, 
                    obcaecati, error exercitationem et sunt facilis, natus ex est odit quo soluta quam sequi voluptate fugit illum.
                    </p>
                    <div className="banner_btn">
                        <a href="#" className="btn btn-smart">DELIVERY NOW</a>
                    </div>
                </div>
               </div>
                
            </div>
           </div>
        </div>
    )
}

export default Header;
