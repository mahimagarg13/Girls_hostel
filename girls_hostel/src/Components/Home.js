import React, {useEffect} from 'react'
import Gallerypage from '../Pages/Gallery/Gallerypage'
import Calltoaction from '../Pages/Home/Calltoaction'
import Facilities from '../Pages/Home/Facilities'
import Hero from '../Pages/Home/Hero'
import Tamplet from '../Pages/Home/Tamplet'
import Testimonial from '../Pages/Testimonial/Testimonial'

export default function Home() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
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
