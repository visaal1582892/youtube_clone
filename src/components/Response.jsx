import React from 'react'
import { useSelector } from 'react-redux'

const Response = () => {

    // using the selector to retrieve the response state
    const status=useSelector((state)=>state.response.status);
    const msg=useSelector((state)=>state.response.msg);

  return (
    <section className={`${status=="ideal"?"hidden":"animate-revealing"} flex fixed top-[20vh] right-0 w-[80%] sm:w-sm ${status=="success"?"bg-green-500":"bg-red-600"} text-white text-lg p-2 rounded-md m-1 z-60`}>
        {msg}
        <section className={`flex absolute top-[100%] w-[100%] ${status=="success"?"bg-red-500":"bg-green-600"} text-white text-lg h-[4px] right-0 rounded-md animate-timing`}></section>
    </section>
  )
}

export default Response