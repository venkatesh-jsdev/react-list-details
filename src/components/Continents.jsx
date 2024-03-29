/*
* Details also included in the same page, in order to demo the throttling,
* usually we can route to details page as separate route and show the details
* */
import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Navbar, ListGroup, NavbarBrand } from 'react-bootstrap';
import { client, GET_CONTINENTS } from '../Queries';
import ContinentDetails from "./ContinentDetails";
import { throttle } from "throttle-debounce";

class Continents extends React.Component{
  
  constructor(){
    super();
    this.state = {code:''};
    this.detailsThrottled = throttle(500, this._renderSubComp);
  }
  
  handleClick(code, e){
    this.setState({code:code}, () => {
      this.detailsThrottled(code);
    });
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
                  const { continents } = data;
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