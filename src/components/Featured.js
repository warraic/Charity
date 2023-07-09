import React from "react";
import "./css-components/featured.css";
function Featured() {
  return (
    <div className="container  section-area">
      <h1 className="text-center text-dark">
        FEATURED <span className="text-success">CAUSES</span>
      </h1>
      <div className="container ">
        <div className="row ">
          {/* section one */}
          <div className=" mt-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="full  ">
              <div className="upper"></div>

              <div className="down  ">
                <div className="cover-inner ">
                  <div className="head">
                    <div className="left"></div>
                    <div className="right"></div>
                  </div>
                  <div className="percentage">40%</div>
                </div>

                <div className="down-second px-4 py-4">
                  <div className="float-start text-center">
                    <p>Loreum ipsum</p>
                  </div>
                  <div className="float-end  text-center">
                    <p>Loreum ipsum</p>
                  </div>
                </div>

                <div className="text-center ">
                  <p className=" px-3  ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                  <a href="/contact">
                    <button type="button" className="btn btn-dark  mb-3">
                      Donate Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* section two */}
          <div className=" mt-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="full  ">
              <div className="upper"></div>

              <div className="down  ">
                <div className="cover-inner">
                  <div className="head">
                    <div className="left"></div>
                    <div className="right"></div>
                  </div>
                  <div className="percentage">40%</div>
                </div>

                <div className="down-second px-4 py-4">
                  <div className="float-start text-center">
                    <p>Loreum ipsum</p>
                  </div>
                  <div className="float-end  text-center">
                    <p>Loreum ipsum</p>
                  </div>
                </div>

                <div className="text-center ">
                  <p className=" px-3  ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                  <a href="/contact">
                    <button type="button" className="btn btn-dark  mb-3">
                      Donate Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* section three */}
          <div className=" mt-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="full  ">
              <div className="upper"></div>

              <div className="down  ">
                <div className="cover-inner">
                  <div className="head">
                    <div className="left"></div>
                    <div className="right"></div>
                  </div>
                  <div className="percentage">40%</div>
                </div>

                <div className="down-second px-4 py-4">
                  <div className="float-start text-center">
                    <p>Loreum ipsum</p>
                  </div>
                  <div className="float-end  text-center">
                    <p>Loreum ipsum</p>
                  </div>
                </div>

                <div className="text-center ">
                  <p className=" px-3  ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                  <a href="/contact">
                    <button type="button" className="btn btn-dark  mb-3">
                      Donate Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* section four */}
        </div>
      </div>
    </div>
  );
}

export default Featured;
