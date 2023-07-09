import React from "react";
import FooterPartOne from "../components/FooterPartOne";
import FooterPartTwo from "../components/FooterPartTwo";
import FooterPartThree from "../components/FooterPartThree";
import FooterPartFour from '../components/FooterPartFour'
function Footer() {
  return (
    <div className="pb-3 mt-5" style={{ backgroundColor: "green" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
            <FooterPartOne />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <FooterPartTwo/>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
            <FooterPartThree />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <FooterPartFour />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
