import { saveSale, getSalesDb } from '../../repositories/sales/sales-item-repository.js'

/**
 * Crea una nueva venta y guarda los datos en la base de datos.
 *
 * Este controlador toma los datos de la venta desde el cuerpo de la solicitud,
 * genera la fecha de la venta, y luego llama a la función `saveSale` para
 * guardar la venta y sus elementos asociados.
 * Si la venta se guarda correctamente, responde con un mensaje de éxito.
 * Si ocurre un error, responde con un mensaje de error correspondiente.
 *
 * @param {object} req - Objeto de solicitud HTTP que contiene los datos de la venta.
 * @param {object} res - Objeto de respuesta HTTP utilizado para enviar una respuesta al cliente.
 */
export const createSale = async (req, res) => {
  const { buyerId, sellerId, items } = req.body

  const saleDate = new Date(new Date().getTime() - (5 * 60 * 60 * 1000)).toISOString()

  const sale = {
    buyerId,
    sellerId,
    items,
    saleDate
  }

  try {
    const savedSale = await saveSale(sale)
    if (!savedSale) {
      return res.status(400).json({ message: 'Sale could not be created' })
    }
    res.status(201).json({ message: 'Sale created' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Obtiene todas las ventas desde la base de datos, junto con los elementos asociados a cada una.
 *
 * Este controlador obtiene la lista de todas las ventas y sus elementos relacionados
 * desde la base de datos utilizando la función `getSalesDb`, y luego responde con los datos.
 * Si ocurre un error durante el proceso, se responde con un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud HTTP.
 * @param {object} res - Objeto de respuesta HTTP utilizado para enviar los datos de las ventas.
 */
export const listSales = async (req, res) => {
  try {
    const sales = await getSalesDb()
    res.status(200).json(sales)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
