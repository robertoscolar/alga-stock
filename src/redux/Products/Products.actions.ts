import { Product } from "../../shared/Table/Table.mockdata"
import { Action } from "./Products.reducer"

export const insertNewProduct = ():Action<Product> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload: {
      _id: '123',
      name: 'Cookie',
      price: 1.25,
      stock: 7000
    }
  }
}