import React,{Component} from "react";
import "./App.css";
import Counter from "./Counter";
//function App() {
class App extends Component{
  render() {
  return (
    <div className="App">
     <h1>This is our first react app </h1>
     <Counter />
    </div>
  );
  }
}

export default App;
