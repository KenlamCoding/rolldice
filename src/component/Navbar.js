import React from 'react';
export default function Navbar(props) {
  return (
    <nav className = "flex justify-center space-x-4 bg-slate-800 w-auto h-20" >
      <button 
      className = "rounded-md m-2 bg-tran text-xl text-white p-5 h-15 hover:bg-slate-200 hover:text-black"
      onClick = {
        () => props.start(props.gameMode[0])
      } >幸運骰</button>
      <button 
        className = "rounded-md m-2 bg-tran text-xl text-white p-5 h-15 hover:bg-slate-200 hover:text-black"
        onClick = {
          () => props.start(props.gameMode[1])
        } >大話骰
        </button>
        <button 
        className = "rounded-md m-2 bg-tran text-xl text-white p-5 h-15 hover:bg-slate-200 hover:text-black"
        onClick = {
          () => props.start(props.gameMode[2])
        } >紅黑單雙大細
        </button>
    </nav>
  )
}