import {TopBuyers} from "../../../models/reports/buyers-sellers/top-buyers.js";
import {TopSellers} from "../../../models/reports/buyers-sellers/top-sellers.js";


export const retrieveTopBuyers = async () => {
    try {
        return await TopBuyers.findAll();
  } catch (error) {
    console.error("Error retrieving top buyers:", error);
    throw error;
  }
}

export const retrieveTopSellers = async () => {
    try {
        return await TopSellers.findAll();
  } catch (error) {
    console.error("Error retrieving top sellers:", error);
    throw error;
  }
}
