import React, { useState } from 'react'

export default function TikTackTOe() {
    const [game ,setGame] = useState()
    const [game1 ,setGame1] = useState()
    const [game2 ,setGame2] = useState()
    const [game3 ,setGame3] = useState()
    const [game4 ,setGame4] = useState()
    const [game5 ,setGame5] = useState()
    const [game6 ,setGame6] = useState()
    const [game7 ,setGame7] = useState()
    const [game8 ,setGame8] = useState()

  return (
    <div >
        <div>
            <div>
            <button onClick={() => setGame("0")}>{game}</button>
          <button onClick={() => setGame1("X")}>{game1}</button>
          <button onClick={() => setGame2("0")}>{game2}</button>
            </div>
          
          <div>
          <button onClick={() => setGame3("X")}>{game3}</button>
          <button onClick={() => setGame4("0")}>{game4}</button>
          <button onClick={() => setGame5("X")}>{game5}</button>
          </div>
          
          <button onClick={() => setGame6("0")}>{game6}</button>
          <button onClick={() => setGame7("X")}>{game7}</button>
          <button onClick={() => setGame8("0")}>{game8}</button>
        </div>
    </div>
  )
}
