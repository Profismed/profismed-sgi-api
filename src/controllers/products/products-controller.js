import {saveProduct, getProducts, updateProductDB,deleteProductDB} from "../../repositories/products/product-repository.js";

export const createProduct = async (req, res) => {
    const {productName, productDescription, productPrice, quantity, userId} = req.body
    const product = {
        productName,
        productDescription,
        productPrice,
        quantity,
        userId
    }
    try {
        await saveProduct(product)
        res.status(201).send('Product created')
    } catch (e) {
        console.error(e)
        res.status(500).send('Something went wrong')
    }
}

export const listProducts = async (req, res) => {
    try {
        const products = await getProducts()
        res.status(200).json(products)
    } catch (e) {
        console.error(e)
        res.status(500).send('Something went wrong')
    }
}

export const updateProduct = async (req, res) => {
    const productId = req.params.id
    console.log(productId)
    const {productName, productDescription, productPrice, quantity, userId} = req.body
    const product = {
        productName,
        productDescription,
        productPrice,
        quantity,
        userId
    }
    try {
        await updateProductDB(product, productId)
        res.status(200).send('Product updated')
    } catch (e) {
        console.error(e)
        res.status(500).send('Something went wrong')
    }
}


export const deleteProduct = async (req, res) => {
    const productId = req.params.id
    try {
        await deleteProductDB(productId)
        res.status(200).send('Product deleted')
    } catch (e) {
        console.error(e)
        res.status(500).send('Something went wrong')
    }
}
