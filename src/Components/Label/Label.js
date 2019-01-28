import React from 'react';

const Label = (props) => {
  return (
    <div id={props.idName}>
      {props.labelName}
    </div>

  );
};

export default Label;