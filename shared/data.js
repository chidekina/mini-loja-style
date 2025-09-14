export const products = [
  {
    id: 1,
    title: "Smartphone Galaxy Premium com Câmera Avançada",
    price: 1299.99,
    rating: 4.8,
    tag: "Novo",
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
    tag: "Novo",
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
    tag: "Novo",
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