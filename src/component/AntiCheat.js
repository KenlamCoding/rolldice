import React from "react"

export default function AntiCheat(props){
    return (
        <div  className = "w-screen flex justify-center" >
                {props.mode === props.gameMode[1]&&<div className = "bg-slate-200 p-3 mx-auto inline-block">last update: {props.timestamp}</div>}
         </div >
    )
}