import "./index.css"
import backgroundImg from "./images/Fundo.png"
import mandrakeNormalImg from "./images/mandragora_normal.png"
import mandrakeClickImg from "./images/mandragora_click.png"
import { useState } from "react";

function App() {
  
  const [p1Score, setP1Score] = useState(0)
  const [p2Score, setP2Score] = useState(0)
  const [currTimerId, setCurrTimerId] = useState(null)
  const [fastIncrement, setFastIncrement] = useState(0)
  const [mandrakeP1Img, setMandrakeP1Img] = useState(mandrakeNormalImg)
  const [mandrakeP2Img, setMandrakeP2Img] = useState(mandrakeNormalImg)

  const mandrakeSound = new Audio("./sounds/mandrake_scream.mp3")
  const score4Sound = new Audio("./sounds/avada_kedavra.mp3")
  //const victorySound = new Audio("./sounds/win_song.mp3")

  const SCORE_DELAY_MS = 500

  function endTimer(fastIncValue) {
    switch(fastIncValue) {
      case 1:
        console.log("PLAYED 1 SOUND")
        break
      case 2:
        console.log("PLAYED 2 SOUND")
        break
      case 3:
        console.log("PLAYED 3 SOUND")
        break
      case 4:
        console.log("PLAYED 4 SOUND")
        score4Sound.play()
        break
      default:
        console.log("PLAYED 1 SOUND")
    }
    setFastIncrement(0)
  }

  function increaseP1Score(increment) {
    setP1Score(p1Score+increment)
    if (increment > 1) {
      return
    }
    if (currTimerId !== null) {
      clearTimeout(currTimerId)
    }
    const fastIncValue = fastIncrement+1
    setFastIncrement(fastIncrement+1)
    const timerId = setTimeout(() => {
      endTimer(fastIncValue)
    }, SCORE_DELAY_MS)
    setCurrTimerId(timerId)


  }
  function increaseP2Score(increment) {
    setP2Score(p2Score+increment)
    if (increment > 1) {
      return
    }
    if (currTimerId !== null) {
      clearTimeout(currTimerId)
    }
    const fastIncValue = fastIncrement+1
    setFastIncrement(fastIncrement+1)
    const timerId = setTimeout(() => {
      endTimer(fastIncValue)
    }, SCORE_DELAY_MS)
    setCurrTimerId(timerId)
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
        <img src={mandrakeP1Img} className="mandrakeLeft" onClick={mandrakeP1} alt="Mandrake"/>
        <img src={mandrakeP2Img} className="mandrakeRight" onClick={mandrakeP2} alt="Mandrake"/>
      </div>
    </>
  )
}

export default App;
