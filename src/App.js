import React, { Component } from "react";
import "./App.css";
import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";
import Tabs from "./state/Tabs";
import Accordion from "./state-drills/Accordion";

const tabsProp = [
  { name: "First tab", content: "Lorem ipsum" },
  { name: "Second tab", content: "Laboriosam exercitationem" },
  { name: "Third tab", content: "Fugit, sapiente aspernatur" },
];
const sectionsProps = [
  { title: "Section 1", content: "Lorem ipsum dolor" },
  { tilte: "Section 2", content: "Cupiditate tenetur aliquam" },
  { title: "Section 3", content: "Animi amet cumque sint" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME1</h1>
        <Accordion sections={sectionsProps} />
        <Tabs tabs={tabsProp} />
        <RouletteGun />
        <Bomb />
        <HelloWorld newButton={("World", "React", "Friends")} />
        <Counter count={123} />
        <TheDate />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
      </div>
    );
  }
}

export default App;
