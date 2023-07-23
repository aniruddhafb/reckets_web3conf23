import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="banner bg-mainColor">
        <div className="shape">
          <img className="shape1" src="../banner-circle-2.png" alt="image" />
          <img className="shape2" src="../dot-dot.png" alt="image" />
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-text-area-2 banner-text-area-3">
                <h1>Resell your online tickets very easily!!</h1>
                <p>A platform where you can resell your flight, boat, movies tickets very easily. Buy tickets on reckets in the form of NFTs backed by the blockchain security. </p>
                <div className="banner-button-group">
                  <Link className="default-button default-button-2" href="/BuyTicket"><span>Buy Tickets</span></Link>
                  <Link className="default-button default-button-2 last-btn" href="/SellTicket"><span>Resell Tickets</span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-img-3">
                <img className='h-[500px] w-[90%]' src="../heroo.jpg" alt="shape" />
              </div>
            </div>
          </div>
        </div>
        <img className="bottom-shape" src="../banner-3-bottom-shape.png" alt="shape" />
      </div>

      {/* brands  */}
      <div className="partner pt-70">
        <div className="container">
          <div className="partner-slider-area owl-carousel">
            <img src="assets/images/brand/br1.png" alt="image" />
          </div>
        </div>
      </div>

      {/* services  */}
      <div className="service service-3 ptb-100 bg-f9faff">
        <div className="container">
          <div className="default-section-title default-section-title-middle">
            <h6>OUR SERVICES</h6>
            <h3>All Services on reckets</h3>
          </div>
          <div className="section-content">
            <div className="row justify-content-center g-0">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="service-card-3">
                  <div className="service-card-icon-area">
                    <i className="flaticon-content"></i>
                  </div>
                  <h4><a href="service-details.html">Buy Flight Tickets</a></h4>
                  <p>Buy fresh new flight tickets in the form of NFTs on polygon. Comes with priority reselling, blockchain security and many more things.. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="service-card-3">
                  <div className="service-card-icon-area">
                    <i className="flaticon-content"></i>
                  </div>
                  <h4><a href="service-details.html">Resell Flight Tickets</a></h4>
                  <p>Resell your purchased flight tickets from reckets. Third party reselling will be enabled soon.. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="service-card-3">
                  <div className="service-card-icon-area">
                    <i className="flaticon-content"></i>
                  </div>
                  <h4><a href="service-details.html">Resell Boat Tickets (Coming Soon)</a></h4>
                  <p>Resell your purchased boat tickets from reckets. Third party reselling will be enabled soon.. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tickets  */}
      <div className="blog pb-100">
        <div className="container">
          <div className="default-section-title default-section-title-middle mt-12">
            <h6>TICKETS</h6>
            <h3>Available Tickets</h3>
          </div>
          <div className="section-content">
            <div className="row justify-content-center">
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
