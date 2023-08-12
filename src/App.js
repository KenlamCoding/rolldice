
import {
  React,
  useState,
  useId
} from "react";
import Dice from "./component/Dice";
const GAMEMODE = 
  ["LUCKY", "LIAR"]
;
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
  }, {
    id: useId(),
    value: 6,
    select: false
  },
]);

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
    let tempIndex = parseInt(index)
    setDice((currentDices)=>{
      return currentDices.map(dice=>{
        if (dice.id === tempIndex) {
            return {...dice, select: !dice.select}
        }
        return dice
      })
    })
    console.log(dices)
  }

  function rollspecificDices(){
    setDice(currentDices => currentDices.map(dice => {
     
      if (dice.select) {
        let tempNum = 1 + Math.random() * (6 - 1)
        return {
          ...dice,
          value: tempNum
        }
      }
      return dice;
    }))
  }

  return (
    <div className="App">
      <div>
        {mode}
      </div>
      <div className="DicesArea">
          {
            dices && dices.map((showDice, index)=>{
              return <div key={index}>
                      <label>
                        {mode===GAMEMODE[0]&& <button id={showDice.id} onClick={e=>toggleDice(showDice.id)}></button>}
                       
                        < Dice id = {
                          showDice.id
                        }
                        value = {
                          showDice.value
                        }
                        select = {
                          showDice.select
                        }
                        mode={mode}
                        />
                      </label>
                    </div>
            })
          }
      </div>
      <div>
        <button onClick = {()=>start(GAMEMODE[0])} >幸運 </button>
        <button  onClick={()=>start(GAMEMODE[1])}>大話</button>
      </div>
      
      <button>Reset</button>
        {mode === GAMEMODE[0]&&(<button onClick={rollspecificDices}>Lucky Roll</button>)}
        {mode === GAMEMODE[1]&&(<button onClick={rollAllDices}>Liar Roll</button>)}

    </div>
  );
}

export default App;
