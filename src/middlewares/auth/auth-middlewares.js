import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../../config/config.js";

export const isSessionActive = async (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).send('Unauthorized')
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded) {
      next()
    } else {
      res.status(401).send('Unauthorized')
    }
  } catch (e) {
    console.error(e)
    res.status(401).send('Unauthorized')
  }
}
