'use client'

import React, { useState } from 'react';
import { Car, Users, DollarSign, Target, Bot, Calendar, Phone, Mail } from 'lucide-react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

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
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Book Demo
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {['Dashboard', 'Leads', 'Appointments', 'AI Coach'].map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab.toLowerCase())}
                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                  selectedTab === tab.toLowerCase() 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Sales</p>
                  <p className="text-2xl font-bold text-gray-900">$485,000</p>
                  <p className="text-sm text-green-600">+18% from last month</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Leads</p>
                  <p className="text-2xl font-bold text-gray-900">127</p>
                  <p className="text-sm text-blue-600">+23% from last month</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">28%</p>
                  <p className="text-sm text-purple-600">+7% from last month</p>
                </div>
                <Target className="h-8 w-8 text-purple-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">AI Score Avg</p>
                  <p className="text-2xl font-bold text-gray-900">76</p>
                  <p className="text-sm text-orange-600">+3% from last month</p>
                </div>
                <Bot className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Hot Leads */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🔥 Hot Leads - Action Required</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">Mike Rodriguez - 2024 Honda Accord</h4>
                    <p className="text-sm text-gray-600">Appointment TODAY at 3:00 PM • Pre-approved financing</p>
                    <p className="text-sm font-medium text-green-600">$45,000 potential sale</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Call
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Chen - 2024 Toyota Camry</h4>
                    <p className="text-sm text-gray-600">Price shopping • Mentioned competitor pricing</p>
                    <p className="text-sm font-medium text-green-600">$35,000 potential sale</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Call
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                      Schedule Test Drive
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">David Thompson - 2024 Ford F-150</h4>
                    <p className="text-sm text-gray-600">Repeat customer • Fleet manager • Has trade-in</p>
                    <p className="text-sm font-medium text-green-600">$65,000 potential sale</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Call
                    </button>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                      Send Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Increase Your Sales by 15-30%?</h3>
            <p className="text-xl mb-6">See how AutoDealer Pro helps car dealerships sell more with AI-powered lead management</p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                Schedule Free Demo
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
