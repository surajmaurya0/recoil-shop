import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h2 className="subtitle">(144) products</h2>
                    <div className="field has-addons">
                        <div className="control">
                            <button className="button is-dark">
                                <i className="fas fa-th-large"></i>
                            </button>
                        </div>
                        <div className="control">
                            <button className="button">
                                <i className="fas fa-grip-horizontal"></i>
                            </button>
                        </div>
                    </div>
                    <h3 className="subtitle is-6 mb-2">Search Products</h3>
                    <input type="text" className="input" placeholder='Search Your Products' />
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