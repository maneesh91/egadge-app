import React from 'react'
import {Link} from 'react-router-dom'
import mobile from '../itemList/oneplus7T.jpg'
import '../itemList/itemList.css'

class ItemList extends React.Component{
   
    render(){

        const mystyle = {
            width:'300px',
            pxheight:'500px'
        };
        return(
            <div id="item_container">
                
                {/* <div id="item_div">
                    <div className="product_image_div" > 
                       <Link to="/landing"><img className="product_image" src={mobile} alt="mobile"/></Link>

                    </div>
                    <div className="product_body">
                        <Link to="/landing"><h3 className="product_name" >
                            Samsung phone
                        </h3></Link>
                        <h4 className="product_price">1000 Rs.</h4>
                        <div className="product_rating">
                            <i>****</i>
                        </div>
                        <div className="product_button">                          
                            <button className="buy_now">Buy Now</button>
                        </div>
                    </div>

                  

                </div> */}
                <div className="item_div">
                <a href={"https://www.amazon.in/Alpino-Natural-Peanut-Butter-Unsweetened/dp/B077S4V3V9/ref=as_li_ss_il?ascsub&crid=1G7NN2LSARM00&cv_ct_cx=peanut+butter+natural&cv_ct_id=amzn1.osa.eef6a161-cceb-4e3c-a07d-902ff9ab214e.A21TJRUUN4KGV.en_IN&cv_ct_pg=search&cv_ct_wn=osp-single-source&keywords=peanut+butter+natural&pd_rd_i=B077S4V3V9&pd_rd_r=b5fecb7c-674a-4ef5-afbe-1e4bf82836ce&pd_rd_w=Niazu&pd_rd_wg=t03Ny&pf_rd_p=c08fa7ba-5992-402a-8cce-56eabbfee1ac&pf_rd_r=3X1BDSXR7AHRTS678JMJ&qid=1581517140&sprefix=peanut,aps,287&sr=1-2-32235bf8-c8dc-423d-b49a-58af94d8b862&linkCode=li3&tag=9112118040-21&linkId=884c0852eaa7f59c7ecc35ea5c408480"} target="_blank">
                    <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B077S4V3V9&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"}  /></a>
                    <img src={"https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=B077S4V3V9"} width="1" height="1" border="0" alt="" style={{margin:'0px' }}/>
                </div>
                <div className="item_div">
                <a href={"https://www.amazon.in/dp/B07DJCVTDN/ref=as_li_ss_il?pf_rd_s=merchandised-search-5&pf_rd_t=Gateway&pf_rd_i=mobile&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=K36T6FPQHER08W2WVWPA&pf_rd_p=bb3717e6-8ba3-4cef-8998-8670faf2c3ed&linkCode=li3&tag=9112118040-21&linkId=3a25d01ea42a8ddb1ba39cf98eaeaaa5"} target="_blank">
                        <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DJCVTDN&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"} /></a>
                        <img src={"https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=B07DJCVTDN"} width="1" height="1" border="0" alt="" style={{ margin:'0px' }} ></img>
                </div>
                <div className= "item_div">
                    <a href={"https://www.amazon.in/Sprays-Fragrance-Spray-Imperial-150ml/dp/B07RLWFXP4/ref=as_li_ss_il?pf_rd_p=bee4a676-f79b-4489-bcf3-0d8873a9db7f&pd_rd_wg=oUB2q&pf_rd_r=38NEV08MKZMBHD3CQW5M&ref_=pd_gw_bia_d0&pd_rd_w=gyLNH&pd_rd_r=5877f108-c5fe-4494-a7a0-e0159fca023e&linkCode=li3&tag=9112118040-21&linkId=468b0c11f5b389c3b6dd2fc706ef1307"} target="_blank">
                        <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07RLWFXP4&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"} /></a>
                        <img src={"https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=B07RLWFXP4"} width="1" height="1" border="0" alt="" style={{margin:'0px'}} />
                </div>
                <div className="item_div">
                <a href={"https://www.amazon.in/Organic-India-Tulsi-Tea-Green/dp/B01HBF4RTG/ref=as_li_ss_il?pf_rd_p=bee4a676-f79b-4489-bcf3-0d8873a9db7f&pd_rd_wg=7ESEP&pf_rd_r=E3DNDSXESPG8QMZR596C&ref_=pd_gw_bia_d0&pd_rd_w=qTN2l&pd_rd_r=bb740570-5b27-40e8-97eb-e3eca01ae16e&linkCode=li3&tag=9112118040-21&linkId=1eab8d4ab035872119457c82031236fa"} target="_blank">
                    <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HBF4RTG&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"} /></a>
                    <img src="https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=B01HBF4RTG" width="1" height="1" border="0" alt="" style={{margin:'0px'}} />
                </div>
                <div className="item_div">
                <a href={"https://www.amazon.in/Kissan-Mix-Fruit-Jam-500g/dp/B00T7GD1C2/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=7PW94KBB5SWSYAVSZ7A5&linkCode=li3&tag=9112118040-21&linkId=c1ec8238acf9680b23919e7bdbae305c"} target="_blank">
                    <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00T7GD1C2&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"} /></a>
                    <img src={"https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=B00T7GD1C2"} width="1" height="1" border="0" alt="" style={{margin:'0px'}} />
                </div>
                <div className="item_div">
                <a href={"https://www.amazon.in/Leotude-Cotton-Printed-T-Shirt-Sleeve/dp/B0843NG3BP/ref=as_li_ss_il?ref_=NReleaseC&pf_rd_r=Q4GRZA96JAPSBY4JT1GM&pf_rd_p=cfbf9046-ce2d-584b-a90a-66f9ee8eafd7&pf_rd_s=merchandised-search-8&pf_rd_t=101&pf_rd_i=1968120031&pf_rd_m=A1VBAL9TL5WCBF&linkCode=li3&tag=9112118040-21&linkId=38576b5f9e8c36fa9a35c1ec0ebcfe6e"} target="_blank">
                    <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0843NG3BP&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"} /></a>
                    <img src={"https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=B0843NG3BP"} width="1" height="1" border="0" alt="" style={{margin:'0px'}} />
                </div>
                <div className="item_div">
                <a href={"https://www.amazon.in/dp/9385152149/ref=as_li_ss_il?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-16&pf_rd_r=718V1S0SHPWV6EWGSRJW&pf_rd_t=101&pf_rd_p=e94f0e52-53f9-449f-bb39-fdd4e25dfeb2&pf_rd_i=1318157031&linkCode=li3&tag=9112118040-21&linkId=b047b18ac49ea191d48d1dc659901e31"} target="_blank">
                    <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=9385152149&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"} /></a>
                <img src={"https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=9385152149"} width="1" height="1" border="0" alt="" style={{margin:'0px'}} />
                </div>
                <div className="item_div">
                <a href={"https://www.amazon.in/Adidas-Mens-Yking-Running-Shoes/dp/B07D5R92FT/ref=as_li_ss_il?ref_=RAsinC&pf_rd_p=574677af-fc37-51a1-ae45-eea3d1adb6e6&pf_rd_s=merchandised-search-5&pf_rd_t=101&pf_rd_i=3405209031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=YQD1PJBA0ZP8N3710ZXK&pf_rd_r=YQD1PJBA0ZP8N3710ZXK&pf_rd_p=574677af-fc37-51a1-ae45-eea3d1adb6e6&linkCode=li3&tag=9112118040-21&linkId=10a37a87e6a7f12b07edd82869b64ef0"} target="_blank">
                    <img border="0" src={"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07D5R92FT&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=9112118040-21"} /></a>
                <img src={"https://ir-in.amazon-adsystem.com/e/ir?t=9112118040-21&l=li3&o=31&a=B07D5R92FT"} width="1" height="1" border="0" alt="" style={{margin:'0px'}} />
                </div>
            </div>
        )
    }
}

export default ItemList