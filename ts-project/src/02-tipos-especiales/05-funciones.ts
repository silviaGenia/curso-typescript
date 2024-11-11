(() => {

  type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

  function crearProducts(
    title: string,
    createdAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title, createdAt, stock, size
    }
  }

  const product = crearProducts("p1", new Date(), 12, "XS")
  console.log(product)

  const crearProducts1 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title, createdAt, stock, size
    }
  }

  const product1 = crearProducts1("producto1", new Date(), 20)
  console.log(product1)

})()