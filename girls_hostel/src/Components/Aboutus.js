import React from 'react'
import Aboutbreadcrumbs from '../Pages/About/Aboutbreadcrumbs'
import Aboutuspage from '../Pages/About/Aboutuspage'
import Vissionmisson from '../Pages/About/Vissionmisson'
import Testimonial from '../Pages/Testimonial/Testimonial'

export default function Aboutus() {
    return (
        <div className='m-top'>
            <Aboutbreadcrumbs />
            <Aboutuspage />
            <Vissionmisson />
            <Testimonial />
        </div>
    )
}
