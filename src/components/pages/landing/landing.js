import React from 'react'
import mobile from '../landing/oneplus7T.jpg';
import '../landing/landing.css'



  


class ProductLanding extends React.Component{
    

    render(){
        return(
            <div>
                <div id="landing_container">
                    <div id="predetail">
                        <div id="leftColumn">
                            <img id="productImage" src={mobile}/>
                        </div>
                        <div id="rightColumn">
                            <div id="title-section">
                                <h2>OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)</h2>
                            </div>
                            <div id="productCompany">
                                <h4>by OnePlus</h4>
                            </div>
                           
                            <div id="productReview"></div>
                            <div id="product_rate">                              
                                    <div id="price">Rs. 70000</div>
                                    <div id="buydiv"><button className="btn_buy">Buy from Amazon</button></div>                              
                               
                            </div>
                            <div id="specification">
                                <div><h3>Specification</h3></div>
                                <div>
                                    <table>
                                        <tbody>
                                           
                                            <tr>
                                                <td>OS</td>
                                                <td>Andoroid</td>
                                            </tr>
                                            <tr>
                                                <td>RAM</td>
                                                <td>8 GB</td>
                                            </tr>
                                            <tr>
                                                <td>Camera</td>
                                                <td>48+12+16 MP triple rear camere | telephoto lens</td>
                                            </tr>
                                            <tr>
                                                <td>Battery</td>
                                                <td>3800mAH lithium-ion Battery</td>
                                            </tr>
                                            <tr>
                                                <td>Display</td>
                                                <td>16.63 cm (6.55 inch) 90Hz Fluid AMOLED | 2400 * 1080 pixcels resolution | 402 ppi pixel density</td>
                                            </tr>
                                            <tr>
                                                <td>Storage</td>
                                                <td>8 GB RAM | 256 Internal</td>
                                            </tr>
                                            <tr>
                                                <td>SIM</td>
                                                <td>Dual SIM(nano + nano) | Dual -standby(4G+4G)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>
           

        )
        
    }
}

export default ProductLanding