'use client'

import React, { useState, useEffect } from 'react';
import { Car, Users, DollarSign, Target, Bot, Calendar, Phone, Mail, TrendingUp, Zap, Star, Clock, CheckCircle, ArrowUp, Eye, Filter, Search, Bell, BarChart3, Sparkles, Activity } from 'lucide-react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animate numbers on load
  useEffect(() => {
    setIsVisible(true);
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.5) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Glass Effect */}
        <header className="bg-white/10 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur opacity-60 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-4 rounded-3xl">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-1">
                    AutoDealer Pro
                  </h1>
                  <p className="text-blue-200 font-medium flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    AI-Powered Car Sales Management
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3 bg-green-500/20 backdrop-blur-lg text-green-300 px-4 py-2 rounded-full border border-green-400/30">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-sm font-bold">AI ACTIVE</span>
                </div>
                
                <div className="relative">
                  <Bell className="h-6 w-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-bounce shadow-lg shadow-red-500/50 flex items-center justify-center">
                    <span className="text-xs text-white font-bold">3</span>
                  </div>
                </div>
                
                <button className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-xl">
                    🚀 Book Demo Call
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation with Glass Effect */}
          <div className="mb-10">
            <nav className="flex space-x-2 bg-white/10 backdrop-blur-xl p-2 rounded-3xl border border-white/20 shadow-2xl">
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
                  className={`relative flex items-center px-8 py-4 text-sm font-bold rounded-2xl transition-all duration-300 ${
                    selectedTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-purple-500/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.label}
                  {selectedTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-50 -z-10"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Dashboard Content */}
          {selectedTab === 'dashboard' && (
            <div className="space-y-10">
              {/* Hero Metrics */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {[
                  { title: 'Monthly Sales', value: formatCurrency(animatedValue), change: '+18%', icon: DollarSign, color: 'from-green-400 to-emerald-600', bg: 'from-green-500/20 to-emerald-500/20' },
                  { title: 'Active Leads', value: '127', change: '+23%', icon: Users, color: 'from-blue-400 to-cyan-600', bg: 'from-blue-500/20 to-cyan-500/20' },
                  { title: 'Conversion Rate', value: '28%', change: '+7%', icon: Target, color: 'from-purple-400 to-pink-600', bg: 'from-purple-500/20 to-pink-500/20' },
                  { title: 'AI Score Avg', value: '76', change: '+3%', icon: Bot, color: 'from-orange-400 to-red-600', bg: 'from-orange-500/20 to-red-500/20' }
                ].map((metric, index) => (
                  <div key={index} className={`relative group transition-all duration-500 delay-${index * 100}`}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                    <div className={`relative bg-gradient-to-br ${metric.bg} backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105`}>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`bg-gradient-to-br ${metric.color} p-4 rounded-2xl shadow-xl`}>
                          <metric.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex items-center text-green-400 text-sm font-bold">
                          <ArrowUp className="h-5 w-5 mr-1" />
                          {metric.change}
                        </div>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-medium mb-2">{metric.title}</p>
                        <p className="text-4xl font-bold text-white mb-1">{metric.value}</p>
                        <p className="text-white/50 text-xs">Industry leading</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Priority Actions */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/50 to-purple-500/50 rounded-3xl blur opacity-60"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-2xl mr-4">
                          <Bot className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">🤖 AI Priority Actions</h3>
                          <p className="text-blue-100">Live recommendations • Updated every 2 minutes</p>
                        </div>
                      </div>
                      <div className="bg-white/20 px-4 py-2 rounded-full">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                          <span className="text-sm font-bold">LIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    {[
                      {
                        priority: 'URGENT',
                        action: '🔥 Call Mike Rodriguez IMMEDIATELY',
                        reason: 'Appointment in 25 minutes • $45K deal ready to close • Financing pre-approved',
                        color: 'red',
                        time: '⏰ Next 5 minutes',
                        pulse: true
                      },
                      {
                        priority: 'HIGH',
                        action: '🚗 Send inventory alert to Robert Kim',
                        reason: 'New 2024 Grand Cherokee arrived - matches his exact specifications',
                        color: 'orange',
                        time: '⏰ Next 15 minutes',
                        pulse: false
                      },
                      {
                        priority: 'HIGH',
                        action: '📅 Schedule Sarah Chen test drive TODAY',
                        reason: 'Competitor appointment tomorrow - act fast to secure the deal',
                        color: 'orange',
                        time: '⏰ Before 5 PM today',
                        pulse: false
                      }
                    ].map((item, index) => (
                      <div key={index} className={`relative p-6 rounded-2xl border-l-4 transition-all duration-300 hover:scale-[1.02] ${
                        item.color === 'red' ? 'border-red-500 bg-red-500/10 backdrop-blur-xl' :
                        'border-orange-500 bg-orange-500/10 backdrop-blur-xl'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-3">
                              <span className={`px-4 py-2 text-xs font-black rounded-full mr-4 ${
                                item.color === 'red' ? 'bg-red-500 text-white shadow-lg shadow-red-500/50' :
                                'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                              } ${item.pulse ? 'animate-pulse' : ''}`}>
                                {item.priority}
                              </span>
                              <span className="text-xs text-white/60 font-medium">{item.time}</span>
                            </div>
                            <p className="font-bold text-white text-xl mb-2">{item.action}</p>
                            <p className="text-white/80 text-sm leading-relaxed">{item.reason}</p>
                          </div>
                          <button className="ml-6 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                              Take Action
                            </div>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur opacity-60"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                  <div className="p-8 border-b border-white/20">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <Calendar className="h-8 w-8 text-blue-400 mr-4" />
                      Today's Hot Schedule
                      <span className="ml-4 text-sm font-normal text-white/60">
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </h3>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    {[
                      { time: '9:00 AM', customer: 'Lisa Martinez', vehicle: '2024 Toyota RAV4', type: 'Test Drive', status: 'confirmed', value: 32000 },
                      { time: '11:00 AM', customer: 'John Smith', vehicle: '2024 Chevy Silverado', type: 'Delivery', status: 'delivery', value: 45000 },
                      { time: '3:00 PM', customer: 'Mike Rodriguez', vehicle: '2024 Honda Accord', type: 'PURCHASE MEETING', status: 'hot', value: 45000 },
                      { time: '4:30 PM', customer: 'Amy Johnson', vehicle: '2023 Ford Escape', type: 'Follow-up', status: 'confirmed', value: 28000 }
                    ].map((appointment, index) => (
                      <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                        appointment.status === 'hot' ? 'border-red-500/50 bg-red-500/10 shadow-xl shadow-red-500/20' :
                        appointment.status === 'delivery' ? 'border-green-500/50 bg-green-500/10 shadow-xl shadow-green-500/20' :
                        'border-white/20 bg-white/5'
                      }`}>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-6">
                            <div className={`p-4 rounded-2xl ${
                              appointment.status === 'hot' ? 'bg-red-500/20' :
                              appointment.status === 'delivery' ? 'bg-green-500/20' :
                              'bg-blue-500/20'
                            }`}>
                              <Clock className={`h-6 w-6 ${
                                appointment.status === 'hot' ? 'text-red-400' :
                                appointment.status === 'delivery' ? 'text-green-400' :
                                'text-blue-400'
                              }`} />
                            </div>
                            <div>
                              <div className="flex items-center space-x-4 mb-2">
                                <span className="text-2xl font-bold text-white">{appointment.time}</span>
                                <span className={`px-4 py-2 text-xs font-bold rounded-full ${
                                  appointment.status === 'hot' ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50' :
                                  appointment.status === 'delivery' ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' :
                                  'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                                }`}>
                                  {appointment.type}
                                </span>
                                {appointment.status === 'hot' && (
                                  <span className="text-red-400 text-sm font-bold animate-pulse">🔥 HOT DEAL</span>
                                )}
                              </div>
                              <p className="font-bold text-white text-lg">{appointment.customer}</p>
                              <p className="text-white/70">{appointment.vehicle} • {formatCurrency(appointment.value)}</p>
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <button className="bg-green-600/80 backdrop-blur-lg text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-all duration-200 font-bold">
                              <Phone className="h-5 w-5" />
                            </button>
                            <button className="bg-blue-600/80 backdrop-blur-lg text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 font-bold">
                              <Mail className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call-to-Action */}
          <div className="relative group mt-16">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 rounded-3xl text-center border border-white/20">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Ready to Increase Sales by 15-30%?
                </h3>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Join 200+ dealerships using AI to identify hot leads, optimize follow-ups, and close more deals faster than ever before
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                <button className="relative group">
                  <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl">
                    📞 Schedule Free Demo
                  </div>
                </button>
                <button className="relative group">
                  <div className="relative border-2 border-white text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                    🚀 Try Live Demo
                  </div>
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-12 text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  <span className="font-medium">Setup in 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  <span className="font-medium">30-day guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  <span className="font-medium">No long-term contract</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
