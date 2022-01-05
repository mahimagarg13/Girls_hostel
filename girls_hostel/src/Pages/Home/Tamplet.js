import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Tamplet() {
    return (
        <div className='tamplet'>
            <div className='facilities-content container'>
                <div className='tamplet-content'>Are you looking for Luxury Girls Hostel ?</div>
                <div className='tamplet-button'>  <Button variant="success" size="lg" ><Link to="/contactus" className='tamplet-link' >Contact Us</Link></Button>{' '}
                </div>
            </div>
        </div>
    )
}
