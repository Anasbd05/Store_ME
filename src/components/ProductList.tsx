"use client"
import {food_list} from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'


const ProductList = () => {
    const [search,setSearch] = useState("")
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='my-4 '>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search...'
                    className='py-2 px-4 outline-none border border-gray-700  rounded-lg w-xl' />
            </div>

            <ul className='grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 sm:grid-cols-3 md:grid-cols-4'>
                {food_list.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
                    || item.description.toLowerCase().includes(search.toLowerCase()))
                    .map((product) => (
                        <li className='bg-white shadow-md rounded-lg' key={product.id} >
                            <Image alt='' src={product.image} />
                            <div className='p-2'>
                                <div className='flex  w-full justify-between'>
                                    <h1 className='text-xl font-semibold'>{product.name}</h1>
                                    <p className='font-bold  text-neutral-800'>${product.price}</p>
                                </div>
                                <p className=' text-gray-600 mt-2'>{product.description}</p>
                                <button className='bg-black cursor-pointer mt-3 mb-1 py-2 w-full text-white  rounded-lg'>
                                    <Link className=' py-2 px-10' href={`/products/${product.id}`}>
                                        View Details
                                    </Link>
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>

        </div>
    )
}

export default ProductList
