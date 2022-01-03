import React, {useEffect} from 'react'
import Breadcrumbservice from '../Pages/Services/Breadcrumbservice'
import Facilities from "../Pages/Home/Facilities";
import Servicespage from '../Pages/Services/Servicespage';
export default function Services() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
    return (
        <div className='m-top'>
            <Breadcrumbservice />
            <Servicespage />
            <Facilities />
        </div>
    )
}
