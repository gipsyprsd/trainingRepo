# ERetail Store - Angular 18 E-commerce Application

A modern, responsive e-commerce application built with Angular 18, featuring a clean design and essential shopping functionality.

## Features

- **Product Catalog**: Browse products with filtering by category
- **Product Cards**: Detailed product information with ratings and reviews
- **Shopping Cart**: Add, remove, and update product quantities
- **Persistent Cart**: Cart data is saved to localStorage
- **Responsive Design**: Mobile-friendly interface using Bootstrap 5
- **Modern UI**: Clean design with FontAwesome icons

## Technologies Used

- **Angular 18**: Latest version with standalone components
- **TypeScript**: Type-safe development
- **Bootstrap 5**: Responsive CSS framework
- **FontAwesome**: Icon library
- **SCSS**: Enhanced CSS with variables and mixins
- **RxJS**: Reactive programming with Observables

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── header/         # Navigation header
│   │   ├── product-card/   # Individual product display
│   │   ├── product-list/   # Product grid with filtering
│   │   └── cart/          # Shopping cart management
│   ├── pages/              # Page components
│   │   └── home/          # Landing page
│   ├── services/           # Business logic services
│   │   ├── product.service.ts  # Product data management
│   │   └── cart.service.ts     # Cart functionality
│   ├── models/             # TypeScript interfaces
│   │   ├── product.ts     # Product data structure
│   │   └── cart-item.ts   # Cart item structure
│   └── app.routes.ts      # Application routing
├── styles.scss            # Global styles
└── index.html            # Main HTML file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd eretail-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/` to view the application.

### Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Application Features

### Home Page
- Hero section with call-to-action
- Feature highlights (Fast Shipping, Secure Shopping, 24/7 Support)
- Featured products showcase

### Product Catalog
- Grid layout of product cards
- Category filtering
- Product information including ratings and reviews
- Add to cart functionality

### Shopping Cart
- View cart items with images and details
- Update quantities with +/- buttons
- Remove individual items
- Clear entire cart
- Order summary with total calculation
- Persistent cart using localStorage

### Navigation
- Responsive header with brand logo
- Navigation links (Home, Products)
- Cart icon with item count badge

## Sample Data

The application includes sample products across multiple categories:
- Electronics (Headphones, Fitness Watch, Gaming Mouse)
- Clothing (Organic Cotton T-Shirt)
- Photography (Professional Camera Lens)
- Furniture (Ergonomic Office Chair)
- Sports (Water Bottle)
- Food (Artisan Coffee Beans)

## Future Enhancements

- User authentication and profiles
- Product search functionality
- Product detail pages
- Checkout and payment integration
- Order history
- Product reviews and ratings
- Wishlist functionality
- Admin panel for product management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
