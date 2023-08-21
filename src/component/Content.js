import React from "react"
import Dice from "./Dice";

export default function Content(props){
    return(<div>
              <div className = 'bg-slate-200  text-lg p-3 mx-auto w-100 text-center' >
                {props.mode === props.gameMode[0]?
                <div>Select dices first</div>:
                <div>Don't cheat ah</div>}
              </div>
        
            <div className = "DicesArea grid grid-cols-3 gap-2 place-items-center max-w-sm mx-auto my-20 " >{
                props.dices && props.dices.map((showDice, index)=>{
                  return <div key={index}>
                    <label>
                      {props.mode===props.gameMode[0]&& <button id={showDice.id} onClick={e=>props.toggle(showDice.id)} className='dnone'></button>}
                      
                      <Dice id = {showDice.id}
                      value = {showDice.value}
                      select = {showDice.select}
                      eliminate = {showDice.eliminate}
                      mode = {props.mode}/>
                    </label>
                  </div>
                })}
              
              

            </div>
            {
              props.mode === props.gameMode[0] &&<div className = "DicesArea grid grid-cols-2 gap-1 place-items-center max-w-sm mx-auto my-20 " >
              {(<button  className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' onClick={props.rollAllDices}  title="Select dice first">Reset</button>)}
              {(<button  className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' onClick={props.rollspecificDices}  title="Select dice first">Roll</button>)}
              </div>
            }
            {
              props.mode === props.gameMode[1] &&<div className = "DicesArea grid grid-cols-1 gap-1 place-items-center max-w-sm mx-auto my-20 " >
              {(<button className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' onClick={props.rollAllDices}>Roll</button>)}
            </div>
            }
            <div className = "DicesArea grid grid-cols-4 gap-1 place-items-center max-w-sm mx-auto my-20 " >
              
              {props.mode === props.gameMode[2] && (<button className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' onClick={props.reset} title="New Game">Reset</button>)}
              {props.mode === props.gameMode[2] && (<button className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' onClick={props.rollAllDices} title="NewRound">Roll</button>)}
              {props.mode === props.gameMode[2] && 
              props.eliminate.map((eAction, index) => 
              <button className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' 
              onClick={()=>{props.removeDice(props.eliminate[index])}} title="NewRound">{eAction}</button>)}
            </div>
            
      </div>
        )
}