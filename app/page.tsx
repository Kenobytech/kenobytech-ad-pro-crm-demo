'use client'

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [animatedValue, setAnimatedValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Animate numbers and update time
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(485000);
    }, 1000);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
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
      notes: 'Appointment at 3:00 PM today. Ready to purchase. Has financing pre-approval letter.',
      timeline: 'Today',
      probability: 95,
      phone: '(555) 123-4567',
      email: 'mike.rodriguez@email.com'
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
      notes: 'Comparing prices with competitors. Mentioned she has appointments at Toyota and Nissan this week.',
      timeline: 'This week',
      probability: 72,
      phone: '(555) 234-5678',
      email: 'sarah.chen@gmail.com'
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
      notes: 'Fleet manager for construction company. Bought 3 vehicles from us in past 2 years. High lifetime value.',
      timeline: 'Next few days',
      probability: 85,
      phone: '(555) 345-6789',
      email: 'dthompson@company.com'
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
      notes: 'College student. Limited budget. May need co-signer or special financing program.',
      timeline: 'Next week',
      probability: 40,
      phone: '(555) 456-7890',
      email: 'jwilson@email.com'
    }
  ];

  const appointments = [
    { time: '9:00 AM', customer: 'Lisa Martinez', vehicle: '2024 Toyota RAV4', type: 'Test Drive', status: 'confirmed', value: 32000, notes: 'First-time buyer, very excited' },
    { time: '11:00 AM', customer: 'John Smith', vehicle: '2024 Chevy Silverado', type: 'Vehicle Delivery', status: 'delivery', value: 45000, notes: 'Final paperwork and key handover' },
    { time: '3:00 PM', customer: 'Mike Rodriguez', vehicle: '2024 Honda Accord', type: 'PURCHASE MEETING', status: 'hot', value: 45000, notes: 'READY TO BUY - Has financing approval' },
    { time: '4:30 PM', customer: 'Amy Johnson', vehicle: '2023 Ford Escape', type: 'Follow-up Call', status: 'confirmed', value: 28000, notes: 'Discussing financing options' }
  ];

  const inventory = [
    { make: 'Honda', model: 'Accord', year: 2024, price: 28500, stock: 12, hotLeads: 3, color: 'Silver', features: 'Navigation, Sunroof' },
    { make: 'Toyota', model: 'Camry', year: 2024, price: 26800, stock: 8, hotLeads: 2, color: 'White', features: 'Hybrid, Safety Package' },
    { make: 'Ford', model: 'F-150', year: 2024, price: 35000, stock: 15, hotLeads: 5, color: 'Blue', features: 'Crew Cab, 4WD' },
    { make: 'Jeep', model: 'Grand Cherokee', year: 2024, price: 38500, stock: 6, hotLeads: 4, color: 'Black', features: 'Leather, Premium Audio' }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case 'urgent': return '#dc2626';
      case 'high': return '#ea580c';
      case 'medium': return '#ca8a04';
      default: return '#059669';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'hot': return '#dc2626';
      case 'delivery': return '#059669';
      case 'confirmed': return '#2563eb';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '15px',
              borderRadius: '20px',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
            }}>
              <span style={{ fontSize: '24px' }}>🚗</span>
            </div>
            <div>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: 0
              }}>
                AutoDealer Pro
              </h1>
              <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>
                AI-Powered Car Sales Management
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              color: '#059669',
              padding: '8px 16px',
              borderRadius: '25px',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#22c55e',
                borderRadius: '50%'
              }}></div>
              <span style={{ fontSize: '12px', fontWeight: 'bold' }}>AI ACTIVE</span>
            </div>
            
            <div style={{ position: 'relative' }}>
              <span style={{ fontSize: '20px', cursor: 'pointer' }}>🔔</span>
              <div style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                width: '18px',
                height: '18px',
                backgroundColor: '#dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                color: 'white',
                fontWeight: 'bold'
              }}>3</div>
            </div>
            
            <button style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
            }}>
              🚀 Book Demo Call
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Navigation */}
        <div style={{ marginBottom: '40px' }}>
          <nav style={{
            display: 'flex',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '8px',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'leads', label: 'Hot Leads', icon: '🔥' },
              { id: 'appointments', label: 'Schedule', icon: '📅' },
              { id: 'inventory', label: 'Inventory', icon: '🚗' },
              { id: 'analytics', label: 'Analytics', icon: '📈' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  borderRadius: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: selectedTab === tab.id ? '#667eea' : 'transparent',
                  color: selectedTab === tab.id ? 'white' : '#6b7280',
                  boxShadow: selectedTab === tab.id ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'
                }}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        {selectedTab === 'dashboard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Real-time Clock */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '20px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 10px 0' }}>
                🕐 {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </h2>
              <p style={{ fontSize: '18px', color: '#6b7280', margin: 0 }}>
                {currentTime.toLocaleTimeString()}
              </p>
            </div>

            {/* Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px'
            }}>
              {[
                { title: 'Monthly Sales', value: formatCurrency(animatedValue), change: '+18%', icon: '💰', color: '#059669' },
                { title: 'Active Leads', value: '127', change: '+23%', icon: '👥', color: '#2563eb' },
                { title: 'Conversion Rate', value: '28%', change: '+7%', icon: '🎯', color: '#7c3aed' },
                { title: 'AI Score Avg', value: '76', change: '+3%', icon: '🤖', color: '#ea580c' }
              ].map((metric, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      fontSize: '32px',
                      padding: '15px',
                      backgroundColor: `${metric.color}20`,
                      borderRadius: '15px'
                    }}>
                      {metric.icon}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: metric.color,
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}>
                      <span>↗️</span>
                      {metric.change}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 5px 0' }}>{metric.title}</p>
                    <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{metric.value}</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af', margin: '5px 0 0 0' }}>Industry leading</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Priority Actions */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '30px',
                color: 'white'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '32px' }}>🤖</span>
                    <div>
                      <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>AI Priority Actions</h3>
                      <p style={{ fontSize: '14px', opacity: 0.8, margin: '5px 0 0 0' }}>Live recommendations • Updated every 2 minutes</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    padding: '8px 16px',
                    borderRadius: '25px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#22c55e',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>LIVE</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    {
                      priority: 'URGENT',
                      action: '🔥 Call Mike Rodriguez IMMEDIATELY',
                      reason: 'Appointment in 25 minutes • $45K deal ready to close • Financing pre-approved',
                      time: '⏰ Next 5 minutes',
                      color: '#dc2626'
                    },
                    {
                      priority: 'HIGH',
                      action: '🚗 Send inventory alert to Robert Kim',
                      reason: 'New 2024 Grand Cherokee arrived - matches his exact specifications',
                      time: '⏰ Next 15 minutes',
                      color: '#ea580c'
                    },
                    {
                      priority: 'HIGH',
                      action: '📅 Schedule Sarah Chen test drive TODAY',
                      reason: 'Competitor appointment tomorrow - act fast to secure the deal',
                      time: '⏰ Before 5 PM today',
                      color: '#ea580c'
                    }
                  ].map((item, index) => (
                    <div key={index} style={{
                      padding: '25px',
                      borderRadius: '15px',
                      borderLeft: `4px solid ${item.color}`,
                      backgroundColor: `${item.color}10`,
                      cursor: 'pointer'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                            <span style={{
                              padding: '6px 12px',
                              fontSize: '10px',
                              fontWeight: 'bold',
                              borderRadius: '20px',
                              backgroundColor: item.color,
                              color: 'white'
                            }}>
                              {item.priority}
                            </span>
                            <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>{item.time}</span>
                          </div>
                          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 8px 0' }}>{item.action}</p>
                          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>{item.reason}</p>
                        </div>
                        <button style={{
                          marginLeft: '20px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          padding: '10px 20px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer'
                        }}>
                          Take Action
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 20px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                📅 Today's Hot Schedule
                <span style={{ fontSize: '14px', fontWeight: 'normal', color: '#6b7280' }}>
                  {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {appointments.map((appointment, index) => (
                  <div key={index} style={{
                    padding: '25px',
                    borderRadius: '15px',
                    backgroundColor: appointment.status === 'hot' ? '#fee2e2' : 
                                   appointment.status === 'delivery' ? '#dcfce7' : '#f3f4f6',
                    border: `2px solid ${getStatusColor(appointment.status)}20`,
                    cursor: 'pointer'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{
                          padding: '15px',
                          borderRadius: '15px',
                          backgroundColor: 'white',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}>
                          <span style={{ fontSize: '20px' }}>🕐</span>
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>{appointment.time}</span>
                            <span style={{
                              padding: '4px 12px',
                              fontSize: '10px',
                              fontWeight: 'bold',
                              borderRadius: '20px',
                              backgroundColor: getStatusColor(appointment.status),
                              color: 'white'
                            }}>
                              {appointment.type}
                            </span>
                            {appointment.status === 'hot' && (
                              <span style={{ color: '#dc2626', fontSize: '14px', fontWeight: 'bold' }}>🔥 HOT DEAL</span>
                            )}
                          </div>
                          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>{appointment.customer}</p>
                          <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 4px 0' }}>{appointment.vehicle} • {formatCurrency(appointment.value)}</p>
                          <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>{appointment.notes}</p>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={{
                          backgroundColor: '#059669',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer'
                        }}>
                          📞 Call
                        </button>
                        <button style={{
                          backgroundColor: '#2563eb',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer'
                        }}>
                          📧 Email
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Search Header */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '25px',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1, minWidth: '300px' }}>
                  <input
                    type="text"
                    placeholder="Search leads by name, vehicle, or criteria..."
                    style={{
                      flex: 1,
                      padding: '12px 20px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <button style={{
                    padding: '12px 20px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    🔍 Filter
                  </button>
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                  <span style={{ fontWeight: 'bold' }}>{hotLeads.length}</span> hot leads • 
                  <span style={{ color: '#059669', fontWeight: 'bold' }}> $170K</span> pipeline
                </div>
              </div>
            </div>

            {/* Leads Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '25px'
            }}>
              {hotLeads.map(lead => (
                <div key={lead.id} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '20px',
                  padding: '25px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer'
                }}>
                  {/* Lead Header */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                      <div>
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 5px 0' }}>{lead.name}</h3>
                        <p style={{ fontSize: '16px', fontWeight: '600', color: '#2563eb', margin: 0 }}>{lead.vehicle}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: getUrgencyColor(lead.urgency),
                          borderRadius: '50%'
                        }}></div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          backgroundColor: '#f3f4f6',
                          padding: '5px 10px',
                          borderRadius: '20px'
                        }}>
                          <span style={{ fontSize: '12px' }}>⭐</span>
                          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{lead.score}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      fontSize: '14px'
                    }}>
                      <div>
                        <span style={{ color: '#6b7280' }}>Value:</span>
                        <span style={{ fontWeight: 'bold', color: '#059669', marginLeft: '8px' }}>{formatCurrency(lead.value)}</span>
                      </div>
                      <div>
                        <span style={{ color: '#6b7280' }}>Probability:</span>
                        <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>{lead.probability}%</span>
                      </div>
                      <div>
                        <span style={{ color: '#6b7280' }}>Timeline:</span>
                        <span style={{ fontWeight: '600', marginLeft: '8px' }}>{lead.timeline}</span>
                      </div>
                      <div>
                        <span style={{ color: '#6b7280' }}>Last Activity:</span>
                        <span style={{ fontWeight: '600', marginLeft: '8px' }}>{lead.lastActivity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Lead Details */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      fontSize: '14px',
                      marginBottom: '15px'
                    }}>
                      <div>
                        <span style={{ color: '#6b7280' }}>Financing:</span>
                        <span style={{ fontWeight: '600', marginLeft: '8px' }}>{lead.financing}</span>
                      </div>
                      <div>
                        <span style={{ color: '#6b7280' }}>Trade-in:</span>
                        <span style={{ fontWeight: '600', marginLeft: '8px' }}>{lead.tradeIn}</span>
                      </div>
                      <div>
                        <span style={{ color: '#6b7280' }}>Phone:</span>
                        <span style={{ fontWeight: '600', marginLeft: '8px' }}>{lead.phone}</span>
                      </div>
                      <div>
                        <span style={{ color: '#6b7280' }}>Email:</span>
                        <span style={{ fontWeight: '600', marginLeft: '8px', fontSize: '12px' }}>{lead.email}</span>
                      </div>
                    </div>

                    {/* AI Insight */}
                    <div style={{
                      backgroundColor: '#eff6ff',
                      border: '1px solid #dbeafe',
                      padding: '15px',
                      borderRadius: '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ fontSize: '16px' }}>🤖</span>
                        <div>
                          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#1e40af', margin: '0 0 5px 0' }}>AI Insight</p>
                          <p style={{ fontSize: '13px', color: '#1e3a8a', margin: 0, lineHeight: '1.4' }}>{lead.notes}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      padding: '12px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      📞 Call Now
                    </button>
                    <button style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      padding: '12px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      📧 Email
                    </button>
                    <button style={{
                      backgroundColor: '#f3f4f6',
                      color: '#6b7280',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      padding: '12px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      👁️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {selectedTab === 'inventory' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '25px',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 20px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                🚗 Hot Inventory - Vehicles with Active Interest
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px'
              }}>
                {inventory.map((vehicle, index) => (
                  <div key={index} style={{
                    border: '2px solid #e5e7eb',
                    borderRadius: '15px',
                    padding: '25px',
                    backgroundColor: 'white',
                    cursor: 'pointer'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div>
                        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 5px 0' }}>
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </h4>
                        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669', margin: 0 }}>
                          {formatCurrency(vehicle.price)}
                        </p>
                        <p style={{ fontSize: '14px', color: '#6b7280', margin: '5px 0 0 0' }}>
                          {vehicle.color} • {vehicle.features}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 2px 0' }}>In Stock</p>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{vehicle.stock} units</p>
                      </div>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#fef3c7',
                      border: '1px solid #fbbf24',
                      padding: '15px',
                      borderRadius: '10px',
                      marginBottom: '20px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ color: '#92400e', fontWeight: '600', fontSize: '14px' }}>Hot Leads Interested:</span>
                        <span style={{
                          backgroundColor: '#f59e0b',
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          padding: '4px 12px',
                          borderRadius: '20px'
                        }}>
                          {vehicle.hotLeads} leads
                        </span>
                      </div>
                    </div>
                    
                    <button style={{
                      width: '100%',
                      backgroundColor: '#2563eb',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      padding: '12px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      View Interested Leads
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {selectedTab === 'appointments' && (
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0 0 20px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📅 Today's Complete Schedule
              <span style={{ fontSize: '14px', fontWeight: 'normal', color: '#6b7280' }}>
                {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {appointments.map((appointment, index) => (
                <div key={index} style={{
                  padding: '25px',
                  borderRadius: '15px',
                  backgroundColor: appointment.status === 'hot' ? '#fee2e2' : 
                                 appointment.status === 'delivery' ? '#dcfce7' : '#f3f4f6',
                  border: `2px solid ${getStatusColor(appointment.status)}20`,
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{
                        padding: '15px',
                        borderRadius: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }}>
                        <span style={{ fontSize: '20px' }}>🕐</span>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>{appointment.time}</span>
                          <span style={{
                            padding: '6px 12px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            backgroundColor: getStatusColor(appointment.status),
                            color: 'white'
                          }}>
                            {appointment.type}
                          </span>
                          {appointment.status === 'hot' && (
                            <span style={{ color: '#dc2626', fontSize: '16px', fontWeight: 'bold' }}>🔥 HOT DEAL</span>
                          )}
                        </div>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 8px 0' }}>{appointment.customer}</p>
                        <p style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 8px 0' }}>{appointment.vehicle} • {formatCurrency(appointment.value)}</p>
                        <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>{appointment.notes}</p>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <button style={{
                        backgroundColor: '#059669',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        📞 Call Customer
                      </button>
                      <button style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        📧 Send Email
                      </button>
                      <button style={{
                        backgroundColor: '#7c3aed',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        📝 Prep Notes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {selectedTab === 'analytics' && (
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
              📊 Advanced Analytics Coming Soon
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '30px' }}>
              Deep insights into sales performance, customer behavior, and market trends
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              {['Sales Forecasting', 'Customer Journey', 'Market Analysis', 'ROI Tracking'].map((feature, index) => (
                <div key={index} style={{
                  padding: '20px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '15px',
                  border: '2px dashed #d1d5db'
                }}>
                  <span style={{ fontSize: '24px', marginBottom: '10px', display: 'block' }}>📈</span>
                  <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151', margin: 0 }}>{feature}</p>
                </div>
              ))}
            </div>
            <button style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '15px 30px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer'
            }}>
              Request Early Access
            </button>
          </div>
        )}

        {/* Call-to-Action */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '50px',
          borderRadius: '25px',
          textAlign: 'center',
          color: 'white',
          marginTop: '60px',
          boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{ marginBottom: '30px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '32px' }}>📈</span>
            </div>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 15px 0' }}>
              Ready to Increase Sales by 15-30%?
            </h3>
            <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Join 200+ dealerships using AI to identify hot leads, optimize follow-ups, and close more deals faster than ever before
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: 'white',
              color: '#667eea',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '15px 30px',
              borderRadius: '15px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(255,255,255,0.3)'
            }}>
              📞 Schedule Free Demo
            </button>
            <button style={{
              border: '2px solid white',
              backgroundColor: 'transparent',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '15px 30px',
              borderRadius: '15px',
              cursor: 'pointer'
            }}>
              🚀 Try Live Demo
            </button>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            opacity: 0.9
          }}>
            {['Setup in 24 hours', '30-day guarantee', 'No long-term contract'].map((benefit, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✅</span>
                <span style={{ fontSize: '14px' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
