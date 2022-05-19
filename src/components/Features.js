import React from "react";

export default function Features() {
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
          <source src="video4.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 className="fh">FEATURES</h2>
      <div className="">
        <p className="fp">
          Create a browser extension allowing users to vote for a domain
          categorizing it into various categories and get rewards. This enables
          them to pre-emptively protect their online activities from advanced
          threats in a collaborative way with a decentralized and tamperproof
          process using blockchain technology. Having a security & privacy
          focused framework for online activities & Pseudo-anonymous Reputation
          based systems for online interactions.
        </p>
      </div>
      <img src="review.PNG" className="rev" alt="" />
      <img src="network.PNG" className="net" alt="" />
      <div className="container">
        <h2 className="ff">OVERVIEW</h2>
        <p className="ffp">
          1. User - A person or a bot who can categorize a domain to be safe or
          unsafe. <br />
          a. Users must be registered on the Lazarus Network Platform to vote.{" "}
          <br />
          b. They must have a daily limit to submit their vote. <br />
          c. The limit should be increased/decreased based on their reputation.{" "}
          <br />
          d. The users can vote for these categories and tags: <br />
          e. Users can delete but can’t change their vote <br />
          f. Users can raise dispute against a vote submitted <br />
          g. User can appeal if they have been blocked from voting <br />
          h. Users can also appeal if they have been banned from voting <br />
        </p>
        <img src="1.PNG" className="ovf" alt="" />
        <p className="ffp">
          2. Moderator - A bot which checks whether a vote is genuine or fake.
          (Integrate ML Model to check webpage contents in real time) <br />
          a. Moderator checks for each vote by confirming these conditions{" "}
          <br />
          --Is the Domain reachable? If 404, A warning is given to the user{" "}
          <br />
          --Is the Domain registered? If not, then instant block the user from
          submitting any voting requests <br />
          b. Moderator logs each vote into the database based on the user’s
          wallet address and domain name <br />
          c. Moderators can block the user from voting again if the user
          receives 3 warnings and ban a user if both conditions of a vote aren't
          met. <br />
          d. An operator can unblock a user to start voting again after the
          appeal is addressed <br />
        </p>
        <img src="2.PNG" className="ovs" alt="" />
        <p className="ffp">
        3. Admin - Manages the smart contract operations related to user voting <br />

a. Admin assigns moderator role <br />

b. Change the Domain Vote Collection Contract Mappings <br />
        </p>
      </div>
    </div>
    </>
  );
}
