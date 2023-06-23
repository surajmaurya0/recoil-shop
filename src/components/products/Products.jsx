import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import './product.css';
import ProductItem from './ProductItem';
import { filterProduct } from '../../recoil/filterRecoil';

const Products = () => {
    const filterData = useRecoilValue(filterProduct);

    useEffect(() => {
        console.log("product", filterData);

    }, [filterData]);

    return (
        <>
            <div className="columns is-multiline">
                {filterData.map((product) => (
                    <ProductItem product={product} key={product.id}/>
                ))}
            </div>
        </>
    );
};

export default Products;
