import React from 'react'
import "../Style.css";
import Breadcrumb from "react-bootstrap/Breadcrumb"
import { Link } from 'react-router-dom';
export default function Aboutbreadcrumbs() {
    return (
        <div>
             <div className='breadcrumb-bg-image'>
            <Breadcrumb  className='breadcrumb-content'>
            <Breadcrumb.Item   ><Link to="/" style={{color:"orange", textDecoration:"none"}}>Home</Link></Breadcrumb.Item>
   <Breadcrumb.Item >About Us</Breadcrumb.Item>
</Breadcrumb>
        </div>
        </div>
    )
}
