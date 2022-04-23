import React from "react";
import Style from "../Card/card.module.css";
import { useNavigate } from 'react-router-dom';


const Card = ({ data }) => {
  
  const navigate = useNavigate();

  function handleClick(item) {
    navigate(`/${item}`)
  }

  return data.episodes.results.map((item) => (
    <>
      <div onClick={() => handleClick(item.id)} className={Style.content}>
        <span key={item.id} className={Style.data}>
          <p> Episode number:</p>
          <p>{item.episode}</p>
        </span>

        <span className={Style.data}>
          <p>Episode name:</p>
          <p>{item.name}</p>
        </span>

        <span className={Style.data}>
          <p>Date:</p>
          <p>{item.air_date}</p>
        </span>

        <span className={Style.person}>
          <p>Number of characters:</p>
          <p>{item.characters.length}</p>
        </span>
      </div>
    </>
  ));
};

export default Card;
