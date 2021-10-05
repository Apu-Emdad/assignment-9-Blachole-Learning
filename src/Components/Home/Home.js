import React, { useEffect, useState } from "react";
import "./Home.css";
import image from "./images/bg-image.jpg";

const Home = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("./popular.json")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="home-container bg-secondary">
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <div class="col-6 col-md-6 text-left text-light">
              <h2>Blackhole Learning</h2>
              <h5>Enroll our courses</h5>

              <h6>
                and make your future{" "}
                <span className="text-danger fw-bold fs-1">BRIGHT</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quidem a illum voluptates asperiores eum sint ullam alias
                doloribus saepe ipsam impedit autem deleniti cumque incidunt
                itaque ab, at repudiandae nam tempore inventore nesciunt. Magnam
                corrupti eaque ab consequuntur sit quam quo recusandae quas,
                asperiores saepe minima magni odit cum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-intro  ">
        <h1 className="text-warning text-center">Our Popular Services</h1>

        <div>
          <div className="row row-cols-2 row-cols-md-3 g-4">
            {popular.map((p) => (
              <div className="col">
                <div className=" course bg-dark h-100">
                  <img src={p.img} alt="" className="img-fluid" /> <br />
                  <h5 className="text-light ">{p.name}</h5>
                  <p className="text-light">{p.description}</p>
                  <button className="d-block mx-auto btn btn-danger px-3">
                    Purchase: ${p.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* {popular.map((p) => (
            <div className="course bg-dark">
              <img src={p.img} alt="" className="img-fluid" /> <br />
              <h5 className="text-light ">{p.name}</h5>
              <p className="text-light">{p.description}</p>
              <button className="mx-auto btn btn-danger px-3">
                Purchase: ${p.price}
              </button>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
