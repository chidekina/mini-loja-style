import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

// Transform API product to our format
const transformProduct = (apiProduct) => ({
  id: apiProduct.id,
  title: apiProduct.title,
  price: apiProduct.price,
  rating: apiProduct.rating.rate,
  tag: apiProduct.rating.rate >= 4.5 ? "novo" : (apiProduct.price < 50 ? "Promo" : null),
  image: apiProduct.image
});

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.map(transformProduct);
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to static data if API fails
    return fallbackProducts;
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return transformProduct(response.data);
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

// Fallback static data in case API fails
const fallbackProducts = [
  {
    id: 1,
    title: "Smartphone Galaxy Premium com Câmera Avançada",
    price: 1299.99,
    rating: 4.8,
    tag: "novo",
    image: "https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=Phone"
  },
  {
    id: 2,
    title: "Notebook Ultra Performance para Gaming",
    price: 2599.99,
    rating: 4.9,
    tag: "Promo",
    image: "https://via.placeholder.com/300x300/059669/FFFFFF?text=Laptop"
  },
  {
    id: 3,
    title: "Headset Wireless com Cancelamento de Ruído",
    price: 399.99,
    rating: 4.7,
    tag: "novo",
    image: "https://via.placeholder.com/300x300/DC2626/FFFFFF?text=Headset"
  },
  {
    id: 4,
    title: "Smart Watch Fitness Tracker Avançado",
    price: 599.99,
    rating: 4.6,
    tag: "Promo",
    image: "https://via.placeholder.com/300x300/7C3AED/FFFFFF?text=Watch"
  },
  {
    id: 5,
    title: "Tablet Pro com Tela OLED Ultra HD",
    price: 899.99,
    rating: 4.8,
    tag: null,
    image: "https://via.placeholder.com/300x300/EA580C/FFFFFF?text=Tablet"
  },
  {
    id: 6,
    title: "Camera DSLR Profissional 4K Ultra",
    price: 1899.99,
    rating: 4.9,
    tag: "novo",
    image: "https://via.placeholder.com/300x300/0891B2/FFFFFF?text=Camera"
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('★');
  }
  
  if (hasHalfStar) {
    stars.push('☆');
  }
  
  return stars.join('');
};