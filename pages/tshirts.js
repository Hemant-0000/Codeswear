import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from "mongoose";


const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className='text-center font-bold font-mono mx-auto mt-5 text-4xl'>Wear The Code</h1>
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {
              return <Link key={item.slug} passHref href={`/product/${item.slug}`}><div className="lg:w-1/5 cursor-pointer shadow-lg m-5 md:w-1/2 p-4 w-full">
                <a className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src={item.img} />
                </a>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1">₹{item.price}</p>
                  <p className="mt-1">{item.size} ({item.color})</p>
                </div>
              </div>
              </Link>
            })}


          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI,)
  }
  let products = await Product.find({category: 'T-shirt'})
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}

export default Tshirts