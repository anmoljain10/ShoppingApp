import {View, Text, Pressable, Image} from 'react-native';
import styles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faEmptyHeart} from '@fortawesome/free-regular-svg-icons';
import PlaceholderImage from '../../assets/images/placeholder-image.png';
import {theme} from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import {get} from 'lodash';
import {Product} from '../../utils/types';

const ItemCard = ({
  isFav = false,
  data,
  onFavClick,
  onAddToCart,
}: {
  isFav: boolean;
  data: Product;
  onFavClick: (id: string) => void;
  onAddToCart: Function;
}) => {
  const navigation = useNavigation();
  const thumbnail = get(data, 'thumbnail', '');
  const productId = get(data, 'id', '');
  const price = get(data, 'price', 0);
  const title = get(data, 'title', '');

  return (
    <View style={styles.card}>
      <Pressable
        style={{height: '70%', alignItems: 'center', justifyContent: 'center'}}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            data: data,
          })
        }>
        <View
          style={
            !thumbnail ? {height: 80, width: 80} : {height: '70%', width: '70%'}
          }>
          <Image
            source={thumbnail ? {uri: thumbnail} : PlaceholderImage}
            style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={event => {
          event.stopPropagation();
          onFavClick(productId);
        }}
        style={styles.heartContainer}>
        <FontAwesomeIcon
          icon={isFav ? faHeart : faEmptyHeart}
          color={!isFav ? 'black' : '#FF8181'}
          size={20}
        />
      </Pressable>
      <View style={{padding: 10}}>
        <View style={styles.addToCartBtnWrapper}>
          <Pressable
            style={styles.cartBtn}
            onPress={() => onAddToCart({productId, price, thumbnail, title})}>
            <Text style={styles.plus}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default ItemCard;
