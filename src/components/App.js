import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';


class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount(){
    const writers = await(await fetch("http://localhost:3004/writers")).json();

    this.setState({writers});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="Writers">Writers</Link></li>
          </ul>

          <Route path="/" render={()=>(<div>Home</div>)} exact />
          <Route path="/writers" render={()=>(<div>Writers</div>)} />

          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
