import React from 'react'

export default function Home() {
    return (
        <>
            <section id='home' className='foodSectionOne'>
                <div className="container">
                    <div className="card text-bg-dark">
                        <div className="card-img-overlay sectionContent ">
                            <div>
                                <h1 className="card-title">fresh <span>food in the</span> <br></br>morning
                                </h1>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.
                                </p>
                                <button className='getYoursNow'>get yours now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id='home' className='foodSectionTwo mt-2'>
                <div className="container">
                    <div className="card text-bg-dark">
                        <div className="card-img-overlay sectionContent ">
                            <div>
                                <h1 className="card-title">fresh <span>food in the</span> <br></br>dinner
                                </h1>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.
                                </p>
                                <button className='getYoursNow'>get yours now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='home' className='foodSectionThree mt-2'>
                <div className="container">
                    <div className="card text-bg-dark">
                        <div className="card-img-overlay sectionContent ">
                            <div>
                                <h1 className="card-title">fresh <span>food in the</span> <br></br>lanch
                                </h1>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.
                                </p>
                                <button className='getYoursNow'>get yours now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
