import React from 'react'

export default function Contact() {
    return (
        <div>
            <section id='contact' className='mt-3 contactSection mb-3'>
                <div className="container">
                    <h3> CONTACT<span className='text-white'> US </span> </h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 mt-4 aboutFoodImg">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923123243!2d77.23701036237429!3d28.522404036852144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1728400539031!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                            <div className="col-md-5 mt-4 contactContentSection">
                                <h4>GET IN TOUCH
                                </h4>
                                <div className="form">
                                    {/* <div className="formIcons">
                                        <i className=' text-white fas fa-user'></i>
                                        <i className=' text-white fas fa-envelope'></i>
                                        <i className=' text-white fas fa-phone'></i>
                                        <i className=' text-white fas fa-lock'></i>
                                        <i className=' text-white fas fa-city'></i>
                                    </div> */}
                                    <form action="#">
                                      <input type="text"   placeholder='Enter Name' /> <br></br> <br></br>
                                      <input type="email"  placeholder='Enter Email'/> <br></br><br></br>
                                      <input type="password"  placeholder='Enter Password'/><br></br><br></br>
                                      <input type="number"  placeholder='Enter Number'/><br></br><br></br>
                                      <input type="text"  placeholder='Enter City'/><br></br><br></br>
                                    </form>
                                    <button className='btn btn-primary fs-4 text-white w-100'>Contact Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
