import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ethers, Wallet } from "ethers";
import collectionABI from "../../artifacts/contracts/NFTCollection.sol/NFTCollection.json";
import marketplaceABI from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import Moralis from "moralis";

// importing external techs
import { ThirdwebStorage } from "@thirdweb-dev/storage";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import "@/styles/style.css";
import "@/styles/responsive.css";

import "@/styles/animate.min.css";
import "@/styles/fontawsome.min.css";
import "@/styles/meanmenu.min.css";
import "@/styles/nice-select.min.css";
import "@/styles/barfiller.min.css";
import "@/styles/magnific-popup.min.css";
import "@/styles/odometer.min.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const storage = new ThirdwebStorage();

  const [signer, setSigner] = useState();
  const [provider, set_provider] = useState();
  const [chainIdMain, setChainIdMain] = useState();
  const [signer_address, set_signer_address] = useState("");
  const [signer_bal, set_signer_bal] = useState(0);
  const [format_signer_bal, set_format_signer_bal] = useState(0);
  const [nfts, set_nfts] = useState([]);

  const defaultCollectionAddress = "0x877D6Fa1b6EDfd3f0666171613b8bd5f406B5eFC";
  const marketplaceAddress = "0x31Cfe2bB9a967668BCa5F0EFC071Ae5C5A0c1abA";

  const connectToWallet = async () => {
    if (window?.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      set_provider(provider);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setSigner(signer);

      const user_address = await signer.getAddress();
      set_signer_address(user_address);

      const user_balance = await signer.getBalance();
      const signerToStr = ethers.utils.formatEther(user_balance.toString());
      set_signer_bal(signerToStr);

      const formatBalance = parseFloat(signerToStr).toFixed(2);
      set_format_signer_bal(formatBalance);

      const { chainId } = await provider.getNetwork();
      setChainIdMain(chainId);
      if (chainId != 80001) {
        switchPolygonChain();
      }
    } else {
      console.log("No wallets detected");
    }
  };

  const chainSwitchReload = async () => {
    try {
      setChainIdMain();
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const initiateMoralis = async () => {
    try {
      await Moralis.start({
        apiKey: process.env.NEXT_PUBLIC_MORALIS_API,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const switchPolygonChain = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
      chainSwitchReload("80001");
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x13881",
                chainName: "Mumbai",
                nativeCurrency: {
                  name: "Polygon",
                  symbol: "MATIC",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://polygonscan.com/"],
                rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
              },
            ],
          });
          chainSwitchReload("80001");
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  };

  const create_token = async (data) => {
    const collection_contract = new ethers.Contract(
      defaultCollectionAddress,
      collectionABI.abi,
      signer
    );

    const tokenURI = await storage.upload(data);

    const txn = await collection_contract.createToken(tokenURI);
    console.log(txn);
  };

  const list_token = async (token_id, price) => {
    const collection_contract = new ethers.Contract(
      defaultCollectionAddress,
      collectionABI.abi,
      signer
    );
    const txnApproval = await collection_contract.setApprovalForAll(
      marketplaceAddress,
      true
    );
    await txnApproval.wait();
    const marketplace_contract = new ethers.Contract(
      marketplaceAddress,
      marketplaceABI.abi,
      signer
    );

    const txn = await marketplace_contract.ListToken(
      token_id,
      ethers.utils.parseEther(price),
      defaultCollectionAddress,
      {
        value: ethers.utils.parseEther("0.01"),
      }
    );

    console.log(txn);
  };

  const buy_token = async (token_id) => {
    const marketplace_contract = new ethers.Contract(
      marketplaceAddress,
      marketplaceABI.abi,
      signer
    );

    const txn = await marketplace_contract.executeSale(
      token_id,
      defaultCollectionAddress
    );

    console.log(txn);
  };

  const get_listed_nfts = async () => {
    const marketplace_contract = new ethers.Contract(
      marketplaceAddress,
      marketplaceABI.abi,
      signer
    );

    const res = await marketplace_contract.getAllNFTs();
    return res;
  };

  const get_listed_token_by_id = async (tokenId) => {
    const marketplace_contract = new ethers.Contract(
      marketplaceAddress,
      marketplaceABI.abi,
      signer
    );

    const res = await marketplace_contract.getListedTokenById(
      tokenId,
      defaultCollectionAddress
    );

    console.log(res);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      connectToWallet();
    }
  }, []);

  return (
    <>
      <Navbar
        connectToWallet={connectToWallet}
        signer_address={signer_address}
      />
      <Component
        {...pageProps}
        signer={signer}
        get_listed_nfts={get_listed_nfts}
        list_token={list_token}
        buy_token={buy_token}
        create_token={create_token}
        signer_address={signer_address}
        initiateMoralis={initiateMoralis}
        defaultCollectionAddress={defaultCollectionAddress}
        get_listed_token_by_id={get_listed_token_by_id}
      />
      <Footer />
    </>
  );
}
