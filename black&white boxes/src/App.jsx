import './App.css';
import boxes from './boxes';
import { useState } from 'react';
import Boxie from './Boxie';
function App() {
  const [contact,setContact]=useState(boxes)
  function toggleColor(id){
   
    setContact(prevS=>{
        return prevS.map((a)=>(a.id===id?{...a,on:!a.on}:a))
          
        // const newSquires=[]
        // for (let i =0;i<prevS.length;i++){
        //     const currentSquire=prevS[i]
        //     if (currentSquire.id===id){
        //       const updatedSquare ={
        //         ...currentSquire,on:!currentSquire.on
        //       }
        //       newSquires.push(updatedSquare)
        //     }else{
        //       newSquires.push(currentSquire)
        //     }
        // }
        // return newSquires
    } )
    
  }
  let box=contact.map(
    (a)=>(
    <Boxie theId={a.id} isOn={toggleColor} isValue={a.on} id={a.id}/>)
  )
  return (
    <div className='dis' >
      {box}
    </div>
    
  )
};
export default App;
