import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropup } from "react-icons/io";

const Accordian = () => {

const [selected, setSelected] = useState(null)
const [multi, setMulti] = useState([])
const [enableMulti, setEnableMulti] = useState(false)

const AccordData =[
  {id:'1',
  question:'Do you need any extra thing?',
  answer:'No, I dont think than I shall need any extra thing'},
  {id:'2',
  question:'Where is Google Situated?',
  answer:'It is situated in Silicon Valley in USA'},
  {id:'3',
  question:'What have you learnt so far?',
  answer:'I have learnt many things but unfortuantely I dont have any expertise in any of that and I am ashamed of that InshaAllah I will achieve some expertise level in Ramadan'},
  {id:'4',
  question:'can Ai replace Human?',
  answer:'No, I dont think so Logical persons will always be there for the recue'}
]
 
const handleSingalSelect =(uniqueID)=>{
  if(selected===uniqueID){
    setSelected(null)
  }
  else{
    setSelected(uniqueID)
    

  }
}
const handleMultiSelection=(uniqueID)=>{
  let availableIndexes = [...multi];
   const getCurrentIndex = availableIndexes.findIndex((element)=>element===uniqueID)
   if(getCurrentIndex===-1){
     availableIndexes.push(uniqueID)
   }
 else 
   availableIndexes.splice(getCurrentIndex,1);
   setMulti(availableIndexes)


}


  return (
        <div className='h-[100vh]  w-full bg-slate-950 '>
       <div className="flex  flex-col justify-center transition-all duration-700 mx-auto  md:w-1/2 items-center h-full">
        <button 
        className={`my-4 p-3 rounded-md ${enableMulti?'bg-blue-600':''} hover:bg-blue-600 hover:scale-110 transition-all duration-200 transform ease-in bg-blue-950 text-white`}
        onClick={()=>setEnableMulti(!enableMulti)}>Enable Mutli Selection</button>

          <div className="wrapper  ">
            {AccordData.map((item)=>{
              return <div  onClick={enableMulti? ()=> handleMultiSelection(item.id): ()=> handleSingalSelect(item.id)} className="container  cursor-pointer p-6 flex-col gap-4 shadow-lg rounded-md hover:bg-blue-900 transition-all duration-300 ease-in-out bg-blue-950 flex text-white my-3 w-80 max-w-80">
                <div className="questionare gap-4   flex justify-between">
                  <div  className="question transition-all ease-in-out duration-1000" key={item.id}>{item.question}</div>
                  <span className={`${selected===item.id || multi.findIndex((element=>element===item.id)) !== -1?'rotate-180':''} transition ease-out duration-500` }><IoIosArrowDown/></span>
                  </div>
                  
                  {selected===item.id || multi.findIndex((element=>element===item.id)) !== -1?<div className='answer transition-all ease-in-out duration-1000'>{item.answer}</div>:null}

                 
              </div>
            })}
            </div>  


       </div>
       </div>

    
  )
}

export default Accordian