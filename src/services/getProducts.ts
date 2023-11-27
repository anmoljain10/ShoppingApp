import axios from 'axios';

async function getAllProducts({skip, limit}: {skip: number; limit: number}) {
  try {
    const data = await axios.get(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`,
    );
    return {products: data?.data?.products, total: data?.data?.total};
  } catch (e) {
    return {products: [], total: 0};
  }
}

export {getAllProducts};
