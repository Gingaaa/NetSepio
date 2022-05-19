import React from "react";

export default function About() {
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
            <source src="video3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <h2 className="ah">ABOUT</h2>
          <h4 className="ah4">Decentralized Secure Internet Assistance</h4>
        </div>
        <div>
          <p className="ap">
            It is a browser extension that allows users to vote for a domain and
            categorize it into various categories and get rewards. This enables
            them to pre-emptively protect their online activities from advanced
            threats in a collaborative way with a decentralized and tamperproof
            process using blockchain technology.
          </p>
          <p className="ap1">
            It provides a security & privacy focused framework for online
            activities & Pseudo-anonymous reputation based systems for online
            interactions.
          </p>
        </div>
        <img src="map.PNG" className="map"  alt="" />
        <div className="container">
          <h2 className="vi">VISION</h2>
          <p className="vp">
            NetSepio aims to provide a safe and secure internet browsing
            experience through Data Democratization to empower individuals &
            companies to use the data in their decision making.
          </p>
        </div>
        <img src="vision.PNG" className="vis" alt="" />
        <img src="wallet.PNG" className="wal" alt="" />
        <div className="">
          <h2 className="vi">MISSION</h2>
          <p className="mp">
            Our Mission is to create a tools like Browser Extensions and Mobile
            Apps to give users insights on the safe and harmful websites/domains
            they browse and allow them to categorize them into different
            categories as Safe, Spyware, Malware, Phishing etc. This enables
            them to safeguard against emerging advanced threats in a
            collaborative way with a decentralized and tamperproof process using
            blockchain technology.
          </p>
        </div>
        <img src="video.PNG" className="vid" alt="" />
        <a href="https://www.youtube.com/watch?v=iUkPQpXwF54"><img src="play.png" className="py" alt="" /></a>
       
      </div>
      
     
    </>
  );
}
