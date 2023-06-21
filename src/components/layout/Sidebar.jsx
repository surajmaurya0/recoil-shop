import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listStyleProduct } from '../../recoil/listStyle'
import { productsState } from '../../recoil/productRecoil'

const Sidebar = () => {
    const [listStyle, setListStyle] = useRecoilState(listStyleProduct)
    const [searchInput,setSearchInput] = useState()
    const [product,setProduct] = useRecoilState(productsState)
    const onChangeListStyle = (style) => {
        setListStyle(style)
    }
   const searchProduct= (e)=>{
    setSearchInput(e.target.value)
    if(e.target.value === ""){
        setProduct(product)
    }else{
        let pdname =product.filter((pd)=>{return pd.name.toLowerCase().includes(e.target.value)})
        setTimeout(()=>{
            setProduct(pdname)
        },500)
    }
   }
    return (
        <>
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h2 className="subtitle">{product.length} Products</h2>
                    <div className="field has-addons">
                        <div className="control">
                            <button className={`button ${listStyle == 'is-6' ? 'is-dark' : ''}`} onClick={() => onChangeListStyle('is-6')}>
                                <i className="fas fa-th-large"></i>
                            </button>
                        </div>
                        <div className="control">
                            <button className={`button ${listStyle == 'is-4' ? 'is-dark' : ''}`} onClick={() => onChangeListStyle('is-4')}>
                                <i className="fas fa-grip-horizontal"></i>
                            </button>
                        </div>
                    </div>
                    <h3 className="subtitle is-6 mb-2">Search Products</h3>
                    <input type="text" className="input" placeholder='Search Your Products' value={searchInput} onChange={(e)=> searchProduct(e)} />
                </div>
                <div className="column is-12">
                    <h3 className="subtitle is-6 mb-2">Filter</h3>
                    <div className="select is-fillwidth">
                        <select>
                            <option value="">show all</option>
                            <option value="fruit">fruit</option>
                            <option value="vegetables">vegetables</option>
                            <option value="meals">meals</option>
                            <option value="beverages">beverages</option>
                            <option value="utensils">utensils</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar