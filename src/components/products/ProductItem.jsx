import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { listStyleProduct } from '../../recoil/listStyle'
import { productsState } from '../../recoil/productRecoil'
import { filterState } from '../../recoil/filterRecoil'
const ProductItem = (props) => {
    const setFilterData = useSetRecoilState(filterState);
    const { name, picture, price, type, id } = props.product
    const [editData, setEditData] = useState({
        name: name,
        price: price,
        picture: picture,
        type: type,
        id: id
    })
    const [modal, setModal] = useState({
        delete: false,
        edit: false
    })
    const [deleteProductStateData, setDeleteProductStateData] = useRecoilState(filterState)
    const listStyle = useRecoilValue(listStyleProduct)
    const deleteProduct = (id) => {
        const deleteData = deleteProductStateData.filter((pd) => { return pd.id !== id })
        setDeleteProductStateData(deleteData)
        console.log(deleteData);
    }
    const deleteProductModal = () => {
        setModal({ ...modal, delete: 'is-active' })
    }
    const editProductModal = () => {

        setModal({ ...modal, edit: 'is-active' })
    }
    // const editProduct = () => {
    //     const editDataUpdate = deleteProductStateData.findIndex(data => data.id === id);
    //     if (editDataUpdate !== -1) {
    //         const updatedDeleteProductStateData = [...deleteProductStateData];
    //         updatedDeleteProductStateData[editDataUpdate] = editData;
            
    //         setDeleteProductStateData(updatedDeleteProductStateData);
    //         console.log(updatedDeleteProductStateData)
    //     }
    //     setModal('')
    // }
    const editProduct = () => {
        setDeleteProductStateData(previousState => {
            return previousState.map(item => {
                if (item.id === id) {
                    return editData;
                }
                return item;
            });
        });
        setModal({ ...modal, edit: '' });
    };
    
    
    return (
        <>
            <div className={`column ${listStyle} has-text-centered`} key={id}>
                <div className="box box__custom ">
                    <button className="button button-edit is-warning" onClick={() => editProductModal()}>edit</button>
                    <button className="button button-delete is-danger" onClick={() => deleteProductModal()}>delete</button>
                    <h1 className="title is-1 picture">{picture}</h1>
                    <h2 className="subtitle is-5">{name}</h2>
                    <span className="tag ">₹ {price}/kg</span>
                </div>
            </div>
            <div class={`modal ${modal.delete}`} >
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Delete Product</p>
                        <button class="delete" aria-label="close" onClick={() => setModal({ ...modal, delete: '' })}></button>
                    </header>
                    <section class="modal-card-body ">
                        <div className='columns is-multiline modal-centered'  >
                            <div className={`column ${listStyle} has-text-centered`} key={id}>
                                <div class="box" style={{ boxShadow: 'none' }}>
                                    <h1 className="title is-1 picture">{picture}</h1>
                                    <h2 className="subtitle is-5">{name}</h2>
                                    <span className="tag ">₹ {price}/kg</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-danger" onClick={() => deleteProduct(id)}>Delete</button>
                        <button class="button" onClick={() => setModal('')}>Cancel</button>
                    </footer>
                </div>
            </div>
            <div class={`modal ${modal.edit}`} >
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Edit Product</p>
                        <button class="delete" aria-label="close" onClick={() => setModal({ ...modal, edit: '' })}></button>
                    </header>
                    <section class="modal-card-body ">
                        <div className="container ">
                            <div>
                                <div className="card box-shadow-remove">

                                    <div className="card-content">
                                        {/* <form onSubmit={editProduct}> */}
                                        <div className="columns">
                                            <div className="column is-3">
                                                <input type="text" className="input" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} placeholder='Enter Product Name' />
                                            </div>
                                            <div className="column is-3">
                                                <input type="text" className="input" value={editData.price} onChange={(e) => setEditData({ ...editData, price: e.target.value })} placeholder='Enter Product Price' />
                                            </div>
                                            <div className="column is-3">
                                                <input type="text" className="input" value={editData.picture} onChange={(e) => setEditData({ ...editData, picture: e.target.value })} placeholder='Product Picture' />
                                            </div>
                                            <div className="column is-3">
                                                <div className="select is-fullwidth">
                                                    <select value={editData.type} onChange={(e) => setEditData({ ...editData, type: e.target.value })}>
                                                        <option> Select Product Type</option>
                                                        <option value="fruit">fruit</option>
                                                        <option value="vegetables">vegetables</option>
                                                        <option value="beverages">beverages</option>
                                                        <option value="meals">meals</option>
                                                        <option value="utensils">utensils</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <button className="button is-primary" type='submit' >Edit</button> */}
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-primary" onClick={() => editProduct()}>Edit</button>
                        <button class="button" onClick={() => setModal({ ...modal, edit: '' })}>cancel</button>

                    </footer>
                </div>
            </div>
        </>
    )
}
export default ProductItem