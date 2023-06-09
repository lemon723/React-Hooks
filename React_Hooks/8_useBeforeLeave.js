import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event; // moseEvent의 객체
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const dontLeave = () => console.log("Plz don't leave");
  useBeforeLeave(dontLeave);
  return (
    <div className="App">
      <div>Hello</div>
      {/* 나중에 커서이동시 div내용 변경 기능도 가능 */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
