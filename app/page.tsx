'use client'

import React, { useState } from 'react';
import { Car, Users, DollarSign, Target, Bot, Calendar, TrendingUp, BarChart3 } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AutoDealer Pro</h1>
                <p className="text-sm text-gray-500">AI-Powered Car Sales Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Demo Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🚗 Car Dealership CRM Demo
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            AI-Powered Lead Management for Automotive Sales Teams
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">$485K</div>
              <div className="text-sm text-gray-600">Monthly Sales</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">127</div>
              <div className="text-sm text-gray-600">Active Leads</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">28%</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <Bot className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">AI</div>
              <div className="text-sm text-gray-600">Powered</div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">🎯 Ready to See the Full Demo?</h3>
            <p className="mb-4">This CRM helps car dealerships increase sales by 15-30% with AI-powered lead scoring and intelligent follow-up recommendations.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              Contact Sales for Full Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
