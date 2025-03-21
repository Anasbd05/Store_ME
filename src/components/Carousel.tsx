import React from 'react'
import {food_list} from "../assets/assets"
import Image from 'next/image'


const Carousel = () => {

    return (
        <div className='mt-10 flex gap-2 '>
            {food_list.map((product) => (
                <div key={product.id}>
                    <Image alt='' src={product.image} className='' />
                    <div className='flex justify-between px-2'>
                        <h1>{product.name}</h1>
                        <p className='text-lg'>${product.price.toFixed(1)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carousel
