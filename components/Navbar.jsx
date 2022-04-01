import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font mb-2 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <div className=' w-10 h-10 mx-auto '>
                <Image
                  src={require("../public/logo.png")}
                  alt="logo image here"
                />
                </div>
            <span className="ml-3 text-xl">CodesWear</span>
          </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center cursor-pointer">
            <Link href={"/tshirts"}><a className="mr-5 hover:text-white">Tshirts</a></Link>
            <Link href={"/hoodies"}><a className="mr-5 hover:text-white">Hoodies</a></Link>
            <Link href={"/stickers"}><a className="mr-5 hover:text-white">Stickers</a></Link>
            <Link href={"/mugs"}><a className="mr-5 hover:text-white">Mugs</a></Link>
          </nav>
          <button className="cart inline-flex items-center py-1 px-3 focus:outline-none text-xl mt-4 md:mt-0">Cart <AiOutlineShoppingCart className='ml-2 text-2xl'/></button>
        </div>
      </header>
    </div>
  )
}

export default Navbar