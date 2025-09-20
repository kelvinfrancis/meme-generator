import Header from "./components/Header";
import Main from "./components/Main";
// import WindowTracker from "./components/WindowTracker";
// import { useState, useEffect } from "react";

export default function App() {
  // const [show, setShow] = useState(true);

  // function toggleShow() {
  //   setShow((prevShow) => !prevShow);
  // }

  return (
    <>
      <Header />
      <Main />
      {/* <div>
        <button onClick={toggleShow}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </div> */}
    </>
  );
}
