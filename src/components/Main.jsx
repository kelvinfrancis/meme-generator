import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "Top text meme",
    bottomText: "Bottom text meme",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange() {
    console.log("Hola")
  }
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" onChange={handleChange}/>
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>

        <button>Get a new meme image 🖼️</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
