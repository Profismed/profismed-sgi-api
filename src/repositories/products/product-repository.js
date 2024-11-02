import {Product} from "../../models/products/product-model.js";


export const saveProduct = async (product) => {
    const {productName, productDescription, productPrice, quantity, userId} = product
    try {
        await Product.create({
        productName,
        productDescription,
        productPrice,
            quantity,
            userId
        })
    } catch (e) {
        console.error(e)
    }
}

export const getProducts = async () => {
    try {
        return await Product.findAll({
            where: {
                isAvailable: 1
            }
        })
    } catch (e) {
        console.error(e)
    }
}


export const updateProductDB = async (product, productId) => {
    const {productName, productDescription, productPrice, quantity, userId} = product
    try {
        await Product.update({
            productName,
            productDescription,
            productPrice,
            quantity,
            userId
        }, {
            where: {
                productId
            }
        })
    } catch (e) {
        console.error(e)
    }
}

export const deleteProductDB = async (productId) => {
    try {
        await Product.update(
            { isAvailable: 0 },
            {
                where: {
                    productId
                }
            }
        );
    } catch (e) {
        console.error(e);
    }
};


