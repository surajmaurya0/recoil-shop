import React from 'react'
import Sidebar from '../layout/Sidebar'
import Products from '../products/Products'
import { useSetRecoilState } from 'recoil'
import { NavbarRecoil } from '../../recoil/navbarRecoil'
const Home = () => {
const setUrl = useSetRecoilState(NavbarRecoil)
const url = window.location.href;
const productUrl = url.split('/').pop()
setUrl(productUrl)
  return (
    <>
   
    <div className="has-background-light">
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <div className="box">
                        <Sidebar/>
                        </div>
                    </div>
                    <div className="column is-9">
                   <Products/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home