
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
});

const GET_CONTINENTS = gql`
  {
    continents{
      name,
      code
    }
  }`;

const GET_CONTINENT_DETAILS = gql`
  query continent($code: String) {
    continent(code: $code){
      name,
      code
    }
  }`;

export { client, GET_CONTINENTS, GET_CONTINENT_DETAILS };