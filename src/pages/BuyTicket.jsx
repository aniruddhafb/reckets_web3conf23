<<<<<<< HEAD
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const BuyTicket = ({ get_listed_nfts, signer }) => {
  const [nfts, set_nfts] = useState([]);
  const get_nfts = async () => {
    const nfts = await get_listed_nfts();
    set_nfts(nfts);
    console.log(nfts);
  };
=======
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
>>>>>>> c96b2f14a9bbad8967d3638ce4871fdd29cf92fc

  useEffect(() => {
    if (!signer) return;
    get_nfts();
  }, [signer]);
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
              {nfts?.map((e) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="blog-card blog-card-2">
                    <div className="blog-img">
                      <Link href={`/ticket/${e.tokenId.toString()}`}>
                        <img
                          src="../tick.webp"
                          className="h-[200px] w-[100%]"
                          alt="image"
                        />
                      </Link>
                    </div>
<<<<<<< HEAD
                    <div className="blog-text-area">
                      <div className="blog-date">
                        <ul>
                          <li>
                            <i className="fas fa-user"></i> By 0x443..
                          </li>
                          <li>Direct Flight</li>
                          <li>
                            <i className="far fa-calendar-alt"></i> 10 July 2023
                          </li>
                        </ul>
                      </div>
                      <h4>
                        <Link href="#">Mumbai to Goa</Link>
                      </h4>
                      <p>Cabin is economyy</p>
=======
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
>>>>>>> c96b2f14a9bbad8967d3638ce4871fdd29cf92fc
                    </div>
                    <div className="m-4 flex justify-end">
                      <button className="mr-24" type="submit">
                        <span>3 Travellers</span>
                      </button>
                      <Link
                        className="default-button default-button-2"
                        href="#"
                      >
                        <span>Buy Ticket</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyTicket;
