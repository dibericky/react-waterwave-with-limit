import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Slider} from 'antd'

import WaterWaveWithLimit from "./WaterWaveWithLimit";
import "./styles.css";

function App() {
  const [value, setValue] = useState(50)
  const [limit, setLimit] = useState(150)

  const MAX = 200
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
    <WaterWaveWithLimit
      colorOverLimit={"#f00"}
      colorUnderLimit={"#0f0"}
      colorLineLimit={"#3335"}
      value={value}
      max={MAX}
      size={300}
      limit={limit}
      title={"Titolo"}
    />
     <div style={{padding: 10}}>
        <span>{'Limit'}</span><Slider max={MAX} defaultValue={limit} onChange={setLimit} />
        <span>{'Value'}</span><Slider  max={MAX} defaultValue={value} onAfterChange={setValue} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />,  document.getElementById("root"));
