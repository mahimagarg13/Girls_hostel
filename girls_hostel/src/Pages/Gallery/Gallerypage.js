import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import hostel1 from "../Gallery/Gallery-images/hostel1.png";
import hostel2 from "../Gallery/Gallery-images/hostel2.png";
import hostel3 from "../Gallery/Gallery-images/hostel3.png";
import hostel4 from "../Gallery/Gallery-images/hostel4.png";
import hostel5 from "../Gallery/Gallery-images/hostel5.png";
import hostel6 from "../Gallery/Gallery-images/hostel6.png";
import hostel7 from "../Gallery/Gallery-images/hostel7.png";
import hostel8 from "../Gallery/Gallery-images/hostel8.png";
import hostel9 from "../Gallery/Gallery-images/hostel9.png";
export default function Gallerypage() {
    window.scrollTo(0, 0)
    return (
        <div>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className='gallery'>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel1} alt="Washroom" className='gallery-img' />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel2} alt="Washroom" className='gallery-img' />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel3} alt="Hostel" className='gallery-img' />
                        </div>
                    </div>
                    <div className='gallery'>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel4} alt="Room" className='gallery-img' />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel5} alt="Room" className='gallery-img' />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel6} alt="Room" className='gallery-img' />
                        </div>
                    </div>
                    <div className='gallery'>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel7} alt="Room" className='gallery-img' />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel8} alt="Kitchen" className='gallery-img' />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <img src={hostel9} alt="kitechen" className='gallery-img' />
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}
