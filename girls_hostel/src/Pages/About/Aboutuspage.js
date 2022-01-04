import React from 'react'
import "../Style.css";
import divider from "../facilities-icon/divider.png"
import aboutusimg from "../Hostel_Images/hostel-1.png"
export default function Aboutuspage() {
    return (
        <div>
            <div className='heading text-center padding-top-50'>
                <h1>About Us</h1>
                <img src={divider} className="divider" alt="divider" />
            </div>
            <div className='aboutus container'>
                <p className='aboutus-content'>Clink Girls Hostel was established in 2018 with the idea of providing Hostel Solutions for people who are new to Bhopal. Clink Girls Hostel is ideal for Girl Students who want clean, hygienic and Secure environment. Clink Girls Hostel is Well equipped with all necessary facilities and a dedicated management. Here we have high level security arrangements including CCTV Surveillance and full time Security Guards.

                    Do you have a vehicle? then you don’t worry about Parking since we have a very Good Vehicle parking area for you.<br /><br />

                    Clink Girls Hostel provides Very good residential facilities along with Calm & Clean Environment.

                    We provide Pure Veg. North Indian and South Indian food . We also Provide Complimentary High Speed WiFi, TV, Washing Machine, Hot Water, Mini Pantry, Georgia Coffee Vending Machine, Water Purifier, Water Coolers, 24 hrs Water Supply and Inverter Power Back up Along with other facilities. The safety of our Hostel inmates is our utmost concern and thus have Deployed round the clock Security Guards and CCTV Surveillance .

                    Clink Girls Hostel offers an all embracing environment to Students of all Ages, Coming from various parts of the Country and the World.<br /><br />

                    Come Experience the True Sense of living in a Student Community with Students from all backgrounds and qualifications and Explore the Sense of Family with us.</p>
                <p className='aboutus-img-box text-center'>
                    <img src={aboutusimg} alt='aboutus page' className='aboutus-img' />
                </p>
            </div>
      </div>
    )
}
