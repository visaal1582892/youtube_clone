import React, { useState } from 'react'
import HomeVideoGrid from './HomeVideoGrid'


const Home = () => {

  return (
    <main className='w-[100%] flex'>
        <HomeVideoGrid className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full md:w-[94%] md:ml-[6%]"/>
    </main>
  )
}

export default Home