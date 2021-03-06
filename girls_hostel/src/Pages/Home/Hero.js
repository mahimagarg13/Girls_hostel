import React from 'react';
import "../Style.css"
import Carousel from 'react-bootstrap/Carousel';
import hostelone from "../Hostel_Images/hostel-1.png"
import hosteltwo from "../Hostel_Images/hostel-2.png"
import hostelthree from "../Hostel_Images/hostel-3.png"
export default function Hero() {
  return (
    <div className='mr-top'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 imgg"
            src={hostelone}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hosteltwo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hostelthree}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
