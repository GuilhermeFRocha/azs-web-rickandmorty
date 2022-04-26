import React, { useRef, useState } from "react";
import Style from "../Card/card.module.css";
import Icon from '@mdi/react'
import { mdiHeart, mdiHeartOutline } from '@mdi/js'
import { useNavigate } from 'react-router-dom';


function Card ({ data, showFavourites })  {
  const favRef = useRef()
  const navigate = useNavigate(); 
  const [isFavourite, setIsFavourite] = useState({})


  function handleClick(item) {
    navigate(`/${item}`)
  }

  function handleSetFavourite(key){
    setIsFavourite((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }))
  }

  return data.episodes.results.map((item) => (
    showFavourites ? (
      isFavourite[item.id] && (
        <>
          <div
            onClick={(event) => {
              const preventTarget = event.target.localName === 'path' || event.target.localName === 'svg'
              if(!preventTarget){
                handleClick(item.id)
              }
            }}
            className={Style.content}
          >
            <Icon 
              className="favIcon"
              ref={favRef}
              path={isFavourite[item.id] ? mdiHeart : mdiHeartOutline}
              size={1}
              color="#5622f4"
              onClick={() => handleSetFavourite(item.id)}
            />
              
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

            <span className={Style.data}>
              <p>Number of characters:</p>
              <p>{item.characters.length}</p>
            </span>
            
          </div>
        </>
      )
    ) : (
      <>
        <div
          onClick={(event) => {
            const preventTarget = event.target.localName === 'path' || event.target.localName === 'svg'
            if(!preventTarget){
              handleClick(item.id)
            }
          }}
          className={Style.content}
        >
          <Icon 
            className="favIcon"
            ref={favRef}
            path={isFavourite[item.id] ? mdiHeart : mdiHeartOutline}
            size={1}
            color="#5622f4"
            onClick={() => handleSetFavourite(item.id)}
          />
          
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

          <span className={Style.data}>
            <p>Number of characters:</p>
            <p>{item.characters.length}</p>
          </span>
        </div>
      </>
    ))
  )}

export default Card;
