import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import ListData from './data/ListData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List Data</h1>
        <ListData />
      </div>
    );
  }
}

export default App;
