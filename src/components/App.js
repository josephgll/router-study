import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Writers from './Writers';
import NotFound from './Errors/404'
import Layout from './Layout'


class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount(){
    const writers = await(await fetch("http://localhost:3001/writers?_embed=texts")).json();

    this.setState({writers});
  }

  render() {
    const {writers} = this.state;

    return (
      <BrowserRouter>
        <Layout writers={writers}>
          <Switch>
            <Route path="/" render={()=>(<div>Home</div>)} exact />
            <Route path="/writers" render ={
              props => <Writers {...props} writers={writers} />
            } />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
