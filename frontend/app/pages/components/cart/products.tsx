'use client';

import Product from "~/pages/components/cart/product";

type ProductProps = {
    products: any[]
}

export default function Products({products}: ProductProps) {
    return (
        <div className="mt-8">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {products.map((product) => (
                        <Product product={product} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
