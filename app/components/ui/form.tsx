import { orderPlaced } from '@/app/actions'
import React from 'react'

function Form() {
  return (
    <form action={orderPlaced} className='text-black'>
      <input type="text" name='boughtBy' id='boughtBy' value={'boughtBy'}/>
      <input type="text" name='productId' id='productId' value={'productId'}/>
      <input type="number" name='quantity' id='quantity' value={1}/>
      <button>submit</button>
    </form>
  )
}

export default Form