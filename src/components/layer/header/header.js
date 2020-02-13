import React from 'react'
import {HashRouter, Link} from 'react-router-dom'
import '../header/header.css'
import Navigation from '../header/navigation/navigation'


class Header extends React.Component{
   
    
    render(){
        return(
           
            <HashRouter>
                
                <header >
                   <div id="header_container">
                      
                        <Link to="/"><div id = "logo">Mk Store</div></Link>
                        <div id="search_div">
                            <input id="search_box" type="text" placeholder="Search here"/> 
                            <button id = "search_button">Search</button>          
                        </div>
                                              
                  </div>
                </header>
                {/* <Navigation /> */}
            </HashRouter>
            )

    }
    
}

export default Header