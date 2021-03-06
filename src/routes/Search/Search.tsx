import { ReactElement } from 'react'
import { withRouter, useLocation } from 'react-router-dom'

import './Search.css'

import ProductList from '@/components/ProductList/ProductList'

import { product } from '@/utils/data'

const Search = (): ReactElement => {
  const params = new URLSearchParams(useLocation().search)
  const query = params.get('query') ?? ''

  return (
    <>
      <div className="search-title">{query}</div>
      <ProductList items={product.search(query)} />
    </>
  )
}

export default withRouter(Search)
