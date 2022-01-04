import React , { useEffect } from 'react'
import Faqbreadcrumbs from '../Pages/Faqs/Faqbreadcrumbs'
import Faqhero from '../Pages/Faqs/Faqhero'

export default function Faq() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
    return (
        <div className='m-top'>
            <Faqbreadcrumbs />
            <Faqhero />
        </div>
    )
}
