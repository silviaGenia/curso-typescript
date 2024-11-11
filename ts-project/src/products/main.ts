import { addProduct, productos } from "./product.service"

addProduct({
  title: 'Producto',
  createdAt: new Date(),
  stock: 12
})

addProduct({
  title: 'Producto 1',
  createdAt: new Date(),
  stock: 20,
  size: 'S'
})


console.log(productos)