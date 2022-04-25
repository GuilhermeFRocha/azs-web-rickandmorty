import Card from "../../Components/Card";
import Button from "../../Components/Button";
import StyleCard from "../../global.module.css";
import Load from "../../Components/Load/index";
import Error from "../../Components/Error";
import Style from "../../Components/Card/card.module.css"
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_EPISODES } from "../../graphql/queries";


function PageEpisodes() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
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
        (episode) => episode.name.toLowerCase() === search.toLocaleLowerCase()
      )
      .map((item) => (
        <>
          <div key={item.id} className={Style.container}>
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
          <button onClick={()=> setSearch('')}>return</button>
        </>
      ));
  }

  const filtred = filteredDataNameEpisode(data);

  if (filtred.length) {
    return filtred;
  }

  return (
    <div>

<form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search'
        />
      
      </form>

      <h1 className={StyleCard.title}>List of episodes</h1>

      <div className={StyleCard.container}>
        <Card data={data} />
      </div>

      <div className={StyleCard.whapper}>
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
      {filtred}
    </div>
  );
}

export default PageEpisodes;
