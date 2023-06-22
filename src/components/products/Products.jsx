import React, { useState } from 'react'
import { productsState } from '../../recoil/productRecoil'
import { useRecoilState, useRecoilValue } from 'recoil'
import'./product.css'
import ProductItem from './ProductItem'
import { filterState } from '../../recoil/filterRecoil'
const Products = () =>{
    const[filterData,setFilterData] = useRecoilState(filterState)
   const  products = useRecoilValue(productsState)
    return(
        <>
        <div className="columns is-multiline">
            {
                filterData.map((product)=> (<ProductItem product={product} setFilterData={setFilterData} filterData={filterData} key={product.id}/>) )
                // <ProductItem setFilterData={setFilterData} filterData={filterData}/>
            }
        </div>
        </>
    )
}
export default Products