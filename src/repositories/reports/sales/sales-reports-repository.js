import {MonthlySales} from "../../../models/reports/sales/monthly-sales.js";
import {SalesProductsView} from "../../../models/reports/sales/sales-products.js";
import {SalesProductsSummary} from "../../../models/reports/sales/sales-products-summary.js";


export const retrieveMonthlySales = async () => {
    try {
        return await MonthlySales.findAll();
  } catch (error) {
    console.error("Error retrieving monthly sales:", error);
    throw error;
  }
}

export const retrieveSalesProducts = async () => {
    try {
        return await SalesProductsView.findAll();
  } catch (error) {
    console.error("Error retrieving sales products:", error);
    throw error;
  }
}

export const retrieveSalesProductsSummary = async () => {
    try {
        return await SalesProductsSummary.findAll();
  } catch (error) {
    console.error("Error retrieving sales products summary:", error);
    throw error;
  }
}
