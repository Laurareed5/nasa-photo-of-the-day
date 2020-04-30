import React from "react";
import { Jumbotron, Button } from "reactstrap";
import styled from "styled-components";

const NasaCard = (props) => {
    return (
      <div className="title-class" key={props.nData.url}>
        <h2>{props.nData.title}</h2>
        <div className="image-class">
          <img src={props.nData.url}></img>
          <h1 className="display-3">{props.nData.title}</h1>
          <p className="lead">{props.nData.explanation}</p>
          <hr className="my-2" />
          <p>{props.nData.date}</p>
          <p className="lead"></p>
        </div>
      </div>
    );
}



export default NasaCard;