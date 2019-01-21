import React from 'react'

export default ({title, description, published}) =>
  <div>
    <p>{title}</p>
    <p>{description ? description : <i>No Description</i>}</p>
    <p>{published}</p>
  </div>
