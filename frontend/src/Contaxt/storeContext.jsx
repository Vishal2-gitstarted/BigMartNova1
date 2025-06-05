import {  createContext, useEffect, useState } from "react";
import { ProductData } from "../Data/ProductData";

export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {
    const [favorite, setFavorite] = useState(() => {
        const savedFavorites = localStorage.getItem('favorite');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    );
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    function favoriteProduct(product) {
        setFavorite((prevFavorites) => {
            const existingProduct = prevFavorites.find(item => item.id === product.id);
            if (existingProduct) {
                return prevFavorites.filter(item => item.id !== product.id);
            }
            return [...prevFavorites, product];
        });
        localStorage.setItem('favorite', JSON.stringify(favorite));
    };

    function removeFavorite(productId) {
        setFavorite((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter(item => item.id !== productId);
            localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };


    function addToCart(product) {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        localStorage.setItem('cart', JSON.stringify(cart));

    };
    function removeFromCart(productId) {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
            
        });

    };

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        const savedFavorites = localStorage.getItem('favorite');
        if (savedFavorites) {
            setFavorite(JSON.parse(savedFavorites));
            
        }
    }, []);
    const contextValue = {ProductData, cart, addToCart, removeFromCart, favorite, favoriteProduct, removeFavorite};
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;