/*
* Details also included in the same page, in order to demo the throttling,
* usually we can route to details page as separate route and show the details
* */
import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Navbar, ListGroup, NavbarBrand } from 'react-bootstrap';
import { client, GET_CONTINENTS, GET_CONTINENT_DETAILS } from '../Queries';
import ContinentDetails from "./ContinentDetails";

class Continents extends React.Component{
  
  constructor(){
    super();
    this.state = {code:''}
  }
  
  handleClick(code, e){
    this.setState({code:code});
  }
  
  _renderSubComp(){
    const { code } = this.state;
    if(code) {
      return <ContinentDetails code={code}/>
    }
  }
  
  render() {
    return(
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar>
            <NavbarBrand>My App</NavbarBrand>
          </Navbar>
          <h4>Continents</h4>
          <ListGroup>
            <Query query={GET_CONTINENTS}>
              { ({loading, error, data}) => {
                  if(loading) return 'Loading...';
                  if(error) return 'Error...';
                  console.log("data", data);
                  const { continents } = data;
                  console.log("cont", data);
                  return continents.map(continent =>
                    <ListGroup.Item key={continent.code} onClick={() => this.handleClick(continent.code)}>{continent.name}</ListGroup.Item>
                  )
            
                }
            
              }
            </Query>
            
          </ListGroup>
        </div>
        {this._renderSubComp()}
      </ApolloProvider>
    );
  }
}

export default Continents;