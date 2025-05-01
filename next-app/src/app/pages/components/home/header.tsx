'use client';

import React from "react";
import {Button} from "@headlessui/react";
import {useCart} from "@/app/pages/components/cart/context";


export default function Header() {
    const { toggleCart } = useCart();

    return (
        <div className="container flex flex-row justify-between w-full gap-16 min-h-0">
            <h1 className="text-2xl font-bold">Home</h1>
            <div>
                <Button onClick={() => toggleCart()}
                        className="items-center gap-4 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                >Go to Cart</Button>
            </div>
        </div>
    );
}
