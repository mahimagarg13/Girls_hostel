import React, { useState } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import divider from "../facilities-icon/divider.png"
import { FcPhone, FcGoogle } from "react-icons/fc";
import { RiMapPinFill } from "react-icons/ri";
// import { ImFacebook } from "react-icons/im";
// import { ImInstagram } from "react-icons/im";
export default function Contactform() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const onSubmitForm = async (e) => {
        // e.preventDefault();
        try {
            const data = { name, phone, email, message };

            axios
                .post("https://clink-girls-hostel.herokuapp.com/contact", data)
                //   .then(setShow(true));
                .then(alert("Submit"));
            window.location.reload();
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <div>
            <div className='container facilities padding-top-50'>
                <div className='heading text-center '>
                    <h1>Get In Touch</h1>
                    <img src={divider} className="divider" alt="divider" />
                </div>
                <div className='action-form'>
                    <div className='form'>
                        <Form onSubmit={onSubmitForm}>
                            <Form.Control placeholder="Name" size="lg" type="name" value={name}
                                onChange={(e) => setName(e.target.value)}
                                required="required"
                                maxLength="32"
                                pattern="[a-zA-Z'-'\s]*" />
                            &nbsp;
                            <Form.Control placeholder="Phone" size="lg" type="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required="required"
                                maxLength="12"
                                pattern="[0-9'-'\s]*" />
                            &nbsp;
                            &nbsp;
                            <Form.Control placeholder="Email" size="lg" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required="required"
                                pattern="/[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*/" />
                            &nbsp;
                            <Form.Control placeholder="Message" as="textarea" rows={3} size="lg" type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required="required" />
                            &nbsp;
                            <div className="d-grid">
                                <Button size="lg" variant="danger" type="submit" >
                                    Contact Us </Button>
                            </div>
                        </Form>
                    </div>
                    <div className='action text-center'>
                        <div className='contact-card'>
                            <div className='heading text-center '>
                                <h1>Contact Information</h1>
                            </div>
                            &nbsp;<div><a href="tel:+91-7999794045" rel="noopener noreferrer" target="_blank" className='a'><FcPhone className="contact-icon" /> +91-7999794045</a></div>
                            &nbsp; <div><a href="mailto:clinkgirlshostel@gmail.com" rel="noopener noreferrer" target="_blank" className='a'> <FcGoogle className="contact-icon" /> clinkgirlshostel@gmail.com</a></div>
                            {/* <a href="https://www.facebook.com//" rel="noopener noreferrer" target="_blank" className='a'> <ImFacebook className="contact-icon" style={{color:"blue"}} /> SkgEvents</a><br /> */}
                            {/* <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank" className='a'> <ImInstagram className="contact-icon" style={{color:"maroon"}} /> SkgEventManagement</a><br /> */}
                            &nbsp;  <div className='address'><div><RiMapPinFill className="contact-icon" style={{ color: "maroon" }}  /></div><div><a href="https://goo.gl/maps/rzjzFQKP2VqtenVe7" className='a' rel="noopener noreferrer" target="_blank">Clink girls hostel
                                398, Sector-B, Data Colony, Lalghati, Bhopal, Madhya Pradesh 462011</a></div>
                                </div>
                            &nbsp;   <div className='a text-center'>Open :  Sunday – Friday 08:00 – 18:00</div>
                            {/* <Col className='text-center'>
                                // <Image src="data:image/jpeg;base64,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" roundedCircle />
                            </Col>
                            <p className='p-action'>It was an real incredible experience for me. The quality of food was only matched by the quality of service I got. I wish I can have the same food in my college hostel as well, good food made life so easy in kota</p>
                            <h2>Rashi Sharma</h2> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
