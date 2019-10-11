import React from "react";
import "./App.scss";
import NameTag from './components/nameTag';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag name="Peter">Peter</NameTag>
        <NameTag name="Paul">Paul</NameTag>
        <NameTag name="Mary">Mary</NameTag>
      </header>
    </div>
  );
}

export default App;
