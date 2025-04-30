import React from 'react';
import {NavLink, Outlet} from "react-router";
import type {Route} from "../../.react-router/types/app/pages/home/+types/home";
import "./root.css";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "React" },
        { name: "description", content: "React" },
    ];
}

const RootLayout = () => {
    return (
        <div>
            <div className="navbar p-4 bg-gray-800 text-white">
                <div className="flex items-center justify-around p-4bg-gray-800 text-white">
                    <h1>SHOP_ING</h1>
                    <ul className="inline-flex items-center gap-8">
                        <li>
                            <NavLink to={"/"} className="text-gray-500 hover:text-gray-300">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} className="text-gray-500 hover:text-gray-300">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container justify-self-center">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
