import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx'

class App extends React.Component {
  render (){
    return( 
        <div>
          <h1>Welcome <small>to my app</small> </h1>
          <h2>mensaje</h2>
          <h2>Hello React</h2>
          <AwesomeComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
