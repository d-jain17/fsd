import React from 'react'
import player from './player.png'
import {useState} from "react";
export const Imagemanipulation = () => {
    const [height, setHeight] = useState(150);
    const [width, setWidth] = useState(150);
    const [bg, setBg] = useState("pink");
    const [rotation, setAngle] = useState(0);
    function increaseHeight(){
        setHeight(height+50)
    }
    function increaseWidth(){
        setWidth(width+50)
    }
    function changeBg(){
        setBg("lightblue")
    }
    function changeAngle(){
        setAngle(rotation+30)
    }
  return (
    <div>
        <div style={{border: '2px solid red',marginLeft: '200px',marginRight: '200px',marginTop:'10px',backgroundColor:`${bg}`}}>
            <img style={{marginLeft: '200px',marginRight: '200px',transform: `rotate(${rotation}deg)`,transition: `transform 0.3s ease`}}src={player} height={height} width={width} />
        </div>
        <div style={{marginTop: '150px'}}>
            <button onClick={increaseHeight}>Enhance height </button> &nbsp;&nbsp;&nbsp;
            <button onClick={increaseWidth}>Enhance width</button>&nbsp;&nbsp;&nbsp;
            <button onClick={changeAngle}>rotate</button>&nbsp;&nbsp;&nbsp;
            <button onClick={changeBg} >background color</button>&nbsp;&nbsp;&nbsp;

        </div>
    </div>
  )
}
export default Imagemanipulation;
