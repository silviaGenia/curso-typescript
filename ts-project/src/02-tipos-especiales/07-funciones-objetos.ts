(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password)
  }

  login({
    email: "karen@karen",
    password: 24444
  })

  //EJ.
  type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

  const productos: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  }) => {
    productos.push(data)
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

  console.log(productos)




})()