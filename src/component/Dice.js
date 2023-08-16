import React from 'react';
import "../asset/dice.css"
export default function Dice({
    id,
    value,
    eliminate,
    select,
    mode,

}){
    function showDice(number){
        var temp = parseInt(value)
        switch (temp) {
            case 1:
                /*show dice if the eliminate is not true when the user play the redblackgame */
                if (mode === "REDBLACK") {
                    return (!eliminate&&<div className ='dice firstFace' id={id}><span className = "dot"></span></div>);
                }
                return (<div className ={select&&mode==="LUCKY"? 'dice firstFace select':'dice firstFace'} id={id}><span className = "dot"></span></div>);
            case 2:
                if (mode === "REDBLACK"){
                    return (!eliminate&&<div className ='dice secondFace' id={id}>
                        <span className="dot"> </span>
                        <span className="dot"> </span>
                    </div>);
                }
                return (<div  className =  {
                            select&&mode==="LUCKY" ? "dice secondFace select" : "dice secondFace "
                        }  id={id}>
                            <span className="dot"> </span>
                            <span className="dot"> </span>
                        </div>);
            case 3:
                if (mode === "REDBLACK"){
                    return (!eliminate && 
                        <div className = 'dice thirdFace'
                            id = {
                                id
                            } >
                        <span className="dot"> </span>
                        <span className="dot"> </span>
                        <span className="dot"> </span>
                    </div>);
                }
                return (<div className={select&&mode==="LUCKY" ? "dice thirdFace select" : "dice thirdFace "
                        }  id={id}>
                            <span className="dot"> </span>
                            <span className="dot"> </span>
                            <span className="dot"> </span>
                        </div>);
            case 4:
                 if (mode === "REDBLACK"){
                    return (!eliminate && 
                        <div  className = 'dice fourthFace'
                            id = {
                                id
                            } >
                        <div className="col">
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                            
                            <div className="col">
                                <span className="dot"> </span>
                                <span className="dot"> </span>
                            </div>
                    </div>);
                }
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
                if (mode === "REDBLACK"){
                    return (!eliminate && 
                        <div className = 'dice fifthFace'
                            id = {
                                id
                            } >
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
                }
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
                if (mode === "REDBLACK"){
                    return (!eliminate && 
                        <div  className = 'dice sixthFace'
                            id = {
                                id
                            } >
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
                }
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