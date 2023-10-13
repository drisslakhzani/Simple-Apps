import React from 'react'

function Resulte(props) {
const gg = props.types.map((a)=><li className='bg-blue-400 m-3 p-3 rounded'>{a.nom}</li>)

  return (
    <div className='flex flex-col justify-start'>
        <h1  className=' text-2xl text-white'>Result</h1>
        <div>
            <ul className='flex flex-row flex-wrap'>
              {gg}
            </ul>
        </div>
    </div>
  )
}

export default Resulte
