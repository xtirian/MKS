import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../reduxProvider';

const useGetTotalCart = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  const total = useMemo(() => {
    return products.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
  }, [products]);
  return total
}

export default useGetTotalCart