import type { ReactElement } from "react";
import { useLocation, useParams } from "react-router-dom";

import type { IProducts } from "../interface/IProducts";

const ProductDetails = (): ReactElement => {
    const {productId} = useParams();
    const location = useLocation();
    const {products} = location.state || [];

    const product: IProducts | undefined = productId ? products.find((p: IProducts) => p.id === parseInt(productId, 10)) : undefined;

    return (
        <div className="py-10 px-6">
            {product ? (
                <>
                    <h1 className="text-3xl font-semibold text-center mb-6">Product Details</h1>
                    <div className="flex flex-col items-center rounded-md bg-white p-6">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-lg text-gray-700">Price: {product.price}$</p>
                        <img className="max-w-1/4 max-h-1/4 min-w-40 min-h-40 mb-4 rounded-md" src={product.img} alt={product.name}/>
                    </div>
                </>
            ) : (
                <p className="text-center text-red-500 text-xl font-bold">Product not found</p>
            )}
        </div>
    )
}

export default ProductDetails;