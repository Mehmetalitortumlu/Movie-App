import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
    watchlist: localStorage.getItem('watchlist') ?
        JSON.parse(localStorage.getItem('watchlist')) :
        [],
    watched: localStorage.getItem('watched') ?
        JSON.parse(localStorage.getItem('watched')) :
        [],
};



export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);


    const removeMovieFromWatchList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id })
    }

    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
    }

    const moveToWatchList = (movie) => {
        dispatch({ type: "MOVIE_TO_WATCHED", payload: movie })

    }

    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHED", payload: id })
    }
    const values = {
        addMovieToWatchlist,
        watched: state.watched,
        watchlist: state.watchlist,
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWatchList,
        removeMovieFromWatched,
    }

    return (<GlobalContext.Provider value={values}>
        {children}
    </GlobalContext.Provider>)

}