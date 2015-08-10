import React from 'react';
import { Root as Rater } from './containers/Root';

const displaySelected = (() => {
  const e = document.createElement('output');
  document.body.appendChild(e);

  return (selected) => {
    e.innerHTML = `${selected}<br />is selected`;
  };
}());


for (let i = 0; i < 10; i++ ) {
  const e = document.createElement('div');
  document.body.appendChild(e);
  React.render(<Rater onSelect={displaySelected} />, e);
}
