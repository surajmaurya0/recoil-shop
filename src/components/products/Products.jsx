import React, { useEffect, useState } from 'react';
import { productsState } from '../../recoil/productRecoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import './product.css';
import ProductItem from './ProductItem';
import { filterState } from '../../recoil/filterRecoil';

const Products = () => {
    const filterData = useRecoilValue(filterState);
    const [keyCounter, setKeyCounter] = useState(0);

    useEffect(() => {
        console.log("product", filterData);
        setKeyCounter(prevCounter => prevCounter + 1);
    }, [filterData]);

    return (
        <>
            <div className="columns is-multiline">
                {filterData.map((product, index) => (
                    <ProductItem
                        product={product}
                        filterData={filterData}
                        key={`${product.id}-${keyCounter}-${index}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Products;
