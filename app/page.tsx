'use client'

import React, { useState, useEffect } from 'react';
import { Car, Users, DollarSign, Target, Bot, Calendar, Phone, Mail, TrendingUp, Zap, Star, Clock, CheckCircle, ArrowUp, Eye, Filter, Search, Bell, BarChart3 } from 'lucide-react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [animatedValue, setAnimatedValue] = useState(0);

  // Animate numbers on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(485000);
    }, 500);
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

  const hotLeads = [
    {
      id: 1,
      name: 'Mike Rodriguez',
      vehicle: '2024 Honda Accord',
      value: 45000,
      urgency: 'urgent',
      lastActivity: '2 minutes ago',
      status: 'appointment-today',
      score: 95,
      financing: 'Pre-approved',
      tradeIn: '2019 Honda Civic',
      notes: 'Appointment at 3:00 PM today. Ready to purchase.',
      timeline: 'Today',
      probability: 95
    },
    {
      id: 2,
      name: 'Sarah Chen',
      vehicle: '2024 Toyota Camry',
      value: 35000,
      urgency: 'high',
      lastActivity: '15 minutes ago',
      status: 'price-shopping',
      score: 78,
      financing: 'Needs financing',
      tradeIn: 'None',
      notes: 'Comparing prices with competitors. Schedule test drive.',
      timeline: 'This week',
      probability: 72
    },
    {
      id: 3,
      name: 'David Thompson',
      vehicle: '2024 Ford F-150',
      value: 65000,
      urgency: 'high',
      lastActivity: '1 hour ago',
      status: 'repeat-customer',
      score: 88,
      financing: 'Cash buyer',
      tradeIn: '2020 Ford F-150',
      notes: 'Fleet manager. Bought 3 vehicles from us before.',
      timeline: 'Next few days',
      probability: 85
    },
    {
      id: 4,
      name: 'Jennifer Wilson',
      vehicle: '2022 Nissan Sentra',
      value: 25000,
      urgency: 'medium',
      lastActivity: '2 hours ago',
      status: 'financing-needed',
      score: 45,
      financing: 'Credit challenges',
      tradeIn: 'None',
      notes: 'College student. May need co-signer.',
      timeline: 'Next week',
      probability: 40
    }
  ];

  const appointments = [
    { time: '9:00 AM', customer: 'Lisa Martinez', vehicle: '2024 Toyota RAV4', type: 'Test Drive', status: 'confirmed', value: 32000 },
    { time: '11:00 AM', customer: 'John Smith', vehicle: '2024 Chevy Silverado', type: 'Delivery', status: 'delivery', value: 45000 },
    { time: '3:00 PM', customer: 'Mike Rodriguez', vehicle: '2024 Honda Accord', type: 'Purchase Meeting', status: 'hot', value: 45000 },
    { time: '4:30 PM', customer: 'Amy Johnson', vehicle: '2023 Ford Escape', type: 'Follow-up', status: 'confirmed', value: 28000 }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Modern Header with Glass Effect */}
      <div className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-3 rounded-2xl shadow-lg">
                <Car className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  AutoDealer Pro
                </h1>
                <p className="text-sm text-gray-500 font-medium">AI-Powered Car Sales Management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">AI Active</span>
              </div>
              
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                Book Demo Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Modern Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-white/60 backdrop-blur-lg p-1 rounded-2xl shadow-lg border border-white/20">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'leads', label: 'Hot Leads', icon: Users },
              { id: 'appointments', label: 'Today\'s Schedule', icon: Calendar },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'ai-coach', label: 'AI Coach', icon: Bot }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  selectedTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
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
            {/* Enhanced Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-semibold">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    +18%
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Monthly Sales</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(animatedValue)}</p>
                  <p className="text-xs text-gray-500 mt-1">Target: $500,000</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-blue-600 text-sm font-semibold">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    +23%
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Active Leads</p>
                  <p className="text-3xl font-bold text-gray-900">127</p>
                  <p className="text-xs text-gray-500 mt-1">18 hot leads</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-purple-600 text-sm font-semibold">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    +7%
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Conversion Rate</p>
                  <p className="text-3xl font-bold text-gray-900">28%</p>
                  <p className="text-xs text-gray-500 mt-1">Industry avg: 18%</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-xl">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-orange-600 text-sm font-semibold">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    +3%
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">AI Score Avg</p>
                  <p className="text-3xl font-bold text-gray-900">76</p>
                  <p className="text-xs text-gray-500 mt-1">Excellent range</p>
                </div>
              </div>
            </div>

            {/* AI Recommendations - Modern Design */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center">
                    <Bot className="h-6 w-6 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">AI Priority Actions</h3>
                      <p className="text-blue-100 text-sm">Next 2 hours • Auto-updated every 5 minutes</p>
                    </div>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">Live</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  {
                    priority: 'URGENT',
                    action: '📞 Call Mike Rodriguez NOW',
                    reason: 'Appointment in 45 minutes • $45K deal ready to close',
                    color: 'red',
                    time: '⏰ Next 15 min'
                  },
                  {
                    priority: 'HIGH',
                    action: '🚗 Send inventory to Robert Kim',
                    reason: 'New Grand Cherokee matches his specs exactly',
                    color: 'orange',
                    time: '⏰ Next 30 min'
                  },
                  {
                    priority: 'HIGH',
                    action: '📅 Schedule Sarah Chen test drive',
                    reason: 'Price shopping - need engagement before competitor wins',
                    color: 'orange',
                    time: '⏰ Today'
                  }
                ].map((item, index) => (
                  <div key={index} className={`p-5 rounded-xl border-l-4 ${
                    item.color === 'red' ? 'border-red-500 bg-red-50' :
                    item.color === 'orange' ? 'border-orange-500 bg-orange-50' :
                    'border-yellow-500 bg-yellow-50'
                  } hover:shadow-lg transition-all duration-200`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`px-3 py-1 text-xs font-bold rounded-full mr-3 ${
                            item.color === 'red' ? 'bg-red-500 text-white animate-pulse' :
                            item.color === 'orange' ? 'bg-orange-500 text-white' :
                            'bg-yellow-500 text-white'
                          }`}>
                            {item.priority}
                          </span>
                          <span className="text-xs text-gray-500">{item.time}</span>
                        </div>
                        <p className="font-bold text-gray-900 text-lg mb-1">{item.action}</p>
                        <p className="text-gray-600 text-sm">{item.reason}</p>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium ml-4">
                        Take Action
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Appointments - Enhanced */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-white/50">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                    Today's Schedule
                  </h3>
                  <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {appointments.map((appointment, index) => (
                  <div key={index} className={`p-5 rounded-xl border ${
                    appointment.status === 'hot' ? 'border-red-200 bg-red-50' :
                    appointment.status === 'delivery' ? 'border-green-200 bg-green-50' :
                    'border-gray-200 bg-white'
                  } hover:shadow-lg transition-all duration-200`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${
                          appointment.status === 'hot' ? 'bg-red-100' :
                          appointment.status === 'delivery' ? 'bg-green-100' :
                          'bg-blue-100'
                        }`}>
                          <Clock className={`h-5 w-5 ${
                            appointment.status === 'hot' ? 'text-red-600' :
                            appointment.status === 'delivery' ? 'text-green-600' :
                            'text-blue-600'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <span className="text-xl font-bold text-gray-900">{appointment.time}</span>
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                              appointment.status === 'hot' ? 'bg-red-500 text-white animate-pulse' :
                              appointment.status === 'delivery' ? 'bg-green-500 text-white' :
                              'bg-blue-500 text-white'
                            }`}>
                              {appointment.type}
                            </span>
                          </div>
                          <p className="font-semibold text-gray-900">{appointment.customer}</p>
                          <p className="text-gray-600 text-sm">{appointment.vehicle} • {formatCurrency(appointment.value)}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          <Phone className="h-4 w-4" />
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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

        {/* Hot Leads Tab */}
        {selectedTab === 'leads' && (
          <div className="space-y-6">
            {/* Search Header */}
            <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search leads by name, vehicle, or criteria..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    />
                  </div>
                  <button className="flex items-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 bg-white shadow-sm">
                    <Filter className="h-5 w-5 mr-2" />
                    Filter
                  </button>
                </div>
                <div className="text-sm text-gray-600 ml-6">
                  <span className="font-semibold">{hotLeads.length}</span> hot leads • <span className="text-green-600 font-semibold">$170K</span> pipeline
                </div>
              </div>
            </div>

            {/* Leads Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hotLeads.map(lead => (
                <div key={lead.id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Lead Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{lead.name}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{lead.vehicle}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${getUrgencyColor(lead.urgency)} rounded-full animate-pulse`}></div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-bold">{lead.score}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Value:</span>
                        <span className="font-bold text-green-600 ml-2">{formatCurrency(lead.value)}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Probability:</span>
                        <span className="font-bold ml-2">{lead.probability}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <span className="font-semibold ml-2">{lead.timeline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Last Activity:</span>
                        <span className="font-semibold ml-2">{lead.lastActivity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Lead Details */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Financing:</span>
                        <span className="font-semibold ml-2">{lead.financing}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Trade-in:</span>
                        <span className="font-semibold ml-2">{lead.tradeIn}</span>
                      </div>
                    </div>

                    {/* AI Insight */}
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-start">
                        <Bot className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-blue-900 mb-1">AI Insight</p>
                          <p className="text-sm text-blue-800">{lead.notes}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </button>
                      <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white p-8 rounded-3xl text-center shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Ready to Increase Sales by 15-30%?</h3>
            <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Join 200+ dealerships using AI to identify hot leads, optimize follow-ups, and close more deals
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                📞 Schedule Free Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-200">
                🚀 Try Live Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Setup in 24 hours
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No long-term contract
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
