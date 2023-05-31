import data from "./db";

export interface Product {
    id: string;
    name: string;
    price_in_cents: number;
    category: string;
    image_url: string;
    sales: number;
    description: string;
};

interface AllProductsResponse {
    allProducts: Product[];
};

export default function getAllProducts(): Promise<AllProductsResponse> {
    return new Promise((resolve) => {
        resolve(data);
    });
}
