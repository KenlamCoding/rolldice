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
const GAMEMODE =  ["LUCKY", "LIAR","REDBLACK"];
const ELIMINATE = ["red","black",  "odd","even","big",  "small" ];
function App() {

  const [mode, setModel] = useState(GAMEMODE[0])
  const [dices, setDice] = useState([{
    id: useId(),
    value:1,
    select: false,
    eliminate:false
  }, {
    id: useId(),
    value: 2,
    select: false,
    eliminate:false
  }, {
    id: useId(),
    value: 3,
    select: false,
    eliminate:false
  }, {
    id: useId(),
    value: 4,
    select: false,
    eliminate:false
  }, {
    id: useId(),
    value: 5,
    select: false,
    eliminate:false
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
function reset(){
  setDice((currentDices) => {
    return currentDices.map(dice => {
      let tempNum = 1 + Math.random() * (6 - 1)
      tempNum = Math.floor(tempNum)
      return {
        ...dice,
        value: tempNum,
        select:false,
        eliminate:false

      }
    })
  })
}
  function rollAllDices(){
    setDice((currentDices)=>{
      return currentDices.map(dice=>{
        let tempNum = 1 + Math.random() * (6 - 1)
        tempNum = Math.floor(tempNum)
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

  function removeDice(action){
      //After remove the Dice, the dice will be rolled
      switch (action) {
        case ELIMINATE[0]:
            setDice((currentDices) => {
              return currentDices.map(dice => {
                let tempNum = 1 + Math.random() * (6 - 1)
                if (checkRed(dice.value) === ELIMINATE[0] && !dice.eliminate) {
                  return {
                    ...dice,
                    eliminate: !dice.eliminate
                  }
                }
                return dice
              })
            })
          break;
        case ELIMINATE[1]:
          
          setDice((currentDices) => {
            return currentDices.map(dice => {
              if (checkRed(dice.value) === ELIMINATE[1]&& !dice.eliminate) {
                return {
                  ...dice,
                  eliminate: !dice.eliminate
                }
              }
              return dice
            })
          })
          break;
        case ELIMINATE[2]:
          setDice((currentDices) => {
            return currentDices.map(dice => {
              if (checkEven(dice.value) === ELIMINATE[2]&& !dice.eliminate) {
                return {
                  ...dice,
                  eliminate: !dice.eliminate
                }
              }
              return dice
            })
          })
          break;
        case ELIMINATE[3]:
          setDice((currentDices) => {
            return currentDices.map(dice => {
              if (checkEven(dice.value) === ELIMINATE[3]&& !dice.eliminate) {
                return {
                  ...dice,
                  eliminate: !dice.eliminate
                }
              }
              return dice
            })
          })
          break;
        case ELIMINATE[4]:
           setDice((currentDices) => {
            return currentDices.map(dice => {
              if (checkMoreThenThree(dice.value) === ELIMINATE[4]&& !dice.eliminate) {
                return {
                  ...dice,
                  eliminate: !dice.eliminate
                }
              }
              return dice
            })
          })
          break;
        case ELIMINATE[5]:
          setDice((currentDices) => {
            return currentDices.map(dice => {
              if (checkMoreThenThree(dice.value) === ELIMINATE[5]&& !dice.eliminate) {
                return {
                  ...dice,
                  eliminate: !dice.eliminate
                }
              }
              return dice
            })
          })
          break;
        default:
          console.log("Actions cannot be detected");
          return dices
      }
      console.log(action);
      console.log(dices);
  }
  
  function checkRed(value){
    var tempValue=parseInt(value)
    if (value === 1 || value === 4) return ELIMINATE[0];
    return ELIMINATE[1];
  }

  function checkEven(value) {
    var tempValue = parseInt(value)
    if (tempValue % 2 === 0) return ELIMINATE[3];
    return ELIMINATE[2];
  }

  function checkMoreThenThree(value) {
    var tempValue = parseInt(value)
    if (tempValue > 3) return ELIMINATE[4];
    return ELIMINATE[5];
  }

  return ( 
      <div className = "bg-slate-700  h-screen" >
        <Navbar mode={mode} setModel={setModel} start={start} gameMode={GAMEMODE}/>
        <Content  
          dices={dices}  
          gameMode={GAMEMODE} 
          mode={mode} 
          eliminate={ELIMINATE}
          
          toggle = {toggleDice} 
          rollAllDices={rollAllDices} 
          rollspecificDices={rollspecificDices}
          removeDice={removeDice}
          reset={reset}
        />
        <AntiCheat mode={mode} gameMode={GAMEMODE} timestamp={timestamp}/>
      </div>
  )
}

export default App;
