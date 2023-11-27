import {useSelector} from 'react-redux';
import {sumBy} from 'lodash';

export const useFavProducts = () => useSelector(state => state?.cart?.fav);
export const useCartProducts = () => useSelector(state => state?.cart?.cart);
export const useAllCartItemsQty = () =>
  useSelector(state => {
    return sumBy(state?.cart?.cart, 'qty') || 0;
  });
