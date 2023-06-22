import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { listStyleProduct } from '../../recoil/listStyle'
import { productsState } from '../../recoil/productRecoil'
import { useResetRecoilState } from 'recoil'
import { filterState } from '../../recoil/filterRecoil'
const Sidebar = () => {
    const [listStyle, setListStyle] = useRecoilState(listStyleProduct)
    const [product, setProduct] = useRecoilState(productsState)
    const resetState = useResetRecoilState(productsState)
    const [filterData, setFilterData] = useRecoilState(filterState)
    const [searchInput, setSearchInput] = useState({
        search: '',
        category: 'all'
    })
    const onChangeListStyle = (style) => {
        setListStyle(style)
    }
    const searchProduct = (e) => {
        setSearchInput({ ...searchInput, search: e.target.value.trim().length < 1 ? null : e.target.value })
        if (e.target.value === "" || searchInput.search === null) {
            resetState()
        } else {
            let pdname = filterData.filter((pd) => { return pd.name.toLowerCase().includes(e.target.value) })
            setTimeout(() => {
                setFilterData(pdname)
            }, 500)
        }
        // setSearchInput({...searchInput,search:e.target.value})
    }
    const filterByType = (e) => {
        setSearchInput({ ...searchInput, category: e.target.value })
        if (e.target.value === "all") {
            setFilterData(product)
        } else {
            let prodName = product.filter((pd) => { return pd.type.toLowerCase().includes(e.target.value) })
            setFilterData(prodName)
        }


    }
    console.log(filterData)
    useEffect(() => {
        setFilterData(product)
    }, [])
    // console.log(product);
    useEffect(() => {

    }, [searchInput])
    console.log("searchinput", searchInput)
    return (
        <>
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h2 className="subtitle">{filterData.length} Products</h2>
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
                    <input type="text" className="input" placeholder='Search Your Products' value={searchInput.search} onChange={(e) => searchProduct(e)} />
                </div>
                <div className="column is-12">
                    <h3 className="subtitle is-6 mb-2">Filter</h3>
                    <div className="select is-fillwidth">
                        <select value={searchInput.category} onChange={(e) => filterByType(e)}>
                            <option value="all">show all</option>
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