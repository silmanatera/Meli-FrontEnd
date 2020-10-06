import React from 'react'

export const Loading = () => {
    return (
        <div className = "mt-4" >
            <img 
                src = { '../assets/ajax-loader.gif' }
                className = "card-img loading"
                alt = "loading" />
            <p 
                className = "text-center" > 
                Buscando... 
            </p> 
        </div>
    )
}
