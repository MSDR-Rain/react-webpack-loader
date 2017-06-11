import  React, {Component} from 'react';
import styles from "./app.scss";
import Goods from "../Goods";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>
          Hello, Ya.
        </h1>
        <Goods />
      </div>
    );
  }
}

export default App;