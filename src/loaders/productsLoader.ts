import type { IProducts } from "../interface/IProducts";

export default async function fetchProductsLoader(): Promise<IProducts[]> {
    const res = await fetch(`${process.env.PUBLIC_URL}/data.json`);
    if (!res.ok) {
        throw new Error ('Failed to fetch categories')
    }

    const data: {products: IProducts[]} = await res.json();

    return data.products;
}