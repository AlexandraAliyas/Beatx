import React from 'react'

const Button3 = (props) => {
  return (
    <>


      {/* :BIG BUTTON 3 */}
      
      <button onClick={props.fun1} className="m-5 w-80 group relative items-center px-7 py-3.5 rounded shadow-lg outline-none text-lg text-black font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 bg-gradient-to-t from-blue-200 to-indigo-900 active:top-0.5 focus:outline-none grid">
        {props.mood}
        
        {/* button::after */}
        <span className="absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-800 via-indigo-200 to-indigo-800 transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180" aria-hidden="true"/>
      </button>
    

    </>
  )
}

export default Button3