import React from "react";

export default function Footer() {
  return (
    <>
      <div className="fo">
        <div
          className="d-flex flex-row mb-3"
          style={{ paddingLeft: "93px", paddingTop: "43px" }}
        >
          <img
            className="fimg"
            src="https://user-images.githubusercontent.com/69159515/163665970-6207901c-4c18-4b17-b048-8691d2132832.png"
            alt="error"
          />
          <h3 className="navbar-brand ftext">NetSepio</h3>
        </div>
        <div>
          <h6 style={{ paddingLeft: "118px", paddingTop: "19px", fontWeight:"bold" }}>
            Lazarus Network Inc. <br /> 2209 SW 58th Way <br /> West Park,
            Florida 33023 <br /> +1 954 378 9548 <br />
          </h6>
          <h6 style={{ paddingLeft: "118px", paddingTop: "23px", fontWeight:"bold" }}>
            hello@netsepio.com
          </h6>
        </div>

        <h5 style={{ textAlign: "center", marginTop: "53px", fontWeight:"bold", fontsize:"23px" }}>
          2021-2022 © NetSepio
        </h5>
      </div>
      <div className="get">
        <h4 style={{ marginLeft: "97px", fontWeight: "bold" }}>Subscribe</h4>
        <div class="col-auto" style={{ marginTop: "50px" }}>
          <label for="inputEmail2" class="visually-hidden">
            Email Id
          </label>
          <input
            type="password"
            class="form-control"
            id="inputEmail2"
            placeholder="Your Email Id"
            style={{ width: "300px" }}
          />
        </div>
        <div class="col-auto">
          <button
            type="submit"
            class="btn btn-primary mb-3"
            style={{ marginTop: "23px", marginLeft: "110px" }}
          >
            Opt-in
          </button>
        </div>
        <p style={{ marginLeft: "-155px", fontWeight:"bold" }}>
          Latest news delivered right to your inbox! Your information will be
          kept confidential.
        </p>
      </div>
      <div className="con d-flex flex-row-reverse">
        <h4 style={{ fontWeight: "bold" }}>Connect</h4>
      </div>
        <div className="d-flex flex-row-reverse" style={{marginTop:"43px",marginRight:"46px"}}>
          <a href="/">
            <img className="icon1" src="icon1.gif" alt="" />
          </a>
          <a href="/">
            <img className="icon1" src="icon2.gif" alt="" />
          </a>
          <a href="/">
            <img className="icon1" src="icon3.gif" alt="" />
          </a>
          <a href="/">
            <img className="icon1" style={{ border:"2px solid white"}} src="icon4.png" alt="" />
          </a>
          <a href="/">
            <img className="icon1" src="icon5.gif" alt="" />
          </a>
        </div>
    </>
  );
}
