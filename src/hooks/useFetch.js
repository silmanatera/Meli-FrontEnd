/**
 * Hooks para manejar las peticiones http
 */
import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    let isMounted = useRef(true);


    const [state, setState] = useState({ data: null, loading: true, error: null });

    // para que cargue una sola vez. Evita memory leak
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data.response
                    })
                }
            })
    }, [url]); // cambia cuando cambie la url

    return state;
}