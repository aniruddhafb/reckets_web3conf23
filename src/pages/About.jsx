import React from 'react'

const About = () => {
    return (
        <div className="about pb-100 pt-[200px]">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="../tick.webp" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text-area pl-20">
                            <div className="default-section-title">
                                <h6>ABOUT US</h6>
                                <h3>Reckets as a resell ticketing platform</h3>
                            </div>
                            <p>We as a platform provide services to users where they can resell their online tickets if they are not able to use or cancel them. We charge less than 1% comission and guarntee a successful transfer between the buyer and a seller. </p>
                            <div className="about-list">
                                <ul>
                                    <li>Resell Flight Tickets</li>
                                    <li>Resell Boat tickets (Coming Soon..)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About