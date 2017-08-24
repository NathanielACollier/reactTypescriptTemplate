'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class ReactApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { start: 0, counter: 0 }
  }
  
  render() {
    return (
      <div style={{ border: 'solid green 2px', margin: '2px' }}>
        <h2>Here is in React</h2>
        <div>
          <span>Counter: { this.state.start + this.state.counter }</span>
          <button onClick={ e => this.handleClick(e) }>Click Me!</button>
        </div>
      </div>
    );
  }
  
  
  handleClick() {
    const newCounter = this.state.counter + 1
    this.setState({ counter: newCounter })
  }
  

}


ReactDOM.render(
  <ReactApp ref={ component => this.reactComponent = component }/>,
  document.getElementById('reactHost') as HTMLElement
);