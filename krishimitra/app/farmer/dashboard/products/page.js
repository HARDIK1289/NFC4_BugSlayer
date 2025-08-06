import React from 'react'

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className='bg-red-500 text-white p-4 rounded mb-4'>
        WebPage is Under construction. Please visit again later
      </h1>
      <img 
        src="/under-construction-gif-11.gif" 
        alt="Under construction" 
        className="max-w-md"
      />
    </div>
  )
}

export default UnderConstructionPage