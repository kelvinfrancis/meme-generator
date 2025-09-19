import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/11")
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, []);

  return (
    <>
      <pre>{JSON.stringify(starWarsData)}</pre>
      {/* <Header />
      <Main /> */}
    </>
  );
}
