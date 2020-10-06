import React from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { useLocation, Redirect } from 'react-router-dom';
import './navbar.css';

export const Navbar = ({ history }) => {
    const location = useLocation();
    const { search = '' } = queryString.parse( location.search );
    const [ formValues, handleInputChange ] = useForm({
        searchText: search
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        
        if( !searchText ){
            return <Redirect to="/" />
        }
        
        history.push(`/items?search=${ searchText }`);
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark navbar-bg">
            <div className="search">
                    <form
                        onSubmit={ handleSearch } 
                        className="form-inline"
                    >
                        <div className="col-md-2">
                            <span>
                                <img src={ '../assets/Logo_ML.png' }  alt="logo" />
                            </span>
                        </div>
                        <div className="col-md-10">

                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nunca dejes de buscar" 
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange }
                            />
                            <div className="input-group-append">
                            <button className="btn btn-light" type="submit">
                                <img src={ '../assets/ic_Search.png'} alt="search"/>
                            </button>
                            </div>
                        </div>
                        </div>

                    </form>
                
            </div>
        </nav>
    )
}