import Loader from '@/components/Loader'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdDirectionsBoat, MdFlightTakeoff } from "react-icons/md"

export default function Home({ get_listed_nfts, signer, signer_address }) {

  const [loading, set_loading] = useState(false);
  const [ticketData, set_ticketData] = useState([]);

  const get_nfts = async () => {
    set_loading(true);
    const nfts = await get_listed_nfts([]);
    set_ticketData(nfts);
    set_loading(false);
  };

  useEffect(() => {
    if (!signer) return;
    get_nfts();
  }, [signer]);
  return (
    <>
      <Head>
        <title>Reckets - Resell your online tickets</title>
        <meta
          name="description"
          content="A platform to resell your online tickets"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {loading ?
        <Loader />
        :
        <>
          {/* hero section */}
          <div className="banner bg-mainColor pt-[200px]">
            <div className="shape">
              <img className="shape1" src="../banner-circle-2.png" alt="image" />
              <img className="shape2" src="../dot-dot.png" alt="image" />
            </div>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="banner-text-area-2 banner-text-area-3">
                    <h1>Resell your flight tickets very easily!!</h1>
                    <p>A platform where you can resell your flight tickets very easily. Buy tickets on reckets in the form of NFTs backed by the blockchain security. </p>
                    <div className="banner-button-group">
                      <Link className="default-button default-button-2" href="/BuyTicket"><span>Buy Tickets</span></Link>
                      <Link className="default-button default-button-2 last-btn" href="/AddTicket"><span>Resell Tickets</span></Link>
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
              <div className="partner-slider-area owl-carousel flex flex-wrap justify-center">
                <img src="../kasa.png" className='h-[55px] mr-14 mt-2' alt="image" />
                <img src="../indgio.png" className='h-[70px] mr-14' alt="image" />
                <img src="../airasia.png" className='h-[45px] mr-14 mt-2' alt="image" />
                <img src="../jet.png" className='h-[80px] mr-14 mb-2' alt="image" />
                <img src="../sky.png" className='h-[90px] mr-14 mb-2' alt="image" />
                <img src="../spice.png" className='h-[70px] mr-14 mt-2' alt="image" />
              </div>
            </div>
          </div>

          {/* tickets  */}
          <div className="blog pb-100 bg-f9faff pt-16">
            <div className="container">
              <div className="default-section-title default-section-title-middle">
                <h6>RESELLING TICKETS</h6>
                <h3>Available Tickets</h3>
              </div>
              <div className="section-content">
                <div className="row justify-content-center">
                  {/* loop tickets here  */}
                  {ticketData?.map((e, index) => {
                    return (
                      index < 6 && (
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="blog-card blog-card-2 overflow-hidden">
                            <div className="blog-img">
                              <Link href={`/ticket/${e?.token_id}`}>
                                <Image
                                  height={100}
                                  width={100}
                                  src={e?.upload_ticket?.replace(
                                    "ipfs://",
                                    "https://ipfs.io/ipfs/"
                                  )}
                                  className="h-[200px] w-[100%]"
                                />
                              </Link>
                            </div>
                            <div className="blog-text-area">
                              <div className="blog-date">
                                <ul>
                                  <li>
                                    {e?.airline_name} {"  "}
                                  </li>
                                  <li> {" "} {e?.cabin_type} {" "}  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i> {e?.date}
                                  </li>
                                </ul>
                              </div>
                              <h4>
                                <Link href={`/ticket/${e?.token_id}`}>{e?.location} to {e?.destination}</Link>
                              </h4>
                              <p>Flight mode is {e?.flight_mode} and flight type is {e?.flight_type}, this ticket is of {e?.airline_name} airlines.</p>
                            </div>
                            <div className="m-4 flex justify-end">
                              <button className="mr-24" type="submit">
                                <span>{e?.travellers} Travellers</span>
                              </button>
                              {e?.minter_address?.toLowerCase() == signer_address?.toLowerCase() ?
                                <Link
                                  className="default-button default-button-2"
                                  href={`/ticket/${e?.token_id}`}
                                >
                                  <span>Sell Ticket</span>
                                </Link>
                                :
                                <Link
                                  className="default-button default-button-2"
                                  href={`/ticket/${e?.token_id}`}
                                >
                                  <span>View Ticket</span>
                                </Link>
                              }
                            </div>
                          </div>
                        </div>
                      )
                    )
                  }
                  )}
                  {ticketData.length <= 0 && !signer_address &&
                    <h6 className='text-center mt-4'>please connect your wallet to view data!!</h6>
                  }
                  {ticketData.length <= 0 && signer_address &&
                    <h6 className='text-center mt-4'>It seems everthing is sold out!!</h6>
                  }
                </div>
              </div>
            </div>
          </div>

          {/* services  */}
          <div className="service service-3 ptb-100">
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
                        <MdFlightTakeoff style={{ rotate: "310deg" }} />
                      </div>
                      <h4><a href="#">Resell Flight Tickets</a></h4>
                      <p>Resell your purchased flight tickets with very minimal comission on sales. </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="service-card-3">
                      <div className="service-card-icon-area">
                        <MdDirectionsBoat style={{ rotate: "310deg" }} />
                      </div>
                      <h4><a href="#">Resell Boat Tickets (Coming Soon)</a></h4>
                      <p>Resell your purchased boat tickets on reckets and get best deals </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
