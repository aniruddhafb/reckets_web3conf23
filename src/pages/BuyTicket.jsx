import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const BuyTicket = ({ get_listed_nfts, signer_address }) => {
    const [ticketData, setTicketData] = useState([]);
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
                                <div className="blog-card blog-card-2 overflow-hidden">
                                    <div className="blog-img">
                                        <Link href={`/ticket/${ticketData?.token_id}`}>
                                            <Image
                                                height={100}
                                                width={100}
                                                src={ticketData?.upload_ticket?.replace(
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
                                                    {ticketData?.airline_name} {"  "}
                                                </li>
                                                <li> {" "} {ticketData?.cabin_type} {" "}  </li>
                                                <li>
                                                    <i className="far fa-calendar-alt"></i> {ticketData?.date}
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link href={`/ticket/${ticketData?.token_id}`}>{ticketData?.location} to {ticketData?.destination}</Link>
                                        </h4>
                                        <p>Flight mode is {ticketData?.flight_mode} and flight type is {ticketData?.flight_type}, this ticket is of {ticketData?.airline_name} airlines.</p>
                                    </div>
                                    <div className="m-4 flex justify-end">
                                        <button className="mr-24" type="submit">
                                            <span>{ticketData?.travellers} Travellers</span>
                                        </button>
                                        {ticketData?.minter_address?.toLowerCase() === signer_address?.toLowerCase() ?
                                            <Link
                                                className="default-button default-button-2"
                                                href={`/ticket/${ticketData?.token_id}`}
                                            >
                                                <span>View Ticket</span>
                                            </Link>
                                            :
                                            <Link
                                                className="default-button default-button-2"
                                                href={`/ticket/${ticketData?.token_id}`}
                                            >
                                                <span>Buy Ticket</span>
                                            </Link>
                                        }
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