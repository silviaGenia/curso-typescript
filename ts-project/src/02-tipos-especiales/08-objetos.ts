(() => {
  type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

  type Producto = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  }


  const productos: Producto[] = []
  const addProduct = (item: Producto) => {
    productos.push(item)
  }


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


  productos.push({
    title: 'Producto 3',
    createdAt: new Date(),
    stock: 5,
    size: 'XL'
  })

  console.log(productos)


})()