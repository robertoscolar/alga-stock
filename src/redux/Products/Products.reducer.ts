import { Action } from ".."
import Products, { Product } from "../../shared/Table/Table.mockdata"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = Products, action:Action): Product[] {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]
    case 'INSERT_NEW_PRODUCT':
      return [...state, {
        ...action.payload,
        _id: String(state.length +1)
      }]
    default:
      return state
  }
}