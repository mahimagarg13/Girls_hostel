import React from 'react'
import Gallerypage from '../Pages/Gallery/Gallerypage'
import Calltoaction from '../Pages/Home/Calltoaction'
import Facilities from '../Pages/Home/Facilities'
import Hero from '../Pages/Home/Hero'
import Tamplet from '../Pages/Home/Tamplet'
import Testimonial from '../Pages/Testimonial/Testimonial'

export default function Home() {
    return (
        <div>
            <Hero />
            <Facilities />
            <Calltoaction />
            <Tamplet />
            <Gallerypage />
            <Testimonial />
        </div>
    )
}
