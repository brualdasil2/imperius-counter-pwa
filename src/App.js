import "./index.css"
import backgroundImg from "./images/Fundo.png"
import { useState } from "react";

function App() {
  
  const [p1Score, setP1Score] = useState(0)
  const [p2Score, setP2Score] = useState(0)

  function increaseP1Score() {
    setP1Score(p1Score+1)
  }
  function increaseP2Score() {
    setP2Score(p2Score+1)
  }

  return (
    <>
      <div className="backImg" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="p1Area">
          <button className="counterButton" onClick={increaseP1Score}>{p1Score}</button>
        </div>
        <div className="p2Area">
          <button className="counterButton" onClick={increaseP2Score}>{p2Score}</button>
        </div>
      </div>
    </>
  )
}

export default App;
