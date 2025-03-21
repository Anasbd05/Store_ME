import {food_list} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const SingleProduct = ({params}: {params: {id: string}}) => {

    const id = params.id

    const productDetails = food_list.filter((product) => product.id === id)

    return (
        <div>
            {productDetails.map((product) => (
                <div key={product.id} className='flex flex-col gap-4 w-full md:flex-row' >
                    <Image className='rounded-md w-2/4' src={product.image} alt='' />
                    <div className="flex flex-col w-2/4 py-4 gap-4">
                        <h1 className='text-3xl font-bold'>{product.name}</h1>
                        <p className='text-gray-600 font-medium text-xl '>{product.description} </p>
                        <h4 className='text-xl font-bold'>${product.price.toFixed(1)} </h4>
                        <div className='flex gap-2 items-center'>
                            <button className='bg-black p-2 px-4 font-bold text-white rounded-md'>+</button>
                            <span className='text-xl font-bold'>0</span>
                            <button className='bg-white p-1 px-4  border-2 font-bold text-lg text-black rounded-md'>-</button>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default SingleProduct
