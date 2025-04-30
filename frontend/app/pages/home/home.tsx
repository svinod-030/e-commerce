import Cart from "~/pages/components/cart";
import type { Route } from "../../../.react-router/types/app/pages/home/+types/home";
import React, {useState} from "react";
import {Button} from "@headlessui/react";
import Products from "~/pages/components/home/products";
import Header from "~/pages/components/home/header";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "React | Home" },
        { name: "description", content: "Home page" },
    ];
}

export default function Home() {
    const [open, setOpen] = useState(false)

    return (
        <main className="flex flex-col items-center justify-center pt-16 pb-4">
            <Header />
            <Products />
            <Cart open={open} setOpen={setOpen}/>
        </main>
    );
}
