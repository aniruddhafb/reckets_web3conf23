import React from 'react'

const BuyTicket = () => {
    return (
        <>
            {/* <div className="uni-banner pt-[200px]">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Resell Ticket</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Add Ticket</li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <div className=" pb-100 pt-[200px]">
                <div className="container">
                    <div className="default-section-title default-section-title-middle">
                        <h6>RESELLING</h6>
                        <h3>Listed Tickets</h3>
                    </div>
                    <div className="section-content">
                        <div className="row justify-content-center">
                            {/* loop tickets here  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="blog-card blog-card-2">
                                    <div className="blog-img">
                                        <a href="blog-details.html"><img src="assets/images/blog/b1.jpg" alt="image" /></a>
                                    </div>
                                    <div className="blog-text-area">
                                        <div className="blog-date">
                                            <ul>
                                                <li><i className="fas fa-user"></i> By Admin</li>
                                                <li><i className="far fa-comments"></i> No Comments</li>
                                                <li><i className="far fa-calendar-alt"></i> 01 July 2023</li>
                                            </ul>
                                        </div>
                                        <h4><a href="blog-details.html">Tikt 1</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyTicket