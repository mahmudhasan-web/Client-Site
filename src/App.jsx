import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const handleProduct = (e)=>{
    e.preventDefault()
    const from = e.target
    const name = from.name.value
    const price = from.price.value
    const image = from.image.value
    const details = from.details.value
    const ratting = from.ratting.value
    const info = {name,price,image,details,ratting}
    console.log(info);

    axios.post('http://localhost:3000/product', info)
    .then(res=>{
      console.log(res);
      
    })
    .catch(err=>{
      console.log(err);
      
    })
    
  }

  return (
    <>
      <div className='w-1/2 mx-auto border-2 rounded-xl p-5'>
        <h1 className='text-4xl text-center font-bold my-5'>Add Your Product</h1>
        
        <form onSubmit={handleProduct} className='space-y-5'>
        <div className='w-1/2 mx-auto text-xl'>
          <label htmlFor="">Enter Product Name:</label>
          <input type="text" name='name' className='w-full rounded-xl border-2 p-1' />
        </div>
          <div className='w-1/2 mx-auto text-xl'>
            <label htmlFor="">Enter Product Price:</label>
            <input type="text" name='price' className='w-full rounded-xl border-2 p-1' />
          </div>
          <div className='w-1/2 mx-auto text-xl'>
            <label htmlFor="">Enter Product Image Url:</label>
            <input type="text" name='image' className='w-full rounded-xl border-2 p-1' />
          </div>
          <div className='w-1/2 mx-auto text-xl'>
            <label htmlFor="">Enter Product Details:</label>
            <input type="text" name='details' className='w-full rounded-xl border-2 p-1' />
          </div>
          <div className='w-1/2 mx-auto text-xl'>
            <label htmlFor="">Enter Product Ratting:</label>
            <input type="text" name='ratting' className='w-full rounded-xl border-2 p-1' />
          </div>
          <div className='w-1/2 mx-auto text-xl'>
            <button className='btn w-full btn-primary my-5'>Add Product</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
