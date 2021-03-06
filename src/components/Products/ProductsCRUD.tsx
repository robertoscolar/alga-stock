import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteSingleProduct, updateSingleProduct } from "../../services/Products.service";
import Table, { TableHeader } from "../../shared/Table";
import { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "./ProductForm";
import {connect, useDispatch} from 'react-redux'
import { getProducts, insertNewProduct } from "../../redux/Products/Products.actions";

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

declare interface ProductCRUDProps {
  products: Product[]
}

const ProductsCRUD:React.FC<ProductCRUDProps> = (props) => {
  const dispatch = useDispatch()
  // const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()


  async function fetchData() {
    try {
      //@ts-ignore
      dispatch(getProducts())
    } catch (err:any) {
      Swal.fire('Oops!', err.message, 'error')
    }
    // const _products = await getAllProducts()
    // setProducts(_products)
  }

  useEffect(() => {
    fetchData();
  }, [])


  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      dispatch(insertNewProduct(product))
      fetchData()
    } catch (error: any) {
      Swal.fire('Oops!', error.message, 'error')
    }
  }

  const handleProductUpdate = async (newProduct: Product) => {

    try {
      await updateSingleProduct(newProduct)
      setUpdatingProduct(undefined)
      fetchData()
    } catch (error: any) {
      Swal.fire('Oops!', error.message, 'error')
    }

  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product Details',
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      'info'
    )
  }

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id)
      fetchData()
      Swal.fire('Uhuul!', 'Product successfully deleted!', 'success')

    } catch (error: any) {
      Swal.fire('Oops!', error.message, 'error')
    }
  }

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product._id)
      }
    })
  }

  return <>
    <Table
      headers={headers}
      data={props.products}
      enableActions={true}
      onEdit={handleProductEdit}
      onDetail={handleProductDetail}
      onDelete={handleProductDelete}
    />

    <ProductForm
      form={updatingProduct}
      onSubmit={handleProductSubmit}
      onUpdate={handleProductUpdate}
    />
  </>
}

const mapStateToProps = (state:any) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)