import React, { cloneElement } from 'react';
import { Link } from 'react-router';

const Main = ({ ...props }) => (
  <div>
    <h1>
      <Link to='/'>Reduxstagram</Link>
    </h1>
    {cloneElement(props.children, props)}
  </div>
)

export default Main;
