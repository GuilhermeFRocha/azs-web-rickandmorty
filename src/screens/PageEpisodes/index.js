import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Style from "../../global.module.css";
import Load from "../../Components/Load/index";
import Error from "../../Components/Error";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_EPISODES } from "../../graphql/queries";

function PageEpisodes() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: page,
    },
  });

  if (loading) return <Load />;
  if (error) return <Error />;
  const prevEpisodes = data.episodes.info.prev;
  const nextEpisodes = data.episodes.info.next;

  return (
    <div>
      <h1 className={Style.title}>List of episodes</h1>

      <div className={Style.container}>
        <Card data={data} />
      </div>

      <div className={Style.whapper}>
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
    </div>
  );
}

export default PageEpisodes;
