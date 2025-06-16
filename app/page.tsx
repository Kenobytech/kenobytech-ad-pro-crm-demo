'use client'

import React, { useState, useEffect } from 'react';
import { Car, Users, DollarSign, Target, Bot, Calendar, Phone, Mail, TrendingUp, Star, Clock, CheckCircle, ArrowUp, Eye, Filter, Search, Bell, BarChart3 } from 'lucide-react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [animatedValue, setAnimatedValue] = useState(0);

  // Animate numbers on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(485000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Header */}
      <div className="bg-white shadow-2xl border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  AutoDealer Pro
                </h1>
                <p className="text-blue-600 font-semibold">AI-Powered Car Sales Management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full border-2 border-green-200">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold">AI ACTIVE</span>
              </div>
              
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-200">
                🚀 Book Demo Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-2 bg-white p-2 rounded-2xl shadow-xl">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'leads', label: 'Hot Leads', icon: Users },
              { id: 'appointments', label: 'Schedule', icon: Calendar },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'ai-coach', label: 'AI Coach', icon: Bot }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center px-6 py-3 text-sm font-bold rounded-xl transition-all duration-200 ${
                  selectedTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        {selectedTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Monthly Sales', value: formatCurrency(animatedValue), change: '+18%', icon: DollarSign, color: 'green', bgColor: 'bg-green-500' },
                { title: 'Active Leads', value: '127', change: '+23%', icon: Users, color: 'blue', bgColor: 'bg-blue-500' },
                { title: 'Conversion Rate', value: '28%', change: '+7%', icon: Target, color: 'purple', bgColor: 'bg-purple-500' },
                { title: 'AI Score Avg', value: '76', change: '+3%', icon: Bot, color: 'orange', bgColor: 'bg-orange-500' }
              ].map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-2xl border-l-4 border-blue-500 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${metric.bgColor} p-3 rounded-xl shadow-lg`}>
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center text-green-600 text-sm font-bold">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      {metric.change}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-xs text-gray-500 mt-1">Industry leading</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Recommendations */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200">
              <div className="bg-blue-600 p-6">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center">
                    <Bot className="h-6 w-6 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">🤖 AI Priority Actions</h3>
                      <p className="text-blue-100 text-sm">Live recommendations • Updated every 2 minutes</p>
                    </div>
                  </div>
                  <div className="bg-green-500 px-3 py-1 rounded-full flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm font-bold">LIVE</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  {
                    priority: 'URGENT',
                    action: '🔥 Call Mike Rodriguez NOW',
                    reason: 'Appointment in 25 minutes • $45K deal ready to close',
                    time: '⏰ Next 5 minutes',
                    bgColor: 'bg-red-50',
                    borderColor: 'border-red-500',
                    badgeColor: 'bg-red-500'
                  },
                  {
                    priority: 'HIGH',
                    action: '🚗 Send inventory to Robert Kim',
                    reason: 'New Grand Cherokee matches his specs exactly',
                    time: '⏰ Next 15 minutes',
                    bgColor: 'bg-orange-50',
                    borderColor: 'border-orange-500',
                    badgeColor: 'bg-orange-500'
                  },
                  {
                    priority: 'HIGH',
                    action: '📅 Schedule Sarah Chen test drive',
                    reason: 'Competitor appointment tomorrow - act fast',
                    time: '⏰ Today',
                    bgColor: 'bg-yellow-50',
                    borderColor: 'border-yellow-500',
                    badgeColor: 'bg-yellow-500'
                  }
                ].map((item, index) => (
                  <div key={index} className={`p-5 rounded-xl border-l-4 ${item.borderColor} ${item.bgColor} hover:shadow-lg transition-all duration-200 transform hover:scale-102`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`px-3 py-1 text-xs font-bold rounded-full text-white mr-3 ${item.badgeColor} ${item.priority === 'URGENT' ? 'animate-pulse' : ''}`}>
                            {item.priority}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">{item.time}</span>
                        </div>
                        <p className="font-bold text-gray-900 text-lg mb-1">{item.action}</p>
                        <p className="text-gray-600 text-sm">{item.reason}</p>
                      </div>
                      <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-all duration-200 transform hover:scale-105">
                        Take Action
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-purple-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                  Today's Hot Schedule
                  <span className="ml-4 text-sm font-normal text-gray-500">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </h3>
              </div>
              
              <div className="p-6 space-y-4">
                {[
                  { time: '9:00 AM', customer: 'Lisa Martinez', vehicle: '2024 Toyota RAV4', type: 'Test Drive', status: 'confirmed', value: 32000, bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
                  { time: '11:00 AM', customer: 'John Smith', vehicle: '2024 Chevy Silverado', type: 'Delivery', status: 'delivery', value: 45000, bgColor: 'bg-green-50', iconColor: 'text-green-600' },
                  { time: '3:00 PM', customer: 'Mike Rodriguez', vehicle: '2024 Honda Accord', type: 'PURCHASE MEETING', status: 'hot', value: 45000, bgColor: 'bg-red-50', iconColor: 'text-red-600' },
                  { time: '4:30 PM', customer: 'Amy Johnson', vehicle: '2023 Ford Escape', type: 'Follow-up', status: 'confirmed', value: 28000, bgColor: 'bg-gray-50', iconColor: 'text-gray-600' }
                ].map((appointment, index) => (
                  <div key={index} className={`p-5 rounded-xl ${appointment.bgColor} border-2 ${appointment.status === 'hot' ? 'border-red-500' : 'border-gray-200'} hover:shadow-lg transition-all duration-200 transform hover:scale-102`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-white shadow-md`}>
                          <Clock className={`h-5 w-5 ${appointment.iconColor}`} />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <span className="text-xl font-bold text-gray-900">{appointment.time}</span>
                            <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                              appointment.status === 'hot' ? 'bg-red-500 animate-pulse' :
                              appointment.status === 'delivery' ? 'bg-green-500' : 'bg-blue-500'
                            }`}>
                              {appointment.type}
                            </span>
                            {appointment.status === 'hot' && (
                              <span className="text-red-600 text-sm font-bold animate-pulse">🔥 HOT DEAL</span>
                            )}
                          </div>
                          <p className="font-bold text-gray-900">{appointment.customer}</p>
                          <p className="text-gray-600 text-sm">{appointment.vehicle} • {formatCurrency(appointment.value)}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors transform hover:scale-105">
                          <Phone className="h-4 w-4" />
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors transform hover:scale-105">
                          <Mail className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call-to-Action */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-4 border-blue-500 mt-12" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Increase Sales by 15-30%?
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join 200+ dealerships using AI to identify hot leads and close more deals
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-xl transform hover:scale-105">
              📞 Schedule Free Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              🚀 Try Live Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Setup in 24 hours</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>30-day guarantee</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>No contract</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
