import Style from "./global.module.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import PageEpisodes from "./screens/PageEpisodes";
import EpisodeDetails from "./screens/EpisodeDetails";
import FormSearch from "./Components/FormSearch";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
     
        <div className={Style.header}>
          <Header />

          <FormSearch searchParams={search} setSearchParams={setSearch} />
        </div>
        <Routes>
          <Route path="/" element={<PageEpisodes searchParams={search} />} />
          <Route path="/:id" element={<EpisodeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
