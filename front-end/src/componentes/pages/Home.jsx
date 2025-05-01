import React from 'react'
import Item from '../item'

const Home = () => {
  return (
     <section>
    <div className='mx-auto max-w-7xl grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] p-8 gap-8'>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  </section>
  )
}

export default Home