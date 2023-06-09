import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  // onLine : 브라우저가 네트워크에 더 이상 연결할 수 없을 때마다 갱신
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      //componentWillUnmount => remove 실행
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "It's Online State" : "It's Offline state");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
      <p>Welcome</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
