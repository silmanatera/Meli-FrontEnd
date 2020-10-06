import React from 'react'
import { ProductList } from '../products/ProductList'
import { Navbar } from '../ui/Navbar'

export const SearchScreen = ({ history }) => {
    return (
        <>
            <Navbar history={ history } />
       
            <div className="container">
                <ProductList history={ history } />
            </div>
        </>
    )
}
