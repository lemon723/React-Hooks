import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
