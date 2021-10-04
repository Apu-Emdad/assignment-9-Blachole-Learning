import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { name, description, img, price } = props.course;
  return (
    <div className="course bg-dark">
      <img src={img} alt="" className="img-fluid" /> <br />
      <h5 className="text-light ">{name}</h5>
      <p>{description}</p>
      <button className="mx-auto btn btn-danger px-3">
        Purchase: ${price}
      </button>
    </div>
  );
};

export default Service;
