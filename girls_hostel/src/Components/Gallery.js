import React from 'react'
import Breadgallery from '../Pages/Gallery/Breadgallery'
import Gallerypage from '../Pages/Gallery/Gallerypage'

export default function Gallery() {
    window.scrollTo(0, 0)
    return (
        <div className='m-top'>
            <Breadgallery />
            <Gallerypage/>
        </div>
    )
}
