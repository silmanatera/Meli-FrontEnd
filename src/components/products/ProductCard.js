import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

export const ProductCard = ({
    id,
    title,
    price,
    picture,
    free_shipping,
    condition,
    address
}) => {

    return (
      
        <div className="card product-list animate__animated animate__fadeIn">
            <div className="row no-gutters">
                <div className="col-md-3">
                <img src={picture } className="card-img img-list" alt={ title } />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <span className="card-title"> 
                            ${ price.amount }
                            {
                              ( price.decimals !== 0 ) 
                              && <span>.{price.decimals} </span>
                            }
                        </span>
                       
                        <span>
                            {
                                ( free_shipping )
                                && <img src={ '../assets/ic_shipping.png' } className="card-img img-shipping" alt={ title } />
                            }
                        </span>
                           
                        <Link to={ `./items/${ id }` }>
                            <p className="card-text"> { title} </p>
                        </Link>   
                        <p> { condition }</p>  
                    </div>
                </div>
                <div className="col-md-3">
                    <span className="pt-4 location">
                    { address }
                    </span> 
                </div>
            </div>
            <hr />
        </div>
    )

}
