import React from "react";

function FooterPartOne() {
  return (
    <div className="container-fluid pt-5">
      <div className="col-12 text-light">
        <h5>
          Charity Community
          <br />
          Cancer Support
        </h5>
      </div>
      <div className="col-12 mt-4">
        <div className="">
          <img
            src="https://www.acet-uk.com/sites/acet.circle-interactive.co.uk/files/styles/inline/public/FR%20Fundraising%20Badge%20WO%20HR.png?itok=jjnRBzdv"
            alt="charity-Support"
            height="30px"
          />
        </div>
      </div>
      <div className="col-12  text-light  mt-4">
        <p> Safe Payments by:</p>
        <div className="">
          <img
            src="./images/favpng_visa-debit-card-credit-card-logo-mastercard.png"
            alt="vise-two"
            height="35px"
          />
          <img
            src="./images/favpng_visa-debit-card-credit-card-logo-mastercard.png"
            alt="visa-three"
            height="35px"
          />
          <img
            src="./images/favpng_visa-debit-card-credit-card-logo-mastercard.png"
            alt="visaa-four"
            height="35px"
          />
          <img
            src="./images/favpng_visa-debit-card-credit-card-logo-mastercard.png"
            alt="visa-five"
            height="35px"
          />
        </div>
      </div>
      <div className="col-12 p-3 mt-4">
        <button type="button" className="btn  btn-dark">
          Donate
        </button>
      </div>
    </div>
  );
}

export default FooterPartOne;
