import React from 'react'
import '../navigation/navigation.css'

function Navigation(){
    return(
        <div id="navigation_container">
            <div id="navigation">
           <nav id="nav_div"> 
               <a className="navItem">Mobile</a> | 
               <a className="navItem">Laptop</a> |
               <a className="navItem">Headphone</a> 
           </nav>
        </div>
    
        </div>
        
    )
}

export default Navigation