import { ReactElement } from 'react'

import './ProductList.css'

import ProductCard from '@/components/ProductCard/ProductCard'
import { ProductType } from '@/utils/data'

const ProductList = ({ items }: { items: ProductType[] }): ReactElement => (
  <div className="product-list">
    {items.map((item) => (
      <div key={item.id} className="product-list__item">
        <ProductCard product={item} />
      </div>
    ))}
  </div>
)

export default ProductList
