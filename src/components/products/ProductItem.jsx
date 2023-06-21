import React from 'react'
import { useRecoilValue } from 'recoil'
import { listStyleProduct } from '../../recoil/listStyle'
const ProductItem = (props) => {
    const {name,picture,price,type,id} = props.product
    const listStyle = useRecoilValue(listStyleProduct)
    return (
        <div className={`column ${listStyle} has-text-centered`} key={id}>
            <div className="box box__custom ">
                <a href="#" className="button button-edit is-warning">edit</a>
                <a href="#" className="button button-delete is-danger">delete</a>
                <h1 className="title is-1 picture">{picture}</h1>
                <h2 className="subtitle is-5">{name}</h2>
                <span className="tag ">₹ {price}/kg</span>
            </div>
        </div>
    )
}
export default ProductItem