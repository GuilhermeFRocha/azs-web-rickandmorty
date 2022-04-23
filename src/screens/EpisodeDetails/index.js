import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODE_BY_ID } from "../../graphql/queries";
import { useLocation } from "react-router-dom";
import Load from "../../Components/Load";
import Error from "../../Components/Error";
import Style from "./episodeDetails.module.css";

function EpisodeDetails() {
  const location = useLocation();
  const id = location.pathname.replace("/", "");
  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      id: id,
    },
  });

  if (loading) return <Load />;
  if (error) return <Error />;

  return (
    <div>
      <div className={Style.containerDesc}>

      <div key={data.episode.id} className={Style.desc}>
        <p> Episode number:</p>
        <p>{data.episode.episode}</p>
      </div>

      <div  className={Style.desc}>
        <p>Episode name:</p>
        <p>{data.episode.name}</p>
      </div>

      <div  className={Style.desc}>
        <p>Date:</p>
        <p>{data.episode.air_date}</p>
      </div>

        <p  className={Style.desc}>Characters:</p>
      </div>

      <div  className={Style.container}> 
        {data.episode.characters.map((item) => (
          <>
              <div className={Style.contentCard}>
                <span className={Style.imgCard}>
                  <img src={item.image} alt="image-characters" />
                </span>
                <ul className={Style.list}>
                  <li>Name: {item.name}</li>
                  <li>Specie: {item.species}</li>
                  <li>Status: {item.status}</li>
                </ul>
              </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default EpisodeDetails;
