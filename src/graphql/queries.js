import {
  gql,
} from "@apollo/client"

const GET_ALL_EPISODES = gql`
  query ($page: Int!) {
    episodes(page: $page) {
      info {
        count
        next
        prev
        pages
      }
      results {
        id
        name
        air_date
        episode
        characters {
          name
        }
      }
    }
  }
`;

const GET_EPISODE_BY_ID = gql `
query ($id: ID!) {
episode (id: $id){
  name
  air_date
  episode
  
  characters{
    name
    species
    status
    image
  }
}
}
`;

export {GET_ALL_EPISODES,GET_EPISODE_BY_ID }