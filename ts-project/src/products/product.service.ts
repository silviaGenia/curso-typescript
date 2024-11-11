
import { Producto } from './product.model'

export const productos: Producto[] = []
export const addProduct = (item: Producto) => {
  productos.push(item)
}