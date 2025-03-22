"use client"
import {useCartStore} from '@/store/CartStore'
import Image from 'next/image'
import React from 'react'

const CheckoutPage = () => {
    const {items} = useCartStore()
    return (
        <div className='w-2/4 h-screen'>
            {items.map((item) =>
                <div className='flex items-center w-full my-2 bg-gray-100 shadow-md py-2 px-1' key={item.id} >
                    <Image className='w-16 rounded-md object-cover h-16' alt='' src={item.image || null} />
                    <div className="flex w-full items-center px-4 justify-between">
                        <div className="flex flex-col">
                            <h1 className='text-lg font-semibold'>{item.name}</h1>
                            <p className='font-bold'>${item.price} </p>
                        </div>
                        <p>{item.quantity}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CheckoutPage
