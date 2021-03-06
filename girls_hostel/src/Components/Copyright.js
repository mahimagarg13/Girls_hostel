import React from 'react'
import "./Copyright.css";
import { FiFacebook } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
export default function Copyright() {
  window.scrollTo(0, 0)
    return (
      <div>
        <div className="copyright-div">
            <div className="container">
             <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><FiFacebook className="icon-decoration"/></a>
             <a href="https://wa.me/+91-7999794045" rel="noopener noreferrer" target="_blank"><ImWhatsapp className="icon-decoration"/></a>
             <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank"><GrInstagram className="icon-decoration"/></a>
            </div>
        </div>
        <div className="copyright-company">
        <h6>
          Copyright © 2022 Clink Girls Hostel. All rights reserved.
        </h6>
        <h6>
          Developed & Maintained by <a className="aa" href="https://www.cloudencyclopedia.com" rel="noopener noreferrer" target="_blank">Cloud Encyclopedia</a> IT Solutions
        </h6>
        </div>
        </div>
    );
}
