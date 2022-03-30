import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeSubtotalList,
  createSubtotalList,
  updateTotalPrice } from '../../redux/slice/productCart';

export default function ProductCard(product) {
  const dispatch = useDispatch();
  const subtotalCartList = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));

  const [count, setCount] = useState(0);

  const { product: { id, name, price, url_image: urlImage } } = product;

  useEffect(() => {
    const multiplication = count * price;

    if (subtotalCartList.length < Number('11')) {
      dispatch(createSubtotalList({
        subtotal: multiplication, id, name, price, quantity: count,
      }));
    } else {
      dispatch(changeSubtotalList({
        subtotal: multiplication, id, name, price, quantity: count,
      }));
      dispatch(updateTotalPrice());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const addProduct = () => {
    setCount(count + 1);
  };

  const removeProduct = () => (count > 0 ? setCount(count - 1) : null);

  const handleInputQuantity = ({ value }) => {
    setCount(Number(value));
  };

  return (
    <div>
      <div>
        <p>R$</p>
        <p
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.replace('.', ',')}
        </p>
      </div>
      <img
        src={ `${urlImage}` }
        alt="imagem da bebida"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div>
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
      </div>
      <button
        type="button"
        onClick={ removeProduct }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <input
        type="number"
        value={ count }
        pattern="[0-9]*"
        onChange={ (e) => handleInputQuantity(e.target) }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        onClick={ addProduct }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = ({
  product: PropTypes.object,
  id: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}).isRequired;
