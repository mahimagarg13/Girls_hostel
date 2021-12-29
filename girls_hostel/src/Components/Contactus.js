import React from 'react'
import ContactForm from '../Pages/Contact/ContactForm'
import Gmap from '../Pages/Contact/Gmap'

export default function Contactus() {
    window.scrollTo(0, 0)
    return (
        <div>
            <ContactForm />
            <Gmap />
        </div>
    )
}
