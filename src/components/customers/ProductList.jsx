import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/apiCalls';
import StyledList from '../../styles/productSytyle/productListStyle';
import {StyleDivProduct} from '../../styles/productSytyle/ProductStyle';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await getProducts();

      setProducts(response);
    };
    get();
  }, []);

  return (
    <div>
      <StyleDivProduct>
        <StyledList>
            {
              products.map((product, index) => (
                <ProductCard key={ index } allProducts={ products } product={ product } data-testid={ product.id } />
              ))
            }
         </StyledList>
      </StyleDivProduct>
    </div>
  );
}
