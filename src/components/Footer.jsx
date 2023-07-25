import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="footer ptb-100 bg-f9faff">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-logo-area">
                            <a href="index.html"><img src="../bgclean.png" alt="image" /></a>
                            <p>Resell your online tickets for best prices!! Convert your tickets to NFTs</p>
                            <div className="footer-social-icons">
                                <ul>
                                    <li><a href="https://github.com/aniruddhafb/reckets" target="_blank"><i className="fab fa-github"></i></a></li>
                                    <li><a href="https://www.youtube.com/watch?v=enEPtCOAXw0&ab_channel=AniruddhaVikharankar" target="_blank"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-links footer-quick-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link href="../About"><i className="fas fa-angle-right"></i> <span>About</span></Link></li>
                                <li><Link href="../BuyTicket"><i className="fas fa-angle-right"></i> <span>Buy Tickets</span></Link></li>
                                <li><Link href="../AddTicket"><i className="fas fa-angle-right"></i> <span>Resell Flight Tickets</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-links footer-newsletter">
                            <h3>Subscribe</h3>
                            <p>Subscribe To Our Newsletter</p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                                <button className="btn" type="button"><i className="far fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-8 mb-[-40px]">
                <p>Built during <a href="https://hack-web3conf-23.devfolio.co/" className='text-blue-500' target='_blank'>Web3Config Hackathon 2023</a> </p>
            </div>
        </div>
    )
}

export default Footer