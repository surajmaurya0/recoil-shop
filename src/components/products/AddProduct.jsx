import React, { useEffect, useState } from 'react'
import { productsState } from '../../recoil/productRecoil'
import { useSetRecoilState } from 'recoil'
import { NavbarRecoil } from '../../recoil/navbarRecoil'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const setAddNewProduct = useSetRecoilState(productsState)
  const setUrl = useSetRecoilState(NavbarRecoil)
  const [addProduct, setAddProduct] = useState({
    name: '',
    price: '',
    picture: '',
    type: ''
  })
  setUrl('add-product')
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(addProduct)
    setAddNewProduct((oldProduct) => [...oldProduct, addProduct])
    setLoading(true)
    setTimeout(() => {
      navigate('/')
      setLoading(true)
    }, 5000)

  }

  return (
    <>
      {loading ? <>
        <div className="container">
          <div className="section">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Add A Product</p>
              </div>
              <div className="card-content">
                <form >
                  <div className="columns">
                    <div className="column is-3">
                      <input type="text" className="input" placeholder='Enter Product Name' disabled value={addProduct.name} />
                    </div>
                    <div className="column is-3">
                      <input type="text" className="input" placeholder='Enter Product Price' disabled value={addProduct.price} />
                    </div>
                    <div className="column is-3">
                      <input type="text" className="input" placeholder='Product Picture' disabled value={addProduct.picture} />
                    </div>
                    <div className="column is-3">
                      <div className="select is-fullwidth">
                        <select disabled value={addProduct.type} >
                          <option> Select Product Type</option>
                          <option value="fruit">fruit</option>
                          <option value="vegetables">vegetables</option>
                          <option value="beverages">beverages</option>
                          <option value="meals">meals</option>
                          <option value="utensils">utensils</option>
                        </select>
                      </div>
                    </div>
                    <div className="column is-3"></div>
                  </div>
                  <progress class="progress is-large is-primary" max="100">60%</progress>
                </form>
              </div>
            </div>
          </div>
        </div>
      </> : <div className="container">
        <div className="section">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Add A Product</p>
            </div>
            <div className="card-content">
              <form onSubmit={onSubmit}>
                <div className="columns">
                  <div className="column is-3">
                    <input type="text" className="input" value={addProduct.name} onChange={(e) => setAddProduct({ ...addProduct, name: e.target.value })} placeholder='Enter Product Name' />
                  </div>
                  <div className="column is-3">
                    <input type="text" className="input" value={addProduct.price} onChange={(e) => setAddProduct({ ...addProduct, price: e.target.value })} placeholder='Enter Product Price' />
                  </div>
                  <div className="column is-3">
                    <input type="text" className="input" value={addProduct.picture} onChange={(e) => setAddProduct({ ...addProduct, picture: e.target.value })} placeholder='Product Picture' />
                  </div>
                  <div className="column is-3">
                    <div className="select is-fullwidth">
                      <select value={addProduct.type} onChange={(e) => setAddProduct({ ...addProduct, type: e.target.value })}>
                        <option> Select Product Type</option>
                        <option value="fruit">fruit</option>
                        <option value="vegetables">vegetables</option>
                        <option value="beverages">beverages</option>
                        <option value="meals">meals</option>
                        <option value="utensils">utensils</option>
                      </select>
                    </div>
                  </div>
                  <div className="column is-3"></div>
                </div>
                <button className="button is-primary" type='submit' >Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>}

    </>
  )
}

export default AddProduct