import React from 'react'
import { Button } from 'react-bootstrap'
export default function Tamplet() {
    window.scrollTo(0, 0)
    return (
        <div className='tamplet'>
            <div className='facilities-content container'>
                <div className='tamplet-content'>Are you looking for Luxury Girls Hostel ?</div>
                <div className='tamplet-button'>  <Button variant="success" size="lg">Contact Us</Button>{' '}
                </div>
            </div>
        </div>
    )
}
