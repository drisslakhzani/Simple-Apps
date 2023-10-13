import React, { useEffect, useState } from 'react'
import list from './data'
import Resulte from './Result'


function SearchBar() {
    const [cherche,setData]=useState({search:"" , isRight:true , isShown:false})
    const [filtered,setFiltered]=useState([])
      console.log(...cherche.search)

      //for filtring the data & select the chosen ones
    useEffect(()=>{
      let Checked=cherche.search=="fruit"||cherche.search=="legume"
       Checked&&setData(prevState=>({...prevState,isShown:!prevState.isShown}))
       console.log(cherche.isShown)
    },[filtered])
    
      function handleFilter(){
      let listes=[]
      let Checked=cherche.search=="fruit"||cherche.search=="legume"
      Checked? listes= list.filter((a)=>a.type==cherche.search):setData(prevState=>({...prevState,isRight:!prevState.isRight}));
       setFiltered(listes)
    }
    return (
      <form className=' p-4 bg-blue-800 h-fit duration-200 w-2/6 text-white text rounded-lg' >
        <section className='flex flex-col items-start p-2'>
          <h1 className=' text-2xl text-white'>SearchBar</h1>
          <span className='flex flex-row justify-between items-center'>
            <div>
              <input className='rounded-md h-8 text-black p-2 ' type="text" name='search' onChange={(event)=>{setData(Preview=>({...Preview,[event.target.name]:[event.target.value]}))}} value={cherche.search}  />
              {!cherche.isRight&&<p className='text-red-600'>Enter the right keyword</p>}
            </div>
            
            <button className="p-4 ml-10 rounded-lg duration-200 bg-blue-500 hover:bg-blue-300"type='button' onClick={handleFilter}  >clicker</button>
          </span>
        </section>
        {cherche.isShown&&<Resulte types={filtered}/>}
      </form>
    
  )
}

export default SearchBar