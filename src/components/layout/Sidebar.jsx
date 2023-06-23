import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listStyleProduct } from '../../recoil/listStyle'
import { searchDataText } from '../../recoil/searchRecoil'
import { productFilterByType } from '../../recoil/productFilterByType'
import { filterCount } from './../../recoil/filterCount';
const Sidebar = () => {
    const [listStyle, setListStyle] = useRecoilState(listStyleProduct)
    const [filterType,setFilterType] = useRecoilState(productFilterByType)
    const filterCountvalue = useRecoilValue(filterCount)
    const[searchText,setSearchText] = useRecoilState(searchDataText)
    const onChangeListStyle = (style) => {
        setListStyle(style)
    }
    return (
        <>
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h2 className="subtitle "><strong className='has-text-dark'>{filterCountvalue} Products </strong></h2>
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
                    <input type="text" className="input" placeholder='Search Your Products' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </div>
                <div className="column is-12">
                    <h3 className="subtitle is-6 mb-2">Filter</h3>
                    <div className="select is-fillwidth">
                        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
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