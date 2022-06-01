import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeSubtotalList,
  createSubtotalList,
  updateTotalPrice
} from '../../redux/slice/productCart';
import {
  DivCard,
  Price,
  DivCardFooter,
  DivCardButons,
  ButtonAdd,
  ButtonRemove,
} from '../../styles/cardsStyle/CardStyle';

export default function ProductCard(props) {
  const { allProducts, product: { id, name, price, url_image: urlImage } } = props;

  const dispatch = useDispatch();

  const subtotalCartList = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList));
  
  const productOnCartList = subtotalCartList.filter((product) => product.id === id)[0];

  const [count, setCount] = useState(
    productOnCartList ? productOnCartList.quantity !== 0 ? productOnCartList.quantity : 0 : 0);

  useEffect(() => {
    const multiplication = count * price;

    if (subtotalCartList.length < allProducts.length) {
      dispatch(createSubtotalList({
        subtotal: multiplication, id, name, price, quantity: count,
      }));
    } else {
      dispatch(changeSubtotalList({
        subtotal: multiplication, id, name, price, quantity: count,
      }));
      dispatch(updateTotalPrice());
    }
  }, [count]);

  const addProduct = () => {
    setCount(count + 1);
  };

  const removeProduct = () => (count > 0 ? setCount(count - 1) : null);

  const handleInputQuantity = ({ value }) => {
    setCount(Number(value));
  };

  return (
    <DivCard>
      <Price>
        <h3>R$</h3>
        <h3
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.replace('.', ',')}
        </h3>
      </Price>
      <img
        src={ `${urlImage}` }
        alt="imagem da bebida"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <DivCardFooter>
        <Price>
          <p
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </p>
        </Price>
        <DivCardButons>
          <ButtonRemove
            type="button"
            onClick={ removeProduct }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </ButtonRemove>
          <input
            type="number"
            value={ count }
            onChange={ (e) => handleInputQuantity(e.target) }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <ButtonAdd
            type="button"
            onClick={ addProduct }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </ButtonAdd>
        </DivCardButons>
      </DivCardFooter>
    </DivCard>
  );
}

ProductCard.propTypes = ({
  allProducts: PropTypes.arrayOf(PropTypes.object),
  product: PropTypes.object,
  id: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}).isRequired;
