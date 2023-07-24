import React from 'react'

const TicketCard = () => {
    return (
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
                    <button className="default-button mr-6" type="submit"><span>Buy Ticket</span></button>
                </div>
            </div>
        </div>
    )
}

export default TicketCard