import React from "react";
import "./css-components/slidercompo.css";

function SliderCompo() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              id="img"
              src="./images/charity.jpg"
              className="d_block"
              alt="chaves"
            />

            <div className="carousel-caption d-none d-md-block">
             
              <p>YOU CAN MAKE THE DIFFRENCE !</p>
              <button className="btn mt-4 btn-success  ">
                <a href="/contact" className="link">
                  Donate
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              id="img"
              src="./images/poors.jpg"
              className="d_block"
              alt="rainier"
            />

            <div className="carousel-caption d-none d-md-block">
              <h3>BECAUSE THEY NEED YOUR HELP</h3>
              <p>DO NOT LET THEM DOWN </p>
              <button className="btn mt-4 btn-success donate-butn ">
                <a href="/contact" className="link">
                  Donate
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              id="img"
              src="./images/poor-happiness.jpg"
              className="d_block"
              alt="claudia-raya-ClEsjummC6w-unsplash"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>TOGETHER WE CAN IMPROVE THEIR LIVES</h3>
              <p>SO LET'S DO IT ! </p>
              <button className="btn mt-4 btn-success donate-butn ">
              <a href="/contact" className="link">
                Donate
              </a>
            </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SliderCompo;
