import React from 'react';
import {Link, Route} from 'react-router-dom'
import NotFound from '../Errors/404'
import Text from './Text'

export default ({match: {url},name, description, image, texts}) =>
<div>
  <img src={image} alt={name} style={{maxWidth: 300}}/>
  <p>  {name}</p>
  <p>{description}</p>
  <ul>
    {texts.map(({id, title})=>
      <li>
        <Link to={`${url}/texts/${id}`}>{title}</Link>
      </li>)}
  </ul>

  <Route path={`${url}/texts/:textId`} render={props=>{
    const text = texts.find(({id}) => id === props.match.params.textId)

    if(!text){
      return <NotFound />
    }

    return <Text {...text} />
  }} />
</div>
