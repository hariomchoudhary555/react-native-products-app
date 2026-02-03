# React Native Products App

A fully functional React Native mobile application featuring product browsing, detailed views, and cart management. Built with modern React Native practices and state management.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Live Demo

- Download Expo Go app on your phone
- Run `npx expo start` in the project directory
- Scan QR code with Expo Go app
- Test all features live

## 📱 Screenshots

![Product List](./screenshots/product-list.jpg)
![Product Details](./screenshots/product-details.jpg)
![Cart Management](./screenshots/cart.jpg)

## ✨ Features

### Core Functionality

- **Product Catalog**: Grid-based product listing with 30+ items
- **Product Details**: Comprehensive product information display
- **Shopping Cart**: Add/remove items with persistent state
- **Navigation**: Smooth screen transitions with React Navigation
- **API Integration**: Real-time data fetching from DummyJSON API
- **State Management**: Global cart state using Zustand
- **Data Caching**: Optimized API calls with React Query

### Technical Highlights

✅ React Native with Expo SDK 54  
✅ React Navigation v6 for seamless navigation  
✅ Zustand for lightweight state management  
✅ React Query for server state & caching  
✅ RESTful API integration  
✅ Responsive UI design  
✅ Error handling & loading states  
✅ Clean component architecture  

## 🛠️ Tech Stack

- **Framework**: React Native (Expo)
- **Navigation**: React Navigation (Native Stack)
- **State Management**: Zustand
- **Data Fetching**: React Query (@tanstack/react-query)
- **API**: DummyJSON Products API
- **Language**: JavaScript (ES6+)

## 📦 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/hariomchoudhary555/react-native-products-app.git
cd react-native-products-app

# Install dependencies
npm install

# Start the development server
npx expo start

# Scan QR code with Expo Go app
```

## 🏗️ Project Structure
```
ProductsApp/
├── src/
│   ├── screens/
│   │   ├── ProductListScreen.js      # Main product catalog
│   │   └── ProductDetailsScreen.js   # Detailed product view
│   ├── components/
│   │   └── ProductCard.js            # Reusable product card
│   ├── store/
│   │   └── cartStore.js              # Zustand cart store
│   └── api/
│       └── products.js               # API integration layer
├── App.js                             # Navigation setup
├── package.json                       # Dependencies
└── README.md                          # Documentation
```

## 🎯 Key Implementation Details

### Navigation Flow
- Implemented React Navigation with native stack navigator
- Clean parameter passing between screens
- Back button navigation with state persistence

### State Management
- Zustand store for cart management
- Add/remove items functionality
- Quantity tracking
- Cart count display across screens

### API Integration
- React Query for data fetching
- Automatic caching and background updates
- Loading and error states
- Retry mechanism for failed requests

### UI/UX Features
- Responsive grid layout
- Product images with loading states
- Rating display with star icons
- Discount badges
- Price formatting
- Smooth animations

## 📝 Code Quality

- **Component-based architecture**: Reusable, maintainable components
- **Separation of concerns**: API, state, and UI logic separated
- **Error handling**: Graceful error states with retry options
- **Loading states**: User feedback during data fetching
- **Clean code**: Consistent formatting and naming conventions

## 🚀 Performance Optimizations

- React Query caching reduces API calls
- FlatList for efficient list rendering
- Image optimization with proper resizing
- Memoization where applicable

## 🧪 Testing the App

### Product List
- Verify all products load
- Check grid layout responsiveness
- Test scroll performance

### Navigation
- Tap any product → Should navigate to details
- Back button → Should return to list

### Cart Management
- Add items → Cart count increases
- Remove items → Cart count decreases
- State persists across navigation

### API Integration
- Products load from API
- Loading states display properly
- Error handling works on network failure

## 🔄 Future Enhancements

- Search & filter functionality
- Product categories
- Wishlist feature
- Checkout flow
- User authentication
- Product reviews
- Dark mode support

## 📄 License

This project is open source and available under the MIT License.
