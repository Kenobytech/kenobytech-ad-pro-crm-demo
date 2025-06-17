'use client'

import React, { useState, useEffect } from 'react';
import { Search, Plus, Mail, Phone, Calendar, TrendingUp, Users, DollarSign, Target, Bot, Zap, MessageSquare, BarChart3, Filter, ChevronDown, Star, Send, Lightbulb, Car, CreditCard, Clock, MapPin, Settings } from 'lucide-react';

const CarSalesCRM = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLead, setSelectedLead] = useState(null);
  const [chatMessages, setChatMessages] = useState<{sender: string; content: string; timestamp: Date}[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Car dealership specific data
  const leads = [
    { 
      id: 1, 
      name: 'Mike Rodriguez', 
      email: 'mike.rodriguez@email.com', 
      phone: '(555) 123-4567', 
      score: 92, 
      status: 'hot', 
      budget: '$45,000', 
      lastContact: '2 hours ago', 
      interestedVehicle: '2024 Honda Accord',
      tradeIn: '2019 Honda Civic',
      financing: 'Pre-approved',
      aiInsight: 'Ready to buy TODAY - financing approved, trade-in valued. Strong urgency signals.',
      source: 'Website',
      appointmentSet: true,
      appointmentDate: 'Today 3:00 PM',
      notes: 'Looking for family sedan. Has trade-in. Approved for $50k financing.',
      buyingStage: 'Ready to Purchase',
      followUpPriority: 'URGENT'
    },
    { 
      id: 2, 
      name: 'Sarah Chen', 
      email: 'sarah.chen@gmail.com', 
      phone: '(555) 234-5678', 
      score: 78, 
      status: 'warm', 
      budget: '$35,000', 
      lastContact: '1 day ago', 
      interestedVehicle: '2024 Toyota Camry',
      tradeIn: 'None',
      financing: 'Needs financing',
      aiInsight: 'Price shopping - mentioned competitor pricing. Schedule test drive to build engagement.',
      source: 'Facebook Ad',
      appointmentSet: false,
      appointmentDate: null,
      notes: 'First-time buyer. Concerned about monthly payments. Researching multiple brands.',
      buyingStage: 'Shopping',
      followUpPriority: 'HIGH'
    },
    { 
      id: 3, 
      name: 'David Thompson', 
      email: 'dthompson@company.com', 
      phone: '(555) 345-6789', 
      score: 85, 
      status: 'hot', 
      budget: '$65,000', 
      lastContact: '6 hours ago', 
      interestedVehicle: '2024 Ford F-150',
      tradeIn: '2020 Ford F-150',
      financing: 'Cash/Trade',
      aiInsight: 'Repeat customer - bought 3 vehicles from us. High lifetime value. Loyalty program eligible.',
      source: 'Referral',
      appointmentSet: true,
      appointmentDate: 'Tomorrow 10:00 AM',
      notes: 'Fleet manager for construction company. Looking to upgrade work truck.',
      buyingStage: 'Ready to Purchase',
      followUpPriority: 'HIGH'
    },
    { 
      id: 4, 
      name: 'Jennifer Wilson', 
      email: 'jwilson@email.com', 
      phone: '(555) 456-7890', 
      score: 45, 
      status: 'cold', 
      budget: '$25,000', 
      lastContact: '1 week ago', 
      interestedVehicle: '2022 Nissan Sentra',
      tradeIn: 'None',
      financing: 'Credit issues',
      aiInsight: 'Credit challenges detected. Connect with finance team for special programs.',
      source: 'Walk-in',
      appointmentSet: false,
      appointmentDate: null,
      notes: 'College student. Limited budget. May need co-signer or special financing.',
      buyingStage: 'Researching',
      followUpPriority: 'MEDIUM'
    },
    { 
      id: 5, 
      name: 'Robert Kim', 
      email: 'robert.kim@email.com', 
      phone: '(555) 567-8901', 
      score: 88, 
      status: 'hot', 
      budget: '$55,000', 
      lastContact: '4 hours ago', 
      interestedVehicle: '2024 Jeep Grand Cherokee',
      tradeIn: '2018 Honda Pilot',
      financing: 'Exploring options',
      aiInsight: 'Family growing - needs larger vehicle. Emotional buyer. Focus on safety features.',
      source: 'Google Ad',
      appointmentSet: true,
      appointmentDate: 'Saturday 1:00 PM',
      notes: 'Wife is pregnant. Current vehicle too small. Wants 3-row seating.',
      buyingStage: 'Comparing Options',
      followUpPriority: 'HIGH'
    }
  ];

  const metrics = [
    { title: 'Monthly Sales', value: '$485,000', change: '+18%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Active Leads', value: '127', change: '+23%', icon: Users, color: 'text-blue-600' },
    { title: 'Conversion Rate', value: '28%', change: '+7%', icon: Target, color: 'text-purple-600' },
    { title: 'Avg Deal Value', value: '$42,300', change: '+12%', icon: Car, color: 'text-orange-600' }
  ];

  const aiSuggestions = [
    { 
      priority: 'urgent', 
      action: 'Call Mike Rodriguez NOW', 
      reason: 'Appointment in 2 hours - financing approved, trade valued', 
      impact: '$45,000 deal closing today',
      leadId: 1
    },
    { 
      priority: 'high', 
      action: 'Send inventory alert to Robert Kim', 
      reason: 'New Grand Cherokee arrived matching his specs', 
      impact: '$55,000 potential sale',
      leadId: 5
    },
    { 
      priority: 'high', 
      action: 'Schedule test drive for Sarah Chen', 
      reason: 'Mentioned competitor pricing - need to build engagement', 
      impact: '$35,000 potential sale',
      leadId: 2
    },
    { 
      priority: 'medium', 
      action: 'Connect Jennifer with finance specialist', 
      reason: 'Credit challenges - special programs available', 
      impact: '$25,000 potential sale',
      leadId: 4
    }
  ];

  const todayAppointments = [
    { time: '9:00 AM', customer: 'Lisa Martinez', vehicle: '2024 Toyota RAV4', type: 'Test Drive', status: 'confirmed' },
    { time: '11:00 AM', customer: 'John Smith', vehicle: '2024 Chevy Silverado', type: 'Delivery', status: 'confirmed' },
    { time: '3:00 PM', customer: 'Mike Rodriguez', vehicle: '2024 Honda Accord', type: 'Purchase', status: 'hot-lead' },
    { time: '4:30 PM', customer: 'Amy Johnson', vehicle: '2023 Ford Escape', type: 'Test Drive', status: 'confirmed' }
  ];

  const inventory = [
    { make: 'Honda', model: 'Accord', year: 2024, price: '$28,500', stock: 12, hotLeads: 3 },
    { make: 'Toyota', model: 'Camry', year: 2024, price: '$26,800', stock: 8, hotLeads: 2 },
    { make: 'Ford', model: 'F-150', year: 2024, price: '$35,000', stock: 15, hotLeads: 5 },
    { make: 'Jeep', model: 'Grand Cherokee', year: 2024, price: '$38,500', stock: 6, hotLeads: 4 }
  ];

  const simulateCarSalesAI = (message: string) => {
    const responses = [
      "🚗 Market Analysis: Based on recent inventory movement, SUVs are selling 40% faster than sedans this month. Consider promoting Jeep Grand Cherokee to leads with families.",
      "💰 Financing Alert: Interest rates dropped 0.25% this week. Perfect time to re-contact leads who were concerned about monthly payments. I've identified 12 leads to target.",
      "🎯 Hot Lead Alert: Mike Rodriguez just viewed the Honda Accord listing 3 times in the last hour. His appointment is today at 3 PM - he's ready to buy!",
      "📊 Performance Insight: Your conversion rate is 28% (industry average is 18%). Your strong follow-up game is paying off. Keep focusing on test drives within 48 hours of first contact.",
      "🔥 Urgent Action: David Thompson's trade-in value just increased by $2,000 due to market conditions. Call him immediately - this could close the deal!",
      "📈 Sales Opportunity: Jennifer Wilson mentioned credit concerns. Our new graduate program launched this week with 0% down options. Perfect timing to re-engage her.",
      "🚙 Inventory Match: New Ford F-150 arrived today that matches exactly what 3 of your hot leads requested. Send inventory alerts immediately to David Thompson, Mark Foster, and Steve Wilson.",
      "⏰ Timing Intelligence: Sarah Chen typically responds to messages between 6-8 PM based on her engagement patterns. Schedule your follow-up call accordingly for maximum impact."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = { sender: 'user', content: newMessage, timestamp: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponse = { 
        sender: 'ai', 
        content: simulateCarSalesAI(newMessage), 
        timestamp: new Date() 
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.interestedVehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'hot': return 'bg-red-100 text-red-800';
      case 'warm': return 'bg-yellow-100 text-yellow-800';
      case 'cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'urgent': return 'border-l-red-600 bg-red-50';
      case 'high': return 'border-l-orange-500 bg-orange-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">AI Sales Assistant Active</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                New Lead
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'leads', label: 'Leads', icon: Users },
              { id: 'appointments', label: 'Today\'s Schedule', icon: Calendar },
              { id: 'inventory', label: 'Hot Inventory', icon: Car },
              { id: 'ai-coach', label: 'AI Sales Coach', icon: Bot }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                      <p className={`text-sm mt-1 ${metric.color}`}>{metric.change} from last month</p>
                    </div>
                    <div className={`p-3 rounded-lg ${metric.color} bg-opacity-10`}>
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Suggestions - Priority Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                  AI Priority Actions - Next 2 Hours
                </h3>
                <span className="text-sm text-green-600 font-medium">Updated 2 minutes ago</span>
              </div>
              <div className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${getPriorityColor(suggestion.priority)}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-lg">{suggestion.action}</p>
                        <p className="text-sm text-gray-600 mt-1">{suggestion.reason}</p>
                        <p className="text-sm font-medium text-green-600 mt-2">{suggestion.impact}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          suggestion.priority === 'urgent' ? 'bg-red-500 text-white animate-pulse' :
                          suggestion.priority === 'high' ? 'bg-orange-500 text-white' :
                          suggestion.priority === 'medium' ? 'bg-yellow-500 text-white' :
                          'bg-green-500 text-white'
                        }`}>
                          {suggestion.priority.toUpperCase()}
                        </span>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                          Take Action
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Appointments */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                Today's Appointments
              </h3>
              <div className="space-y-4">
                {todayAppointments.map((appointment, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-lg border ${
                    appointment.status === 'hot-lead' ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        appointment.status === 'hot-lead' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        <Clock className={`h-4 w-4 ${
                          appointment.status === 'hot-lead' ? 'text-red-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.time} - {appointment.customer}</p>
                        <p className="text-sm text-gray-600">{appointment.vehicle} • {appointment.type}</p>
                      </div>
                    </div>
                    {appointment.status === 'hot-lead' && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        HOT LEAD
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search leads by name or vehicle..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                </div>
                <div className="text-sm text-gray-500 ml-4">
                  {filteredLeads.length} active leads
                </div>
              </div>
            </div>

            {/* Leads Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredLeads.map(lead => (
                <div key={lead.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                      <p className="text-blue-600 font-medium">{lead.interestedVehicle}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                        {lead.status.toUpperCase()}
                      </span>
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" />
                        <span className="text-xs font-medium">{lead.score}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Budget:</span>
                        <span className="font-medium text-green-600 ml-2">{lead.budget}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Financing:</span>
                        <span className="font-medium ml-2">{lead.financing}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="text-gray-500">Trade-in:</span>
                      <span className="font-medium ml-2">{lead.tradeIn}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Last contact: {lead.lastContact}</span>
                      <span className="text-gray-500">Source: {lead.source}</span>
                    </div>

                    {lead.appointmentSet && (
                      <div className="bg-green-50 p-2 rounded-lg">
                        <div className="flex items-center text-sm text-green-800">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">Appointment: {lead.appointmentDate}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start">
                      <Bot className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-blue-900 font-medium">{lead.aiInsight}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button 
                      onClick={() => setSelectedLead(lead)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      View Details
                    </button>
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
                      <Phone className="h-4 w-4" />
                    </button>
                    <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-blue-600 mr-3" />
              Today's Schedule - {new Date().toLocaleDateString()}
            </h3>
            <div className="space-y-4">
              {todayAppointments.map((appointment, index) => (
                <div key={index} className={`p-6 rounded-lg border-l-4 ${
                  appointment.status === 'hot-lead' ? 'bg-red-50 border-l-red-500' : 'bg-blue-50 border-l-blue-500'
                }`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-gray-900">{appointment.time}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          appointment.status === 'hot-lead' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                        }`}>
                          {appointment.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{appointment.customer}</h4>
                      <p className="text-gray-600">{appointment.vehicle}</p>
                      {appointment.status === 'hot-lead' && (
                        <p className="text-red-600 font-medium mt-2">⚡ High priority - ready to purchase!</p>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        Call Customer
                      </button>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Prep Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {activeTab === 'inventory' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Car className="h-6 w-6 text-blue-600 mr-3" />
              Hot Inventory - Vehicles with Active Interest
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inventory.map((vehicle, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h4>
                      <p className="text-2xl font-bold text-green-600">{vehicle.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">In Stock</p>
                      <p className="text-lg font-semibold">{vehicle.stock} units</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-orange-800 font-medium">Hot Leads Interested:</span>
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {vehicle.hotLeads} leads
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Interested Leads
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Coach Tab */}
        {activeTab === 'ai-coach' && (
          <div className="bg-white rounded-xl shadow-lg h-96 flex flex-col">
            <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Bot className="h-5 w-5 text-blue-600 mr-2" />
                AI Sales Coach
              </h3>
              <p className="text-sm text-gray-500 mt-1">Get real-time coaching on leads, pricing, objection handling, and closing techniques</p>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              {chatMessages.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <Bot className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="font-medium">Your AI Sales Coach is ready to help!</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>Try asking:</p>
                    <div className="bg-gray-50 p-3 rounded-lg space-y-1">
                      <p>"How should I handle Mike Rodriguez's appointment today?"</p>
                      <p>"What's the best approach for Sarah Chen's price objection?"</p>
                      <p>"Show me financing options for Jennifer Wilson"</p>
                      <p>"Which leads should I prioritize this afternoon?"</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-900 border'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 px-4 py-3 rounded-lg border">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask your AI sales coach anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedLead.name}</h2>
                  <p className="text-blue-600 font-medium text-lg">{selectedLead.interestedVehicle}</p>
                  <p className="text-gray-500">Lead Score: {selectedLead.score}/100</p>
                </div>
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b pb-2">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-sm">{selectedLead.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-sm">{selectedLead.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-sm">Source: {selectedLead.source}</span>
                    </div>
                  </div>
                </div>

                {/* Vehicle & Financial Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b pb-2">Vehicle & Financial Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500">Budget:</span>
                      <span className="ml-2 font-medium text-green-600">{selectedLead.budget}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Trade-in:</span>
                      <span className="ml-2 font-medium">{selectedLead.tradeIn}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Financing:</span>
                      <span className="ml-2 font-medium">{selectedLead.financing}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Buying Stage:</span>
                      <span className="ml-2 font-medium text-blue-600">{selectedLead.buyingStage}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Info */}
              {selectedLead.appointmentSet && (
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Scheduled Appointment
                  </h3>
                  <p className="text-green-700 font-medium">{selectedLead.appointmentDate}</p>
                </div>
              )}

              {/* Notes */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{selectedLead.notes}</p>
              </div>
              
              {/* AI Insights */}
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Bot className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-900 mb-1">AI Sales Insight</p>
                    <p className="text-sm text-blue-800">{selectedLead.aiInsight}</p>
                    <div className="mt-3">
                      <span className="text-xs text-blue-700 font-medium">Next Action Priority: </span>
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                        selectedLead.followUpPriority === 'URGENT' ? 'bg-red-500 text-white' :
                        selectedLead.followUpPriority === 'HIGH' ? 'bg-orange-500 text-white' :
                        'bg-yellow-500 text-white'
                      }`}>
                        {selectedLead.followUpPriority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6">
                <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  📞 Call Now
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  📧 Send Email
                </button>
                <button className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  📅 Schedule Appointment
                </button>
                <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarSalesCRM;
