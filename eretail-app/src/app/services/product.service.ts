import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life.',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      category: 'Electronics',
      inStock: true,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone integration.',
      price: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      category: 'Electronics',
      inStock: true,
      rating: 4.3,
      reviews: 89
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors.',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      category: 'Clothing',
      inStock: true,
      rating: 4.7,
      reviews: 245
    },
    {
      id: 4,
      name: 'Professional Camera Lens',
      description: '85mm f/1.4 portrait lens for professional photography with exceptional image quality.',
      price: 899.99,
      imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
      category: 'Photography',
      inStock: true,
      rating: 4.8,
      reviews: 67
    },
    {
      id: 5,
      name: 'Ergonomic Office Chair',
      description: 'Premium ergonomic office chair with lumbar support and adjustable height.',
      price: 449.99,
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      category: 'Furniture',
      inStock: true,
      rating: 4.4,
      reviews: 156
    },
    {
      id: 6,
      name: 'Stainless Steel Water Bottle',
      description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.',
      price: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop',
      category: 'Sports',
      inStock: false,
      rating: 4.6,
      reviews: 312
    },
    {
      id: 7,
      name: 'Wireless Gaming Mouse',
      description: 'High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
      category: 'Electronics',
      inStock: true,
      rating: 4.2,
      reviews: 94
    },
    {
      id: 8,
      name: 'Artisan Coffee Beans',
      description: 'Premium single-origin coffee beans roasted to perfection for the ultimate coffee experience.',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      category: 'Food',
      inStock: true,
      rating: 4.9,
      reviews: 203
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(p => p.category === category);
    return of(filteredProducts);
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.products.map(p => p.category))];
    return of(categories);
  }
}
