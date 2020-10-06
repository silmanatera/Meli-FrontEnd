import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../ui/Navbar';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../ui/Loading';

export const ProductScreen = ({ history }) => {

    const { id } = useParams();
    const { loading, data } = useFetch( `http://localhost:4000/api/items/${ id }`);
   
    const handleReturn = () => {
        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }
  
    return (
        <>
       
       <Navbar history={ history } />
        <div className="container product-details">
        {
            loading ?
            ( 
                <Loading />
            ) :
            (
                <div className="row mt-5 mb-5 animate__animated animate__fadeIn">
                    <div className="col-md-7 mt-detail content" style={ { textAlign: 'center' }}>
                        <img 
                            src={ data.items.picture }
                            alt={ data.items.title }
                            className="img-thumbnail img-detail"
                            
                        />
                    </div>

                    <div className="col-md-5 mt-detail">
                        <div className="card-body">
                            <p className="card-title"> 
                                <p> 
                                    <span> { data.items.condition } </span> 
                                    <span> { data.items.sold_quantity } vendidos </span>
                                </p>
                                <p>
                                    { data.items.title }
                                </p>
                                <p>
                                ${ data.items.price.amount }
                                    {
                                    ( data.items.price.decimals !== 0 ) 
                                    && <span>.{data.items.price.decimals} </span>
                                    }
                                </p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={ handleReturn }
                                >
                                    Comprar
                                </button>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 content" style={ { paddingLeft:32}}>
                        <p className="principal-title">Descripcion del producto</p>
                        <p className="description-content">
                            {data.items.description}
                        </p>
                    </div>
                   
                </div>
            )
        }
        
        </div>
        </>
    )
}
