import ProductList from '@/components/ProductList'
import React from 'react'


const ProductsPage = async () => {



    return (
        <div className='flex items-center w-full justify-center flex-col'>
            <h1 className='text-2xl font-bold'>All Products</h1>
            <ProductList />
        </div>
    )
}

export default ProductsPage
