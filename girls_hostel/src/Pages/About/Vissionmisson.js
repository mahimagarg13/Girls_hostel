import React from 'react'
import divider from "../facilities-icon/div-1.png"

export default function Vissionmisson() {
    return (
        <div>
             <div className='heading text-center padding-top-50 aboutus container'>
             <p className='aboutus-content'>
                <h2> <span style={{color:"green" , fontWeight:"bolder"}}>Our</span> <span style={{color:"orange" , fontWeight:"bolder"}}> Vission</span></h2>
                <img src={divider} className="divider" alt="divider" />
<p>To be the No.1 PG service provider in Bhopal by providing a clean, comfortable and affordable accommodation with superior customer service.</p>

                </p>
                <div id="vl"></div>
             <p className='aboutus-content'>
                <h2> <span style={{color:"orange" , fontWeight:"bolder"}}>Our</span> <span style={{color:"green" , fontWeight:"bolder"}}> Mission</span></h2>
                <img src={divider} className="divider" alt="divider" />
                <p>We are extremely professional and willing to go above and beyond to provide the absolute best PG accomodation experience possible.</p>
                </p>
            </div>
        </div>
    )
}
