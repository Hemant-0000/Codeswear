import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs'
import Link from 'next/link'


const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl mx-32'>1. Delivery Details</h2>
      <div className='mx-32 flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="mx-32">
        <div className="px-2 w-full">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" cols="30" rows="2"></textarea>
        </div>
      </div>

      <div className='mx-32 flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='mx-32 flex my-2'>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="phone" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className='mx-32 my-3'>
        <h2 className='font-semibold text-xl my-2'>2. Review Cart Items & Pay</h2>
        <div className="sideCart text-black bg-gray-300 rounded-md px-8 py-4">
          <ol className='list-decimal font-semibold'>
            {(Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your cart is empty!</div>)}
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className="item flex my-3">
                  <div className='font-semibold'>{cart[k].name}</div>
                  <div className='w-1/3 font-semibold flex items-center justify-center'><AiOutlineMinusCircle className='mx-3 cursor-pointer' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} /> {cart[k].qty} <AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-3 cursor-pointer' /></div>
                </div>
              </li>
            })}
          </ol>
          <span className="total font-bold">Subtotal: {subTotal}</span>
        </div>
        <div className="mx-1 my-2">
          <Link passHref href={'/checkout'}>
            <button className="flex mr-2 text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded text-sm">Pay ₹ {subTotal}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout