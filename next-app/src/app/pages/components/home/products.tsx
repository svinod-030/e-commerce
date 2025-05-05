'use client';

import Product from "@/app/pages/components/home/product";
import {useState} from "react";
import "./products.css";
import {ListBulletIcon, RectangleGroupIcon} from "@heroicons/react/16/solid";

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    }
]

export default function Products() {
    const [isGridView, setIsGridView] = useState(true);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    return (
        <div className="bg-white container shadow-sm px-5">
            <div className="py-4">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
                    </div>
                    <div onClick={toggleView} className="flex w-6">
                        {isGridView ? <ListBulletIcon title={"List"}/> : <RectangleGroupIcon />}
                    </div>
                </div>
                <div className={
                    isGridView ? 'mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-9' : 'list-view'}
                >
                    {products.map((product) => (
                        <Product product={product} key={product.id} isGridView={isGridView}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
