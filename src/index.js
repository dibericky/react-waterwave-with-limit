import React from "react";
import ReactDOM from "react-dom";

import WaterWaveWithLimit from "./WaterWaveWithLimit";
import "./styles.css";

function App() {
  return (
    <WaterWaveWithLimit
      colorOverLimit={"#f00"}
      colorUnderLimit={"#0f0"}
      colorLineLimit={"#3335"}
      value={50}
      max={200}
      size={300}
      limit={150}
      title={"Titolo"}
    />
  );
}
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
