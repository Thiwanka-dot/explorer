import React, { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState(() => localStorage.getItem('lastSearch') || '');
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('lastSearch', searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        if(!favorites.find((m) => m.id === movie.id)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFavorite = (movieId) => {
        setFavorites(favorites.filter((m) => m.id !== movieId));
    };

    return (
        <MovieContext.Provider value={{searchQuery,setSearchQuery,favorites,setFavorites,addFavorite,removeFavorite}}>
            {children}
        </MovieContext.Provider>
    )
};

export const useMovies = () => useContext(MovieContext)