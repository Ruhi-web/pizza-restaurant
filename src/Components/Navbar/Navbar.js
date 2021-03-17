import React, { Component } from 'react';
import { MenuItems } from '../data/MenuItems';

class Navbar extends Component {
 state = { clicked: false }

 handleClick = ()=>{
     this.setState({ clicked: !this.state.clicked})
 }
    render() {
        return (
        <nav>
        <div className="container">
            <div className="nav_text">
                <div className="logo">
                    <img src="../img/logo.png" alt="logo" />
                </div>
                <div className="menu_icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>
                </div>
               
                    <ul className={this.state.clicked ? 'menu active' : 'menu'}>
        
                        {MenuItems.map((item, index)=>{ 
                            return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                            );
                        })}
                    </ul>
                
            </div>
        </div>
    
            
        </nav>
    );
    }

};

export default Navbar;
