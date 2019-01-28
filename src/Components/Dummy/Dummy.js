import React from 'react';
import {Link} from 'react-router-dom';

const Dummy = (props) => {
  return (
    <div>
      Hello, {props.name}
      <Link to='/dummy'>Dummy</Link>
      <Link to='/really'>really</Link>
      <Link to='/'>Home</Link>

    </div>
  );
};

export default Dummy;