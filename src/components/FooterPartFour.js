import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterPartFour() {
  return (
    <div className="container-fluid pt-5">
      <div className="col-12 text-light">
        <h5>Subscribe to our Newsletter</h5>
        <form action="https://formspree.io/f/mjvqvwzw" method="POST">
          <p>"*" indicates required fields</p>

          <label className="mt-2">
            Your Email:
            <input className="w-100" type="email" name="email" />
          </label>
          <label className="mt-2 ">
            Message:
            <textarea  className="w-100" type="text" name="message" />
          </label>

          <br />
          <button type="submit" className="btn btn-dark mt-2 ml-2">
            Send
          </button>
        </form>
        <h5>Follow us</h5>
        <div className="col-12">
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default FooterPartFour;
