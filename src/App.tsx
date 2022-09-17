import { useState } from "react";

import { Tools } from "./types/main";

import "./styles.css";

const App = () => {
  const [tool, setTool] = useState<Tools>(Tools.jwt);

  return (
    <div className="">
      <div>Menu</div>
      <div>{tool}</div>
    </div>
  );
};

export default App;
