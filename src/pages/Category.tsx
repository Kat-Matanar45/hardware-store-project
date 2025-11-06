import type { ChangeEvent, ReactElement } from "react";
import type { IProducts } from "../interface/IProducts";

import { useParams, Link, useSearchParams, useLoaderData } from "react-router-dom";

const Category = (): ReactElement => {
    const {categoryName} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const products: IProducts[] = useLoaderData();

    const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : Infinity;

    const currentCategoryArray = products.filter(product => product.categoryId == categoryName && product.price <= maxPrice);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchParams(value ? {maxPrice: value} : {})
    }

    return (
        <div className="py-10 px-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Category {categoryName}</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor='maxPrice'>Max Price</label>
                <input 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type='number' 
                    id='maxPrice' 
                    placeholder="Enter max price" 
                    value={searchParams.get('maxPrice') || ''}
                    onChange={handleChange}/>
            </div>
            <ul className="grid grid-cols-3 gap-4 px-5">
                {currentCategoryArray.map(product => <li className="relative flex flex-col items-center justify-center group" key={product.name}>
                    <Link className="relative flex flex-col items-center justify-center group" 
                    state={{products}}
                    to={`/product/${product.id}`}>
                        <span className="z-10 text-center absolute font-semibold text-white text-xl transition duration-500 ease-out group-hover:text-violet-200 group-hover:text-2xl group-hover:text-shadow-lg/40">{product.name} <br/> {product.price}$</span>
                        <img className="rounded-md" src={product.img} alt={product.name}/>
                        <div className="absolute bg-gray-950 inset-0 opacity-40 rounded-md bg-gradient-to-t from-gray-900 via-gray-700 vai-30% to-gray-300"></div>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Category;