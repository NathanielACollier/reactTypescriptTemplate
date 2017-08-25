import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ButtonCounter } from './components/ButtonCounter.tsx';


ReactDOM.render(
  <ButtonCounter ref={ component => this.reactComponent = component }/>,
  document.querySelector('#app') as HTMLElement
);

/*
ReactDOM.render((
  <h1>Hello World!</h1>
), document.querySelector('#app'));
*/

