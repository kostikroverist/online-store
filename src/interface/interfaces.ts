export interface Category {
    id: number;
    name: string;
    slug: string; // URL-friendly назва (наприклад, "smartphones" замість "Смартфони")
    description?: string;
    image?: string; // Фото для категорії
  }

  export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  

  export interface User {
    id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    role: "admin" | "customer"; // Ролі користувачів
  }
  

  export interface Order {
    id: number;
    userId: number;
    items: CartItem[];
    totalPrice: number;
    status: "pending" | "shipped" | "delivered" | "cancelled"; // Статуси замовлення
    createdAt: string;
  }
  