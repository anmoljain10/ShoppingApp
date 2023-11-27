import {View, Text, FlatList} from 'react-native';
import styles from './style';
import ItemCard from '../itemCard';
import {useDispatch} from 'react-redux';
import {useFavProducts} from '../../store/cart/useCartSelector';
import {addFav, addToCart, removeFav} from '../../store/cart/cartSlice';
import {Product} from '../../utils/types';

const ItemsList = ({data}: {data: Array<Product>}) => {
  const dispatch = useDispatch();
  const favProducts = useFavProducts();

  function toggleFav(productId: string) {
    const isAlreadyFav = favProducts.find((id: string) => id === productId);

    if (!isAlreadyFav || isAlreadyFav === -1) {
      dispatch(addFav(productId));
    } else {
      dispatch(removeFav(productId));
    }
  }

  function addProductsToCart(productDetails: any) {
    dispatch(addToCart(productDetails));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.recommended}>Recommended</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          marginHorizontal: 'auto',
          paddingHorizontal: 'auto',
          justifyContent: 'space-between',
        }}>
        {data.map(item => (
          <ItemCard
            data={item}
            key={item.id}
            isFav={favProducts.includes(item.id)}
            onFavClick={productId => toggleFav(productId)}
            onAddToCart={productDetails => addProductsToCart(productDetails)}
          />
        ))}
      </View>
    </View>
  );
};

export default ItemsList;
