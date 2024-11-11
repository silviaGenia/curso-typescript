
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

export type Producto = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
}