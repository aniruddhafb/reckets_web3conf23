import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import Loader from "@/components/Loader";
import axios from "axios";
import Image from "next/image";
import { BsBrowserChrome } from "react-icons/bs"
import { MdDataExploration } from "react-icons/md";


const Ticket = ({ list_token, initiateMoralis, defaultCollectionAddress, signer_address, buy_token }) => {

  const router = useRouter();
  const { slug } = router.query;
  const tokenId = slug;

  const [price, set_price] = useState("");
  const [putSale, setPutSale] = useState(false);
  const [loading, set_loading] = useState(false);
  const [NFTInfo, setNFTInfo] = useState([]);

  const sell_token = async () => {
    set_loading(true);
    await list_token(tokenId, price);
    set_loading(false);
  };

  const buyToken = async () => {
    set_loading(true);
    await buy_token(tokenId);
    set_loading(false);
  };

  const getNFTInfo_moralis = async () => {
    set_loading(true);
    try {
      initiateMoralis();
      const chain = EvmChain.MUMBAI;
      const response = await Moralis.EvmApi.nft.getNFTMetadata({
        address: defaultCollectionAddress,
        chain,
        tokenId: slug,
      });

      let my_nfts = [];
      let obj = {};
      const a = response.jsonResponse;

      const res = await axios.get(a.token_uri);
      obj = {
        ...res.data,
        token_address: a.token_address,
        token_id: a.token_id,
        minter_address: a.minter_address,
        token_uri: a.token_uri,
      };

      my_nfts.push(obj);
      setNFTInfo(my_nfts);
      console.log(my_nfts)
      console.log(NFTInfo)

    } catch (error) {
      console.log(error);
    }
    set_loading(false);
  };

  useEffect(() => {
    getNFTInfo_moralis();
  }, [slug])

  return (
    <>
      {loading ?
        <Loader />
        :
        <div className="blog-details pb-100 pt-[200px]">
          <Head>
            <title>{NFTInfo[0]?.location} to {NFTInfo[0]?.destination} - Flight Ticket</title>
            <meta
              name="description"
              content="A platform to resell your online tickets"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
          </Head>

          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="blog-details-text-area details-text-area pr-20">

                  <Image
                    height={100}
                    width={100}
                    src={NFTInfo[0]?.upload_ticket.replace(
                      "ipfs://",
                      "https://ipfs.io/ipfs/"
                    )}
                    style={{ height: "auto", width: "100%" }}
                  />

                  <p>(Cabin type is {NFTInfo[0]?.cabin_type})</p>
                  <h3>Flight ticket from {NFTInfo[0]?.location} to {NFTInfo[0]?.destination}</h3>
                  <p>This flight ticket owner should board the flight from  {NFTInfo[0]?.location} airport on {NFTInfo[0]?.date}</p>

                  <p>Also this flight ticket is a {NFTInfo[0]?.flight_mode} ticket with {NFTInfo[0]?.flight_type}  {NFTInfo[0]?.flight_type != "Direct" ? "on the way i.e you have to board another flights (connect in airports)" : "flight i.e the flight will directly react the destination with no stops"}</p>

                  {NFTInfo[0]?.cabin_type != "Economy" ?
                    <p>This is a {NFTInfo[0]?.cabin_type} ticket so you have all the meals and services included, view the ticket for more info..</p>
                    :
                    <p>This is a {NFTInfo[0]?.cabin_type} class ticket so you don't have any meals included</p>
                  }

                  {/* {NFTInfo[0]?.email != "" &&
                    <p><a href={`mailto:${NFTInfo[0]?.email}`}>Click here</a> to have a conversation with the owner of this ticket for more information</p>
                  } */}

                  <div className="blog-quote">
                    <h5>
                      <i className="fas fa-quote-left"></i>
                      <span>Cancellation Reason</span>{" "}
                      <i className="fas fa-quote-right"></i>
                    </h5>
                    <p> {NFTInfo[0]?.cancellation_reason}</p>
                  </div>
                </div>
                <div className="blog-text-footer pr-20">
                  <div className="tag-area">
                    <ul>
                      <li>
                        <i className="fas fa-tags"></i>
                      </li>
                      <li> {NFTInfo[0]?.airline_name},</li>
                      <li> {NFTInfo[0]?.flight_mode},</li>
                      <li> {NFTInfo[0]?.flight_type}</li>
                    </ul>
                  </div>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <span>Block Explore:</span>
                      </li>
                      <li>
                        <a href={`https://mumbai.polygonscan.com/token/${defaultCollectionAddress}?a=${slug}`} target="_blank">
                          <BsBrowserChrome />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <span>Metadata:</span>
                      </li>
                      <li>
                        <a href={NFTInfo[0]?.token_uri} target="_blank">
                          <MdDataExploration />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {putSale == false &&
                  <div>
                    {NFTInfo[0]?.minter_address.toLowerCase() == signer_address.toLowerCase() ?
                      <div className="col-md-12 mt-8">
                        <div className="default-button default-button-2 cursor-pointer" onClick={() => setPutSale(true)} >
                          <span>Put on sale</span>
                        </div>
                      </div>
                      :
                      //  integrate buyticket here
                      <div className="col-md-12 mt-8">
                        <div className="default-button default-button-2 cursor-pointer" onClick={() => buyToken()}>
                          <span>Buy Ticket</span>
                        </div>
                      </div>
                    }
                  </div>
                }

                {/* {list ticket integration here } */}
                {putSale &&
                  <div className="bd-form details-text-area bg-f9faff pr-20" id="bd-form">
                    <h3>Resell your ticket</h3>
                    <form>
                      <div className="row">
                        <div>
                          <input type="number" className="form-control" onChange={(e) => set_price(e.target.value)} placeholder="Enter amount in matic" required />
                        </div>
                        <div className="default-button default-button-2 cursor-pointer" onClick={() => sell_token()} >
                          <span>List for sale</span>
                        </div>
                      </div>
                    </form>
                  </div>
                }

              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="sidebar-area pt-30">
                  <div className="sidebar-card recent-news">
                    <h3>Other Tickets</h3>

                    {/* loop listed tickets here  */}
                    <div className="recent-news-card">
                      <img src="../tick.jpg" alt="image" />
                      <h5>
                        <a href="blog-details.html">Delhi to Bengaluru</a>
                      </h5>
                      <p>5th Jun 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      }
    </>
  );
};

export default Ticket;
