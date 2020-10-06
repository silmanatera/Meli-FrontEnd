import React from 'react';
import queryString from 'query-string';
import { useLocation, Redirect } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { ProductCard } from './ProductCard';
import '../../index.css';
import { Loading } from '../ui/Loading';

export const ProductList = ({ history }) => {

    const location = useLocation();
    const { search = '' } = queryString.parse(location.search);
    const { loading, data } = useFetch(`http://localhost:4000/api/items?q=${ search }`);

    return ( 
    
    <div className = "mt-5" >
        <ul > {
            loading ?
            ( 
                <Loading />
            ) :

                (
                    data.items.map(item => ( 
                        <li key = { item.id } >
                            <ProductCard 
                                {...item }
                            /> 
                        </li>

                    )
                )
            )

        } </ul> 
        </div>
    )
}