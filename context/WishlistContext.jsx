'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state; // Don't add duplicates
      }
      return [...state, action.payload];
    }
    
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload.id);
    
    case 'CLEAR_WISHLIST':
      return [];
    
    case 'LOAD_WISHLIST':
      return action.payload || [];
    
    default:
      return state;
  }
};

export function WishlistProvider({ children }) {
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(savedWishlist) });
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  }, [wishlist]);

  const addToWishlist = (product) => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category
      }
    });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id: productId } });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    getWishlistCount
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}