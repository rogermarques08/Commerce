import data from "./db";

export default function getAllProducts() {
    return new Promise((resolve) => {
        resolve(data.allProducts);
    });
}
