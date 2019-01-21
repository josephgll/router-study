import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom'
import Writer from '../Writer'
import NotFound from '../Errors/404'

export default ({match: {url},writers}) =>
  <div>
    <ul>
      {writers.map(({id, name}) =>
      <li key = {id}><Link to={`${url}/${id}`}>{name}</Link></li>)}
    </ul>

    <Route exact path={`${url}`} render={()=> <h3>Please select writer from above.</h3>} />
    <Route path={`${url}/:writerId`} render={props=>{
      const writer = writers.find(writer => writer.id === props.match.params.writerId)

      if (!writer){
        return <NotFound />
      }

      return <Writer {...props} {...writer} />
    } } />
  </div>
