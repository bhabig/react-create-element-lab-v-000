import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
/*
ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
*/
let interests = ['JavaScript', 'React', 'Movies', 'Ice cream'];

let interestElements = interests.map(i =>
  React.createElement('li', {}, i)
);

let hOne = React.createElement('h1', {}, 'An Awesome Person');
let p = React.createElement('p', {}, 'Who is learning React');
let ul = React.createElement('ul', {className: "my-interests"}, interestElements);

let meInReact = React.createElement('div', {className: "me"}, [
  hOne,
  p,
  ul
]);

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact;
