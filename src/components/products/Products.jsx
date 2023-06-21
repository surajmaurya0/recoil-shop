import React from 'react'
import { productsState } from '../../recoil/productRecoil'
import { useRecoilValue } from 'recoil'
import'./product.css'
import ProductItem from './ProductItem'
const Products = () =>{
   const  products = useRecoilValue(productsState)
   console.log(products)
    return(
        <>
        <div className="columns is-multiline">
            {
                products.map((product)=> <ProductItem product={product}/> )
            }
        </div>
        </>
    )
}
export default Products