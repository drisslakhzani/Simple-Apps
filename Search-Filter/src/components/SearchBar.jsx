import React, { useState } from 'react'
import list from './data'
import Resulte from './Result'


function SearchBar() {
    const [cherche,setData]=useState({search:""})
    const [filtered,setFiltered]=useState([])
      console.log(...cherche.search)

      //for filtring the data & select the chosen ones
    function handleFilter(){
       const listes= list.filter((a)=>a.type==cherche.search)
       setFiltered(listes)
    }
    return (
      <form className=' p-4 bg-blue-800 h-fit duration-200 w-2/6 text-white text rounded-lg' >
        <section className='flex flex-col items-start p-2'>
          <h1 className=' text-2xl text-white'>SearchBar</h1>
          <span className='flex flex-row justify-between items-center'>
            <input className='rounded-md h-8 text-black p-2 ' type="text" name='search' onChange={(event)=>{setData(Preview=>({...Preview,[event.target.name]:[event.target.value]}))}} value={cherche.search}  />
            <button className="p-4 ml-10 rounded-lg duration-200 bg-blue-500 hover:bg-blue-300"type='button' onClick={handleFilter}  >clicker</button>
          </span>
        </section>
        <Resulte types={filtered}/>
      </form>
    
  )
}

export default SearchBar