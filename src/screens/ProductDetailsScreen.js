import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/products';
import useCartStore from '../store/cartStore';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const { addToCart, removeFromCart, cart } = useCartStore();
  
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
  });

  const isInCart = cart.some(item => item.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert('Success', 'Added to cart!');
  };

  const handleRemoveFromCart = () => {
    removeFromCart(productId);
    Alert.alert('Removed', 'Item removed from cart');
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Loading product details...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>⚠️ {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.brand}>by {product.brand}</Text>
          </View>
          
          {product.discountPercentage > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>
                -{product.discountPercentage}%
              </Text>
            </View>
          )}
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.rating}>⭐ {product.rating} / 5</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        
        <View style={styles.details}>
          <DetailRow label="Category" value={product.category} />
          <DetailRow label="Stock" value={`${product.stock} units available`} />
          <DetailRow label="SKU" value={product.sku} />
          <DetailRow 
            label="Warranty" 
            value={product.warrantyInformation || 'N/A'} 
          />
          <DetailRow 
            label="Shipping" 
            value={product.shippingInformation || 'Standard shipping'} 
          />
        </View>

        {isInCart ? (
          <View style={styles.cartActions}>
            <View style={styles.quantitySection}>
              <Text style={styles.quantityText}>
                In cart: {cartItem?.quantity} item(s)
              </Text>
            </View>
            <TouchableOpacity 
              style={[styles.button, styles.addButton]} 
              onPress={handleAddToCart}
            >
              <Text style={styles.buttonText}>+ Add More</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.removeButton]} 
              onPress={handleRemoveFromCart}
            >
              <Text style={styles.buttonText}>Remove from Cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity 
            style={[styles.button, styles.addButton]} 
            onPress={handleAddToCart}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}:</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  brand: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  discountBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  discountText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  rating: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
  },
  details: {
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e7',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  detailValue: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    textAlign: 'right',
  },
  cartActions: {
    gap: 12,
  },
  quantitySection: {
    backgroundColor: '#f0f9ff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563eb',
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#2563eb',
  },
  removeButton: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    color: '#ef4444',
    textAlign: 'center',
  },
});

export default ProductDetailsScreen;