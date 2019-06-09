import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Navbar, ListGroup, NavbarBrand } from 'react-bootstrap';
import { client, GET_CONTINENT_DETAILS } from '../Queries';
import PropTypes from 'prop-types';


class ContinentDetails extends React.Component{
  
  render() {
    return(
      <ApolloProvider client={client}>
          <h4>Details</h4>
          <ListGroup>
            <Query query={GET_CONTINENT_DETAILS} variables={{code:this.props.code}}>
              { ({loading, error, data}) => {
                  if(loading) return 'Loading...';
                  if(error) return 'Error...';
                  console.log("data", data);
                  const { continent } = data;
                  
                return <h1>{continent.name}</h1>
            
                }
            
              }
            </Query>
          </ListGroup>
      </ApolloProvider>
    );
  }
}

ContinentDetails.protoTypes = {
  code: PropTypes.string.isRequired
}

export default ContinentDetails;