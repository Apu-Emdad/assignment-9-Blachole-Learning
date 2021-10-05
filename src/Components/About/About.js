import React from "react";
import image from "./images/bg-image.jpg";
const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="d-flex mt-5 justify-content-center">
          <h1>About Us</h1>
        </div>
        <section class="hero-banner py-5 mt-3">
          <div class="container">
            <div class="row row align-items-center">
              <div class="col-lg-5 offset-lg-1 order-lg-1">
                <img src={image} class="img-fluid" alt="Web Development" />
              </div>
              <div class="col-lg-6">
                <h1 class="mt-3">
                  Welcome To The <br /> Blackhole Learning Management System{" "}
                </h1>
                <p class="lead  my-5">
                  A posuere donec senectus suspendisse bibendum magna ridiculus
                  a justo orci parturient suspendisse ad rhoncus cursus ut
                  parturient viverra elit aliquam ultrices est sem. Tellus nam
                  ad fermentum ac enim est duis facilisis congue a lacus
                  adipiscing consequat risus consectetur scelerisque integer
                  suspendisse a mus integer elit massa ut. Nam vehicula
                  malesuada lectus, interdum fringilla nibh. Duis aliquam vitae
                  metus a pharetra. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec fermentum augue..
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
