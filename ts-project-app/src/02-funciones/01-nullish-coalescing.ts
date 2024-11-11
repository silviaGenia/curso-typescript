export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const product1 = createProduct(12, true, 22)
console.log(product1)
const product2 = createProduct(12, false)
console.log(product2)
const product3 = createProduct(12)
console.log(product3)
const product4 = createProduct(120, false, 0)
console.log(product4)