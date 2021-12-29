import React from 'react'
import Calltoaction from '../Pages/Home/Calltoaction'
import Facilities from '../Pages/Home/Facilities'
import Hero from '../Pages/Home/Hero'
import Tamplet from '../Pages/Home/Tamplet'

export default function Home() {
    return (
        <div>
            <Hero />
            <Facilities />
            <Calltoaction />
            <Tamplet />
        </div>
    )
}
