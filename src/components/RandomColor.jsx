import React from 'react'
import { useState,useEffect } from 'react'
const RandomColor = () => {

    const [color, setColor] = useState('#000000')
    const [colorType, setColorType] = useState('hex')

    function randomUtility(length){
        return Math.floor(Math.random() * length) 
    }
    function handleRGBColor(){
        let R = randomUtility(256);
        let G = randomUtility(256);
        let B = randomUtility(256);
        setColor(`rgb(${R},${G},${B})`)
        setColorType('RGB')
    }
    function handleHexColor(){
        let hexArray=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let initial = '#';
        for (let index = 0; index < 6; index++) {
         initial += hexArray[randomUtility(hexArray.length)];
            
        }
        console.log(initial)
        setColor(initial);
        setColorType('hex')
    }
  return (
    <>
    <div className="mx-auto h-[100vh] w-full transition-all"
    style={{
        background: color,
    }}>
        <div className="buttons flex justify-center gap-4">
        <button className='rounded-md hover:p-3 transition-all text-white border-white border-2 p-2  my-2 ' onClick={handleRGBColor}>RGB</button>
        <button className='rounded-md text-white  transition-all hover:p-3  border-white border-2 p-2  my-2 ' onClick={handleHexColor}>HEX</button>
        </div>
        <div className="showcolor flex justify-center flex-col items-center gap-3 my-[15rem] text-white" >
            <h3 className='text-3xl'>{colorType===`hex`?`HEX`:`RGB`}</h3>
            <h1>{color}</h1>
            
        </div>
    </div>
    </>
  )
}

export default RandomColor