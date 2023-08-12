import React from "react"
import Dice from "./Dice";

export default function Content(props){
    return(<><div  className = 'bg-slate-200  text-lg p-3 mx-auto w-100 text-center' >{props.mode}</div>
        <div className = "DicesArea   grid grid-cols-2 gap-2 place-items-center max-w-sm mx-auto my-20 " >{
            props.dices && props.dices.map((showDice, index) => {
              return <div key={index}>
                <label>
                  {props.mode===props.gameMode[0]&& <button id={showDice.id} onClick={e=>props.toggle(showDice.id)} className='dnone'></button>}
                  <Dice id = { showDice.id } value = { showDice.value } select = { showDice.select } mode={props.mode} />
                </label>
              </div>
            })}
          {props.mode === props.gameMode[0] && (<button  className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' onClick={props.rollspecificDices}  title="Select dice first">Roll</button>)}
          {props.mode === props.gameMode[1] && (<button className='dice text-xl font-bold text-white bg-slate-800 hover:text-black hover:bg-slate-200' onClick={props.rollAllDices}>Roll</button>)}
        </div></>)
}