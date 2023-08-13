import React from 'react'
import {
  useState,
  useId,
  useEffect
} from "react";
import Dice from "./component/Dice";
import Navbar from './component/Navbar';
import Content from './component/Content';
import AntiCheat from './component/AntiCheat';
const GAMEMODE =  ["LUCKY", "LIAR"]
function App() {

  const [mode, setModel] = useState(GAMEMODE[0])
  const [dices, setDice] = useState([{
    id: useId(),
    value:1,
    select: false
  }, {
    id: useId(),
    value: 2,
    select: false
  }, {
    id: useId(),
    value: 3,
    select: false
  }, {
    id: useId(),
    value: 4,
    select: false
  }, {
    id: useId(),
    value: 5,
    select: false
  }
])
  const currentDate = new Date();
  const [timestamp, setTimestemp] = useState(String(currentDate.getHours()).padStart(2, '0') + ":" + String(currentDate.getMinutes()).padStart(2, '0') + ":" + String(currentDate.getSeconds()).padStart(2, '0'))

useEffect(()=>{
  setTimestemp(String(currentDate.getHours()).padStart(2, '0') + ":" + String(currentDate.getMinutes()).padStart(2, '0') + ":" + String(currentDate.getSeconds()).padStart(2, '0'))
},[dices])
function start(nowMode){
  setModel(nowMode);
}

  function rollAllDices(){
    setDice((currentDices)=>{
      return currentDices.map(dice=>{
        let tempNum = 1 + Math.random() * (6 - 1)
        return {
          ...dice,
          value: tempNum
        }
      })
    })
  }

  function toggleDice(index){
    setDice((currentDices)=>{
      return currentDices.map(dice=>{
        if (dice.id === index) {
            return {...dice, select: !dice.select}
        }
        return dice
      })
    })
  }

  function rollspecificDices(){
    setDice(currentDices => currentDices.map(dice => {
      if (dice.select) {
        let tempNum = 1 + Math.random() * (6 - 1)
        return {
          ...dice,
          select:false,
          value: tempNum
        }
      }
      return dice;
    }))
    
  }

  return ( 
      <div className = "bg-slate-700  h-screen" >
        <Navbar mode={mode} setModel={setModel} start={start} gameMode={GAMEMODE}/>
        <Content  dices={dices}  gameMode={GAMEMODE} mode={mode} toggle = {toggleDice} rollAllDices={rollAllDices} rollspecificDices={rollspecificDices}
        />
        <AntiCheat mode={mode} gameMode={GAMEMODE} timestamp={timestamp}/>
      </div>
  )
}

export default App;
