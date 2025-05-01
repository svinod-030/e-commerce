'use client';

import React, {useReducer, useState} from "react";
import Header from "@/app/pages/components/home/header";
import Products from "@/app/pages/components/home/products";
import Cart from "@/app/pages/components/cart";
import {CartProvider} from "@/app/pages/components/cart/context";


export default function Page() {

    return (
        <CartProvider>
            <main className="flex flex-col items-center justify-center pt-16 pb-4">
                <Header />
                <Products />
                <Cart />
            </main>
        </CartProvider>
    );
}
