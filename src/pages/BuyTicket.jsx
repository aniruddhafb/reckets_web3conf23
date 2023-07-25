import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const BuyTicket = ({ get_listed_nfts }) => {
    return (
        <>
            <Head>
                <title>Buy Tickets</title>
                <meta
                    name="description"
                    content="A platform to resell your online tickets"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

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
                                        <Link href="/ticket/1">
                                            <img src="../tick.webp" className='h-[200px] w-[100%]' alt="image" />
                                        </Link>
                                    </div>
                                    <div className="blog-text-area">
                                        <div className="blog-date">
                                            <ul>
                                                <li><i className="fas fa-user"></i> By 0x443..</li>
                                                <li>Direct Flight</li>
                                                <li><i className="far fa-calendar-alt"></i> 10 July 2023</li>
                                            </ul>
                                        </div>
                                        <h4><Link href="#">Mumbai to Goa</Link></h4>
                                        <p>Cabin is economyy</p>
                                    </div>
                                    <div className="m-4 flex justify-end">
                                        <button className="mr-24" type="submit"><span>3 Travellers</span></button>
                                        <Link className="default-button default-button-2" href="#"><span>Buy Ticket</span></Link>
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