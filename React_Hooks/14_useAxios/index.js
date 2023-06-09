import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{loading && "Loading"}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
