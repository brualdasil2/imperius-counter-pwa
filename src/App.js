import "./index.css"
import backgroundImg from "./images/Fundo.png"
import mandrakeNormalImg from "./images/mandragora_normal.png"
import mandrakeClickImg from "./images/mandragora_click.png"
import { useState } from "react";

function App() {
  
  const [p1Score, setP1Score] = useState(0)
  const [p2Score, setP2Score] = useState(0)
  const [mandrakeP1Img, setMandrakeP1Img] = useState(mandrakeNormalImg)
  const [mandrakeP2Img, setMandrakeP2Img] = useState(mandrakeNormalImg)

  const mandrakeSound = new Audio("./sounds/mandrake_scream.mp3")

  function increaseP1Score(increment) {
    setP1Score(p1Score+increment)
  }
  function increaseP2Score(increment) {
    setP2Score(p2Score+increment)
  }
  async function mandrakeP1() {
    increaseP1Score(3)
    setMandrakeP1Img(mandrakeClickImg)
    mandrakeSound.play()
    await new Promise(r => setTimeout(r, 2000));
    setMandrakeP1Img(mandrakeNormalImg)
  }
  async function mandrakeP2() {
    increaseP2Score(3)
    setMandrakeP2Img(mandrakeClickImg)
    mandrakeSound.play()
    await new Promise(r => setTimeout(r, 2000));
    setMandrakeP2Img(mandrakeNormalImg)
  }

  return (
    <>
      <div className="backImg" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="p1Area">
          <button className="counterButton" onClick={() => increaseP1Score(1)}>{p1Score}</button>
        </div>
        <div className="p2Area">
          <button className="counterButton" onClick={() => increaseP2Score(1)}>{p2Score}</button>
        </div>
        <img src={mandrakeP1Img} className="mandrakeLeft" onClick={mandrakeP1}/>
        <img src={mandrakeP2Img} className="mandrakeRight" onClick={mandrakeP2}/>
      </div>
    </>
  )
}

export default App;
