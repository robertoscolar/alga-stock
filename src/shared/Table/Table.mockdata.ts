export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 1.25,
        stock: 25
    },
    {
        id: 2,
        name: 'Milk 1L',
        price: 0.99,
        stock: 26
    },
    {
        id: 3,
        name: 'Water 500ml',
        price: 0.50,
        stock: 2
    },
    {
        id: 4,
        name: 'Bread',
        price: 0.20,
        stock: 40
    }
]

export default Products