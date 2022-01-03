import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
// import { FaAngleRight } from "react-icons/fa";
import flogo from "../Navbar/logo.png";
// import tawkTo from "tawkto-react";
// const tawkToPropertyId = 'get_property_id_from_tawkto_dashboard'
// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey
// const tawkToKey = '61a80d989099530957f795da'
function Footer() {
    window.scrollTo(0, 0)
    // useEffect(() => {
    //     tawkTo(tawkToPropertyId, tawkToKey)
    // }, [])
    return (
        <div className="background-black">
                           <div className="d-flex footer">
                    <div className="one text-center ">
                        <img src={flogo} className="h-w" alt="footer-logo" />
                        <p className="mar lnk"> </p>
                    </div>
                    <div className="two">
                        <h4>Navigation</h4>
                        <div className="lnk">
                            {/* <FaAngleRight className="text-golden" /> */}
                            <a href="/#">Home</a><br />
                            {/* <FaAngleRight className="text-golden" />  */}
                            <Link to="/about">About Us</Link><br />
                            <Link to="/services">Services</Link><br />
                            <Link to="/gallery">Gallery</Link><br />
                            <Link to="/contactus"> Contact Us</Link><br />
                            {/* <FaAngleRight className="text-golden" /> */}
                              {/* <Link to="/events">Events</Link><br /> */}
                            {/* <FaAngleRight className="text-golden" />  */}
                             {/* <Link to="/sponsers">Sponsers</Link><br /> */}
                        </div>
                    </div>
                    {/* <div className="lnk mt">
                        {/* <FaAngleRight className="text-golden" /> */}
                        {/* <FaAngleRight className="text-golden" /> */}
                          {/* <Link to="/auditions">Auditions</Link><br /> */}
                        {/* <FaAngleRight className="text-golden" /> */}
                        {/* <FaAngleRight className="text-golden" /> */}
                        {/* <Link to="/registration">Registration</Link><br /> */}
                    {/* </div> */}
                    <div className="three">
                        <h4>Important Links</h4>
                        <div className="lnk">
                            {/* <FaAngleRight className="text-golden" /> */}
                            <Link to="/rulesregulation">Rules & Regulation</Link><br />
                            {/* <FaAngleRight className="text-golden" /> */}
                            <Link to="/termsconditions">Terms & Conditions</Link><br />
                            {/* <FaAngleRight className="text-golden" /> */}
                            <Link to="/faq">FAQ</Link><br />
                        </div></div>
                </div>
        </div>
    );
}
export default Footer;