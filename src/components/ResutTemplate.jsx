import React from 'react'

const ResutTemplate = ({ result }) => {
  if (!result) {
    return null
  }

  const { img, response } = result
  return (
    <div className='custom-shadow w-[300px] h-[220px] my-10 p-5'>
      <img
        src={img}
        alt='SHE ACCEPTED'
        className='w-[100px] h-[100px] mx-auto'
      />

      <h3 className='text-lg text-rose-500 text-center font-bold'>
        {response}
      </h3>

      <p className='text-[10px] text-zinc-400 text-center italic mt-4'>
        Designed and Developed by Ridwan
      </p>
    </div>
  )
}

export default ResutTemplate
