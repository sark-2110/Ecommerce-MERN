import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import { addCurrency } from '../utils/addCurrency';
import Loader from './Loader';
import Message from './Message';

const ProductCarousel = () => {
  const { data: products } = useGetTopProductsQuery();
  return (
    <Carousel variant="dark" fade className='text-center mb-5 z-0'>
      {products?.map(product => (
        <Carousel.Item key={product._id} interval={3000}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              style={{ height: '500px' }}
            />
            <Carousel.Caption className='pb-5 px-2 ' style={{'color': 'white'}}>
              <h5 className='product-title'>{product.name}</h5>
              <h4>{addCurrency(product.price)}</h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
