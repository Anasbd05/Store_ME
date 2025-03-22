"use client"
import {food_list} from '@/assets/assets'
import {useCartStore} from '@/store/CartStore';
import Image from 'next/image'
import React from 'react'

const SingleProduct = ({params}: {params: {id: string}}) => {
    const id = params.id;

    const product = food_list.find((product) => product.id === id);

    if(!product) {
        return <div>Product not found</div>;
    }

    const {items,addItem,removeItem} = useCartStore();
    const cartItem = items.find((item) => item.id === id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const onAddItem = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image ? product.image : null,
            quantity: 1
        });
    };

    return (
        <div>
            <div key={product.id} className='flex flex-col gap-4 w-full md:flex-row'>
                <Image className='rounded-md w-full md:w-2/4' src={product.image} alt={product.name} />
                <div className="flex flex-col w-full md:w-2/4 py-4 gap-4">
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                    <p className='text-gray-600 font-medium text-xl'>{product.description}</p>
                    <h4 className='text-xl font-bold'>${product.price.toFixed(1)}</h4>
                    <div className='flex gap-2 items-center'>
                        <button onClick={onAddItem} className='bg-black p-2 px-4 font-bold text-white rounded-md'>+</button>
                        <span className='text-xl font-bold'>{quantity}</span>
                        <button onClick={() => removeItem(product.id)} className='bg-white p-1 px-4 border-2 font-bold text-lg text-black rounded-md'>-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
