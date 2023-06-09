import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

//https://developer.mozilla.org/ko/docs/Web/API/notification

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Notification", {
    body: "Can I steal your Kimchi?",
  });
  return (
    <div className="App" style={{ height: "1000px" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
