import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Ticket = ({ list_token }) => {
  const [price, set_price] = useState("");

  const sell_token = async () => {
    await list_token(tokenId, price);
  };

  return (
    <div className="blog-details pb-100 pt-[200px]">
      <Head>
        <title>Flight Ticket</title>
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
              <img src="assets/images/inner-pages/cd1.jpg" alt="image" />
              <h3>Flight from mumbai to goa</h3>
              <p>Other flight info goes here</p>
              <div className="blog-quote">
                <h5>
                  <i className="fas fa-quote-left"></i>
                  <span>Cancellation Reason</span>{" "}
                  <i className="fas fa-quote-right"></i>
                </h5>
                <p>Got urgent work</p>
              </div>
            </div>
            <div className="blog-text-footer pr-20">
              <div className="tag-area">
                <ul>
                  <li>
                    <i className="fas fa-tags"></i>
                  </li>
                  <li>Indigo,</li>
                  <li>Oneway,</li>
                  <li>Direct</li>
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

            {/* buy show if listed  */}
            <div className="col-md-12 mt-8">
              {/* <button className="default-button" type="submit"><span>Buy Ticket</span></button> */}
              <Link className="default-button default-button-2" href="#">
                <span>Buy Ticket</span>
              </Link>
            </div>

            {/* only owner can see this */}
            <div className="col-md-12 mt-8">
              {/* <button className="default-button" type="submit"><span>Put on sale</span></button> */}
              <Link className="default-button default-button-2" href="#">
                <span>Put on sale</span>
              </Link>
            </div>

            {/* <div className="bd-form details-text-area bg-f9faff pr-20" id="bd-form">
                            <h3>Leave A Reply</h3>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Phone" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Website" required />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea rows="5" className="form-control" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="default-button" type="submit"><span>Post A Comment</span></button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="sidebar-area pt-30">
              <div className="sidebar-card recent-news">
                <h3>Other Tickets</h3>
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
  );
};

export default Ticket;
