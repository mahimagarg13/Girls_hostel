import React from 'react'
import "../Style.css";
import fone from "../facilities-icon/biometric.png"
import ftwo from "../facilities-icon/bunk.png"
import fthree from "../facilities-icon/restaurant.png"
import ffour from "../facilities-icon/house.png"
import ffive from "../facilities-icon/kitchen.png"
import fsix from "../facilities-icon/purified-water.png"
import fseven from "../facilities-icon/guard.png"
import feight from "../facilities-icon/solar-panel.png"
import fnine from "../facilities-icon/working.png"
import ften from "../facilities-icon/coffee-maker.png"
import feleven from "../facilities-icon/wardrobe.png"
import ftwlv from "../facilities-icon/quarantine.png"
import fthirtn from "../facilities-icon/cctv.png"
import ffourtn from "../facilities-icon/parking.png"
import divider from "../facilities-icon/divider.png"
export default function Facilities() {
    return (
        <div id="grad">
            <div className='facilities text-center container' >
                <div className='heading'>
                    <h1>Facilities</h1>
                    <img src={divider} className="divider"  alt="divider" />
                </div>
                <div className='facilities-content'>
                    <div className='icon-box'>
                        <img src={fone} alt='' className='icons' />
                        <p className="icon-content">Biometic Access</p>
                    </div>
                    <div className='icon-box'>
                        <img src={ftwo} alt='' className='icons' />
                        <p className="icon-content">Bunk Beds for spacious rooms</p>

                    </div>
                    <div className='icon-box'>
                        <img src={feleven} alt="" className='icons' />
                        <p className="icon-content">Personal Wardrobe</p>
                    </div>
                    <div className='icon-box'>
                        <img src={ffour} alt='' className='icons' />
                        <p className="icon-content">Housekeeping Facilities</p>
                    </div>
                    <div className='icon-box'>
                        <img src={fnine} alt="" className='icons' />
                        <p className="icon-content">Separate study room available</p>
                    </div>
                </div>
                <div className='facilities-content'>
                    <div className='icon-box'>
                        <img src={ften} alt="" className='icons' />
                        <p className="icon-content">Tea Coffee Vendering machine</p>
                    </div>

                    <div className='icon-box'>
                        <img src={fsix} alt="" className='icons' />
                        <p className="icon-content">RO Purified Water</p>
                    </div>
                    <div className='icon-box'>
                        <img src={fseven} alt="" className='icons' />
                        <p className="icon-content">Security Guard</p>
                    </div>
                    <div className='icon-box'>
                        <img src={ffourtn} alt="" className='icons' />
                        <p className="icon-content">Ample Two Wheeler Parking Available</p>
                    </div>
                    <div className='icon-box'>
                        <img src={feight} alt="" className='icons' />
                        <p className="icon-content">Solar Pannel</p>
                    </div>
                </div>
                <div className='facilities-content'>
                    <div className='icon-box'>
                        <img src={fthirtn} alt="" className='icons' />
                        <p className="icon-content">CCTV Surveillance in Common Areas.</p>
                    </div>
                    <div className='icon-box'>
                        <img src={ftwlv} alt="" className='icons' />
                        <p className="icon-content">Dormitory room, triple sharing & four sharing rooms available.</p>
                    </div>
                    <div className='icon-box'>
                        <img src={fthree} alt='' className='icons' />
                        <p className="icon-content">We provide homemade food for breakfast, lunch and dinner.</p>
                    </div>
                    <div className='icon-box'>
                        <img src={ffive} alt='' className='icons' />
                        <p className="icon-content">Specialised pantries with induction stove and microwave along with refrigerator.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
