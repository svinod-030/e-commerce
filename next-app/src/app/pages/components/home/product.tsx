'use client';

import {Button} from "@headlessui/react";

type ProductProps = {
    product: any;
    isGridView: boolean;
}

export default function Product({product, isGridView}: ProductProps) {
    if(isGridView) {
        return (
            <div key={product.id} className="group relative">
                <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div>
                    <Button
                        className="items-center gap-4 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                    >Add to Cart</Button>
                </div>
            </div>
        )
    }
    return (
        <div key={product.id} className="group relative">
            <div className="mt-4 flex justify-between">
                <p>{product.id}</p>
                <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                </a>
                <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="w-10 h-10 rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                />
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                <Button
                    className="items-center gap-4 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                >Add to Cart</Button>
            </div>
        </div>
    )

}
