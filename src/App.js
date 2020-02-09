import React from "react";
import "./App.scss";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag firstName="Peter" lastName="Peterson"></NameTag>
        <NameTag firstName="John" lastName="Johnson"></NameTag>
        <NameTag firstName="Mary" lastName="Maryson"></NameTag>
      </header>
    </div>
  );
}

export default App;
