"use client"
import {useCartStore} from '@/store/CartStore'
import {ShoppingCart} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const {items} = useCartStore()

    const cartCount = items.reduce((acc,item) => acc + item.quantity,0)

    return (
        <nav className='flex px-2 sm:px-3 md:px-6 lg:px-8 py-4 shadow bg-white justify-between items-center'>
            <div>
                <Link href={"/"} className='text-3xl font-bold'>
                    Store<span className='text-red-500'>Me</span>
                </Link>
            </div>
            <div className='flex gap-3 '>
                <Link className='py-2 px-3 hover:bg-gray-200 rounded-md' href={"/"}>Home</Link>
                <Link className='py-2 px-3 hover:bg-gray-200 rounded-md' href={"/products"}>Products</Link>
                <Link className='py-2 px-3 hover:bg-gray-200 rounded-md' href={"/checkout"}>Checkout</Link>
            </div>
            {/* shopping cart */}
            <div>
                <Link href={"/checkout"}>
                    {cartCount > 0 && <span className=' bg-red-500 text-white w-2 h-2 px-2 rounded-full text-sm'>
                        {cartCount}
                    </span>}
                    <ShoppingCart />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
