import React from "react";


function NonProfitTeam() {
  return (
    <div className=" mt-5  profitable-Team ">
      <div className="row  m-0  w-100" >
        <div className=" p-0 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12 " style={{height:"70vh"}}>
          <img className="img-fluid"
            src="./images/rainier-ridao-CmqDCnI_ByM-unsplash.jpg"
            alt="charity"
            width="100%"
            style={{height:"70vh"}}
          />
        </div>

        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12   bg-success  text-light" style={{height:"70vh"}}>
          <div className="container mt-5">
            <h1>
              WE ARE
              <br />
              NONPROFIT TEAM
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn btn-dark"> Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonProfitTeam;
