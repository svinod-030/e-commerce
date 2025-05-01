'use client';

import React, {createContext, useContext, useState} from "react";

interface CartContextType {
    isCartOpen: boolean;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextType|null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    const value: CartContextType = {
        isCartOpen,
        toggleCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
