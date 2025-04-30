import React, {useState} from "react";
import {Button} from "@headlessui/react";


export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-row justify-between w-full gap-16 min-h-0">
            <h1 className="text-2xl font-bold">Home</h1>
            <div>
                <Button onClick={() => setOpen(!open)}
                        className="items-center gap-4 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                >Go to Cart</Button>
            </div>
        </div>
    );
}
