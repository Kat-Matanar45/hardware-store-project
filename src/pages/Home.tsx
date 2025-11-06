import type { ReactElement } from "react";
import type { ICategories } from "../interface/ICategories";

import { Link, useLoaderData } from "react-router-dom";

const Home = (): ReactElement => {
    const categories: ICategories[] = useLoaderData();

    console.log(categories);

    return (
        <div className="py-10">
            <h1 className="text-2xl font-semibold text-center mb-8 text-slate-900">Categories</h1>
            <ul className="grid grid-cols-3 gap-4 px-5">{categories.map(category => (
                    <li key={category.id}>
                        <Link className="relative flex flex-col items-center justify-center group" to={`/category/${category.name}`}>
                            <span className="z-10 absolute font-semibold text-white text-xl transition duration-500 ease-out group-hover:text-violet-200 group-hover:text-2xl group-hover:text-shadow-lg/40">{category.name}</span>
                            <img className="rounded-md" src={category.img} alt={category.name}/>
                            <div className="absolute bg-gray-950 inset-0 opacity-40 rounded-md bg-gradient-to-t from-gray-900 via-gray-700 vai-30% to-gray-300"></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;