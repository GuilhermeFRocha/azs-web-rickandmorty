import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Load from "../../Components/Load/index";
import Error from "../../Components/Error";
import Style from "../../Components/Card/card.module.css";
import Styles from './pageEpisodes.module.css'
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_EPISODES } from "../../graphql/queries";

function PageEpisodes({ searchParams }) {
  const [page, setPage] = useState(1);
  const [ showFavourites, setShowFavourites ] = useState(false)


  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: page,
    },
  });

  if (loading) return <Load />;
  if (error) return <Error />;
  const prevEpisodes = data.episodes.info.prev;
  const nextEpisodes = data.episodes.info.next;

  function filteredDataNameEpisode(data2) {
    return data2.episodes.results
      .filter(
        (episode) =>
          episode.name.toLowerCase() === searchParams?.toLocaleLowerCase()
      )
      .map((item) => (
        <>
          <div key={item.id} className={Styles.containerSearch}>
            <div className={Style.content}>
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
          </div>
        </>
      ));
  }

  const filtred = filteredDataNameEpisode(data);

  if (filtred.length) {
    return filtred;
  }

  return (
    <div>
      <div className={Styles.episodes}>
        <h1 className={Styles.title}>List of episodes</h1>
        <button className={Styles.buttonFav} type="button" onClick={() => setShowFavourites(!showFavourites)}>{showFavourites ? 'Show all' : 'Show Favourites'}</button>
      </div>


      <div className={Styles.container}>
        <Card data={data} showFavourites={showFavourites} />
      </div>

      {!showFavourites && (
        <div className={Styles.whapper}>
          <Button
            type="button"
            disabled={!prevEpisodes}
            onClick={() => setPage(page - 1)}
            style={{ position: "relative" }}
          >
            prev
          </Button>

          <Button
            type="button"
            disabled={!nextEpisodes}
            onClick={() => setPage(page + 1)}
            style={{ position: "relative" }}
          >
            next
          </Button>
        </div>
     )}
      {filtred}
    </div>
  );
}

export default PageEpisodes;