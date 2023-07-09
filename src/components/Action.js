import React, { useState } from "react";
import "./css-components/action.css";

function Action() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([name, phone, address]);
    window.alert("Register Successfully");
  };

  return (
    <div className="container px-5 py-5">
      <div className="row parrrent-compo">
        <div className="wrap px-3 py-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <button
            type="button"
            className="btn "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <div className="back-wrapper">
              <div className="Action-image w-100 mt-2 p-2 mb-2">
                <img
                  src="./images/hands.png"
                  alt="hands"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="w-100 mt-2 p-2 mb-2">
                <h5>BE A VOLUNTEER</h5>
                <p>Play your part in serving the community. Sign up</p>
              </div>
            </div>
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h4 className="text-center text-success">Donate Now</h4>

                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="w-100 mt-2"
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      placeholder="Enter User Name"
                      value={name}
                      required
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      className="w-100 mt-2"
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      placeholder="Enter Phone no"
                      value={phone}
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      className="w-100 mt-2"
                      onChange={(e) => setAddress(e.target.value)}
                      name="address"
                      placeholder="Enter Address"
                      value={address}
                      autoComplete="off"
                    />

                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-success mt-3"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Action;
