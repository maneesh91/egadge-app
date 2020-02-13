import React from 'react'
import '../footer/footer.css'

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

class Footer extends React.Component{
    render(){
        return(
            <div id="footer">
                <div id="copyright_div">
                    <h4 id="copywrite_text">Copyright @2020 All right reserverd </h4>
                </div>
                <div id ="contact">
                    <div><p id="contactName">Get in touch </p></div>
                    <div id ="socialLink">
                        <h4 className="socialName"><FaTwitter /></h4>                     
                        <h4 className="socialName"><FaFacebook/></h4>
                        <h4 className="socialName"><FaInstagram/></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;