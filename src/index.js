import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './TodoContainer';

class App extends React.Component {
  render() {
    return <TodoContainer />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
