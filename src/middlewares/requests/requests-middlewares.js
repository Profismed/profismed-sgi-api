/**
 * Middleware para validar que no haya campos vacíos en el cuerpo de la solicitud.
 *
 * @param {Object} req - El objeto de solicitud de Express.
 * @param {Object} res - El objeto de respuesta de Express.
 * @param {Function} next - La función de middleware de Express que se llama para pasar el control al siguiente middleware.
 * @returns {Object|void} - Devuelve una respuesta con un estado 400 y un mensaje de error si hay campos vacíos, de lo contrario llama a la función next().
 */
export const validateNoEmptyFields = (req, res, next) => {
  const { body } = req
  for (const key in body) {
    if (body[key] === '' || body[key] === null || body[key] === undefined) {
      return res.status(400).json({ error: `Field ${key} is empty` })
    }
  }
  next()
}
