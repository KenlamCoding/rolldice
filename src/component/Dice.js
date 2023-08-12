import React from 'react';
import "../asset/dice.css"
export default function Dice({
    id,
    value,
    select,
    mode
}) {
    function showDice(number){
        var temp = parseInt(value)
        switch (temp) {
            case 1:
                return (<div className ={select&&mode==="LUCKY"?'dice firstFace select':'dice firstFace '}  id={id}><span className = "dot"> </span> </div>);
            case 2:
                return ( <div  className =  {
                            select&&mode==="LUCKY" ? "dice secondFace select" : "dice secondFace "
                        }  id={id}>
                            <span className="dot"> </span>
                            <span className="dot"> </span>
                        </div>);
            case 3:
                return ( <div className={select&&mode==="LUCKY" ? "dice thirdFace select" : "dice thirdFace "
                        }  id={id}>
                            <span className="dot"> </span>
                            <span className="dot"> </span>
                            <span className="dot"> </span>
                        </div>);
            case 4:
                return (<div className = {select&&mode==="LUCKY" ? "dice fourthFace select" : "dice fourthFace "} id={id}>
                            <div className="col">
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                            
                            <div className="col">
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                            
                        </div>);
            case 5:
                return (<div className={select&&mode==="LUCKY"?"dice fifthFace select":"dice fifthFace"} id={id}>
                            <div className="col">
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                            <span className="dot"> </span>
                            <div className="col">
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                        </div>);
            case 6:
                return(<div className={select&&mode==="LUCKY" ? "dice sixthFace select" : "dice sixthFace"} id={id}>
                            <div  className = "col" >
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                            <div  className = "col" >
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                        </div>);
            default:
                console.log("not in 1-6");
        }

    }
    return(
        <>
            {
                showDice({value})
            }
        </>
    )
}