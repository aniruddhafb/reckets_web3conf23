import Loader from "@/components/Loader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const BuyTicket = ({ get_listed_nfts, signer, signer_address }) => {

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
        <title>Buy Tickets</title>
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
        <div className=" pb-100 pt-[200px]">
          <div className="container">
            <div className="default-section-title default-section-title-middle">
              <h6>RESELLING</h6>
              <h3>Listed Tickets</h3>
            </div>
            <div className="section-content">
              <div className="row justify-content-center">
                {/* loop tickets here  */}
                {ticketData?.map((e) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default BuyTicket;
