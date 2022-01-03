import React from 'react'
import Breadcrumbsgcontact from '../Pages/Contact/Breadcrumbscontact'
import ContactForm from '../Pages/Contact/ContactForm'
import Gmap from '../Pages/Contact/Gmap'

export default function Contactus() {
    window.scrollTo(0, 0)
    return (
        <div className='m-top'>
            <Breadcrumbsgcontact />
            <ContactForm />
            <Gmap />
        </div>
    )
}
