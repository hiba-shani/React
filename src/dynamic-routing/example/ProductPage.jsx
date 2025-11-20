import React from 'react';
import { products } from './data/Products';
import './ProductPage.css';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';


const ProductPage = () => {
  return (
    <div className='products-container'>
      <h2 className='section-title'>
        Special Footwear with Offers
      </h2>
      <p className='section-subtitle'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.

      </p>
      <div className='products-grid'>
        {products.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`} style={{textDecoration:'none'}}>
            <ProductCard products={item} />
          </Link>

        ))}

      </div>

    </div>
  )
}

export default ProductPage
