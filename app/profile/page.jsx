'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';

const ProfilePage = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUserOrders = async () => {
      if (!isAuthenticated || !user?.id) {
        setLoading(false);
        return;
      }
      console.log('Fetching orders for user ID:', user);
      try {
        const { data } = await api.get('/orders', {
          params: { userId: user.id }
        });
        setOrders(data || []);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserOrders();
  }, [user?.id, isAuthenticated]);



  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">Please log in to view your profile.</p>
          <a href="/auth" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and view your order history</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">User Profile</h2>
                <p className="text-gray-600">User ID: {user.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6">

            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">👤 Name</label>
                  <div className="text-gray-900">{user.name}</div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">📧 Email Address</label>
                  <div className="text-gray-900">{user.email}</div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">🆔 User ID</label>
                  <div className="text-gray-900">{user.id}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <span className="text-teal-500 mr-2">📦</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
                <p className="text-gray-600">View and track all your previous orders</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Order #{order.id}</h4>
                        <p className="text-sm text-gray-600">📅 {formatDate(order.date)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize bg-blue-100 text-blue-800`}>
                          {order.status}
                        </span>
                        <div>
                          <div className="text-xl font-bold text-gray-900">${order.total}</div>
                          <div className="text-sm text-gray-600">{order.items.length} item{order.items.length > 1 ? 's' : ''}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.title}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-gray-900">${item.price}</div>
                      </div>
                    ))}
                  </div>


                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Order Status: <span className="font-medium capitalize">{order.status}</span></span>
                      <span>Order Date: {formatDate(order.date)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;