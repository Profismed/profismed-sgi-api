import {retrieveLeastSellingProduct,retrieveTop10Products,retrieveTopSellingProduct} from "../../../repositories/reports/products/products-reports-repository.js";


export const getLeastSellingProduct = async (req, res) => {
    try {
        const leastSellingProduct = await retrieveLeastSellingProduct();
        res.status(200).json(leastSellingProduct);
    } catch (error) {
        res.status(500).send("Error retrieving least selling product");
    }
}

export const getTop10Products = async (req, res) => {
    try {
        const top10Products = await retrieveTop10Products();
        res.status(200).json(top10Products);
    } catch (error) {
        res.status(500).send("Error retrieving top 10 products");
    }
}

export const getTopSellingProduct = async (req, res) => {
    try {
        const topSellingProduct = await retrieveTopSellingProduct();
        res.status(200).json(topSellingProduct);
    } catch (error) {
        res.status(500).send("Error retrieving top selling product");
    }
}
