import React from "react";

export default function Specifications() {
  return (
    <>
    <div>

      <div className="home">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            height: "338px",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src="video2.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 className="sh">SPECIFICATIONS</h2>
      <div className="container">
        <h3 className="sm">Smart Contract</h3>
        <p className="smp">
          1. Facilitate submit & delete vote, block, unblock, ban, unban
          operations to users & moderators <br />
          2. Mint standard ERC721 Tokens <br />
          3. Have the NFT minted against a contract specific to the domain which
          has votes for various website links <br />
        </p>
      </div>
      <img src="feat.PNG" className="feat" alt="" />
      <div className="container">
        <h3 className="sm">Browser Extension / Mobile App</h3>
        <p className="smp">
          Allow create and import wallet options for the users <br />
          Allow vote from user account once they are given voter role <br />
          Show the domain status (safe/unsafe) with tags & number of reviews{" "}
          <br />
        </p>
      </div>
      <img src="demo.PNG" className="demo" alt="" />
      <div className="container">
        <h3 className="sm">API Gateways / Public APIs</h3>
        <p className="smp">
          1. Create wallet address to allow voting <br />
          2. Check ETH, token balance <br />
          3. Check for Votes, Warns, Bans <br />
          <br />
        </p>
      </div>
    </div>
    </>
  );
}
