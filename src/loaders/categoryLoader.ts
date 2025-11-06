import type { ICategories } from "../interface/ICategories";

export default async function fetchCategoryLoader(): Promise<ICategories[]> {
    const res = await fetch('hardware-store-project/data.json');
    if (!res.ok) {
        throw new Error ('Failed to fetch categories')
    }

    const data: {categories: ICategories[]} = await res.json();

    return data.categories;
}