import {retrieveTopSellers,retrieveTopBuyers} from "../../../repositories/reports/buyers-sellers/buyers-sellers-reports-repository.js";

export const getTopBuyers = async (req, res) => {
    try {
        const topBuyers = await retrieveTopBuyers();
        res.status(200).json(topBuyers);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving top buyers" });
    }
}

export const getTopSellers = async (req, res) => {
    try {
        const topSellers = await retrieveTopSellers();
        res.status(200).json(topSellers);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving top sellers" });
    }
}
