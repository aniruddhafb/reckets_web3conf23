import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import defaultAvatar from "../../../public/profile.png";
import Head from "next/head";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "@/components/Loader";

const UserProfile = ({
    signer_address,
    initiateMoralis,
    defaultCollectionAddress,
}) => {
    const router = useRouter();
    const { slug } = router.query;
    const [nfts, set_nfts] = useState([]);
    const [loading, set_loading] = useState(false);

    // getting nfts direct via on chain using moralis
    const getProfileNFTs_moralis = async () => {
        set_loading(true);
        try {
            initiateMoralis();
            const address = slug;
            const chain = EvmChain.MUMBAI;
            const response = await Moralis.EvmApi.nft.getWalletNFTs({
                address,
                chain,
            });
            // set_nfts(response.jsonResponse.result);
            let my_nfts = [];
            for (const a of response.jsonResponse.result) {
                console.log(response.jsonResponse.result)
                if (
                    a.token_address.toLowerCase() ==
                    defaultCollectionAddress.toLowerCase()
                ) {
                    let obj = {};
                    const res = await axios.get(a.token_uri && a.token_uri);
                    obj = {
                        ...res.data,
                        token_address: a.token_address,
                        token_id: a.token_id,
                        minter_address: a.minter_address,
                    };
                    my_nfts.push(obj);
                    set_nfts(my_nfts);
                }
            }
        } catch (error) {
            console.log(error);
        }
        set_loading(false);
    };

    useEffect(() => {
        if (!slug) return;
        getProfileNFTs_moralis();
    }, [slug, signer_address]);

    return (
        <>
            {loading ?
                <Loader />
                :
                <>
                    <Head>
                        <title>My Profile</title>
                        <meta
                            name="description"
                            content="A platform to resell your online tickets"
                        />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.png" />
                    </Head>

                    <div className="uni-banner pt-[200px]">
                        <div className="container">
                            <div className="uni-banner-text-area flex justify-center flex-col align-middle">
                                <ul className="flex justify-center">
                                    <Image
                                        src={defaultAvatar}
                                        height={100}
                                        width={100}
                                        alt="avatar"
                                        style={{
                                            borderRadius: "50%",
                                            width: "80px",
                                            height: "70px",
                                            marginBottom: "10px",
                                        }}
                                    />
                                </ul>
                                <ul>
                                    <li>
                                        {signer_address.slice(0, 5) + "..." + signer_address.slice(38)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="login ptb-100">
                        <div className="container">
                            <div className="default-section-title default-section-title-middle">
                                <h6>YOUR TICKETS</h6>
                            </div>
                            <div className="section-content">
                                <div className="row justify-content-center">
                                    {/* loop tickets here  */}
                                    {nfts?.map((e, index) => {
                                        console.log(e)
                                        return (
                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="blog-card blog-card-2 overflow-hidden">
                                                    <div className="blog-img">
                                                        <Link href={`/ticket/${e.token_id}`}>
                                                            <img
                                                                src="../tick.webp"
                                                                className="h-[200px] w-[100%]"
                                                                alt="image"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-text-area">
                                                        <div className="blog-date">
                                                            <ul>
                                                                <li>
                                                                    {e.airline_name} {"  "}
                                                                </li>
                                                                <li> {" "} {e.cabin_type} {" "}  </li>
                                                                <li>
                                                                    <i className="far fa-calendar-alt"></i> {e.date}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h4>
                                                            <Link href={`/ticket/${e.token_id}`}>{e.location} to {e.destination}</Link>
                                                        </h4>
                                                        <p>Flight mode is {e.flight_mode} and flight type is {e.flight_type}, this ticket is of {e.airline_name} airlines.</p>
                                                    </div>
                                                    <div className="m-4 flex justify-end">
                                                        <button className="mr-24" type="submit">
                                                            <span>{e.travellers} Travellers</span>
                                                        </button>
                                                        {e?.minter_address.toLowerCase() === slug.toLowerCase() ?
                                                            <Link
                                                                className="default-button default-button-2"
                                                                href={`/ticket/${e.token_id}`}
                                                            >
                                                                <span>Sell Ticket</span>
                                                            </Link>
                                                            :
                                                            <Link
                                                                className="default-button default-button-2"
                                                                href={`/ticket/${e.token_id}`}
                                                            >
                                                                <span>Buy Ticket</span>
                                                            </Link>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {!nfts.length && (
                                <div className="default-section-title default-section-title-middle">
                                    <h3>No Tickets in your wallet</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default UserProfile;
