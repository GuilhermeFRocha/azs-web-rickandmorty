import Style from "./global.module.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { ApolloClient, InMemoryCache} from "@apollo/client";
import PageEpisodes from "./screens/PageEpisodes";
import EpisodeDetails from "./screens/EpisodeDetails";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <div className={Style.image}></div>
      <Header />
      <Routes>
      <Route path="/" element={ <PageEpisodes />} />
      <Route path="/:id" element={<EpisodeDetails/>} />

     
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
