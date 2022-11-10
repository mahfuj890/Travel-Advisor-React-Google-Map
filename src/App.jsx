import { useState } from "react";
import "./App.scss";
import Header from "./Component/Header/Header";
import List from "./Component/List/List";
import Map from "./Component/Map/Map";

function App() {
  return (
  <div className="App">
  <Header />
  <div className="map_grid">
    <div className="grid_left_area">
      <List />
    </div>
    <div className="map_area">
      <Map />
    </div>
  </div>

  </div>
  );
}

export default App;
