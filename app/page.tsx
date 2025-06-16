'use client'

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLead, setSelectedLead] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const leads = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      company: 'TechCorp Inc', 
      email: 'sarah@techcorp.com', 
      phone: '(555) 123-4567', 
      score: 85, 
      status: 'hot', 
      value: '$50,000', 
      lastContact: '2 days ago', 
      aiInsight: 'High purchase intent - mentioned budget approval',
      notes: 'CTO looking for cloud migration solution. Budget: $50k. Timeline: Q2 2025.',
      nextAction: 'Send technical proposal by Friday'
    },
    { 
      id: 2, 
      name: 'Mike Chen', 
      company: 'StartupX', 
      email: 'mike@startupx.com', 
      phone: '(555) 234-5678', 
      score: 72, 
      status: 'warm', 
      value: '$25,000', 
      lastContact: '1 week ago', 
      aiInsight: 'Interested in demo - follow up with technical specs',
      notes: 'Early-stage startup needing DevOps consultation. Price sensitive.',
      nextAction: 'Schedule demo call this week'
    },
    { 
      id: 3, 
      name: 'Emily Rodriguez', 
      company: 'Enterprise Solutions', 
      email: 'emily@enterprise.com', 
      phone: '(555) 345-6789', 
      score: 91, 
      status: 'hot', 
      value: '$100,000', 
      lastContact: '1 day ago', 
      aiInsight: 'Decision maker - ready to purchase this quarter',
      notes: 'VP Engineering. Needs full digital transformation. Large budget.',
      nextAction: 'Send contract proposal TODAY'
    },
    { 
      id: 4, 
      name: 'David Kim', 
      company: 'Growth Co', 
      email: 'david@growthco.com', 
      phone: '(555) 456-7890', 
      score: 58, 
      status: 'cold', 
      value: '$15,000', 
      lastContact: '2 weeks ago', 
      aiInsight: 'Price sensitive - consider offering discount',
      notes: 'Small business owner. Interested but budget constrained.',
      nextAction: 'Send discount offer to re-engage'
    }
  ];

  const metrics = [
    { title: 'Pipeline Value', value: '$190,000', change: '+12%', icon: '💰', color: 'text-green-600' },
    { title: 'Active Leads', value: '47', change: '+8%', icon: '👥', color: 'text-blue-600' },
    { title: 'Conversion Rate', value: '23%', change: '+5%', icon: '🎯', color: 'text-purple-600' },
    { title: 'AI Score Avg', value: '76', change: '+3%', icon: '🤖', color: 'text-orange-600' }
  ];

  const aiSuggestions = [
    { 
      priority: 'high', 
      action: 'Send contract to Emily Rodriguez', 
      reason: 'She\'s ready to sign - 91% lead score', 
      impact: '$100,000 potential revenue'
    },
    { 
      priority: 'medium', 
      action: 'Follow up with Sarah Johnson', 
      reason: 'Budget approved, timeline urgent', 
      impact: '$50,000 potential revenue'
    },
    { 
      priority: 'medium', 
      action: 'Schedule demo with Mike Chen', 
      reason: 'Engagement score increasing', 
      impact: '$25,000 potential revenue'
    },
    { 
      priority: 'low', 
      action: 'Send discount offer to David Kim', 
      reason: 'Price objection detected', 
      impact: '$15,000 potential revenue'
    }
  ];

  const activities = [
    { type: 'email', contact: 'Emily Rodriguez', action: 'Sent proposal', time: '2 hours ago', status: 'opened' },
    { type: 'call', contact: 'Sarah Johnson', action: 'Discovery call completed', time: '1 day ago', status: 'completed' },
    { type: 'meeting', contact: 'Mike Chen', action: 'Demo scheduled', time: '2 days ago', status: 'upcoming' },
    { type: 'email', contact: 'David Kim', action: 'Follow-up sent', time: '1 week ago', status: 'no response' }
  ];

  const simulateAIResponse = (message) => {
    const responses = [
      "📊 **AI Analysis Complete**: Based on conversation history, this lead has a 78% likelihood of conversion. Key trigger words detected: 'budget approved', 'timeline', 'decision maker'.",
      "🎯 **Recommendation**: Schedule a demo call within 48 hours. Lead engagement pattern suggests they're in the decision phase. Optimal contact time: Tuesday 2-4 PM.",
      "💡 **Market Intelligence**: Their company just raised Series B funding ($15M). Perfect timing to reach out with premium solutions. Competitors are also targeting them.",
      "📈 **Sentiment Analysis**: Positive (0.82 confidence). Lead expressed enthusiasm about ROI projections. Mentioned 'exactly what we need' - strong buying signal detected.",
      "⚡ **Urgent Action Required**: Lead score increased by 15 points in last 24 hours. They viewed pricing page 3 times. Strike while the iron is hot!"
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
        content: simulateAIResponse(newMessage), 
        timestamp: new Date() 
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'hot': return 'bg-red-100 text-red-800';
      case 'warm': return 'bg-yellow-100 text-yellow-800';
      case 'cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div style={{
  minHeight: '100vh', 
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>
      
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '8px',
              borderRadius: '8px'
            }}>
              <span style={{ fontSize: '24px', color: 'white' }}>🤖</span>
            </div>
            <div>
              <h1 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#111827',
                margin: 0
              }}>AI CRM Pro</h1>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: 0
              }}>Intelligent Customer Relationship Management</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#dcfce7',
              color: '#166534',
              padding: '4px 12px',
              borderRadius: '9999px'
            }}>
              <span style={{ fontSize: '16px' }}>⚡</span>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>AI Active</span>
            </div>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <span style={{ marginRight: '8px' }}>➕</span>
              Add Lead
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        {/* Navigation Tabs */}
        <div style={{ marginBottom: '24px' }}>
          <nav style={{ display: 'flex', gap: '32px' }}>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'leads', label: 'Leads', icon: '👥' },
              { id: 'ai-assistant', label: 'AI Assistant', icon: '🤖' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: activeTab === tab.id ? '#dbeafe' : 'transparent',
                  color: activeTab === tab.id ? '#1d4ed8' : '#6b7280'
                }}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {metrics.map((metric, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', margin: 0 }}>{metric.title}</p>
                      <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: '4px 0' }}>{metric.value}</p>
                      <p style={{ fontSize: '14px', margin: 0, color: '#059669' }}>{metric.change} from last month</p>
                    </div>
                    <div style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: '#f3f4f6'
                    }}>
                      <span style={{ fontSize: '24px' }}>{metric.icon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Suggestions */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#111827',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '20px' }}>💡</span>
                  AI-Powered Suggestions
                </h3>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>Updated 5 minutes ago</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    borderRadius: '8px',
                    borderLeft: '4px solid',
                    borderLeftColor: suggestion.priority === 'high' ? '#ef4444' : 
                                   suggestion.priority === 'medium' ? '#eab308' : '#22c55e',
                    backgroundColor: suggestion.priority === 'high' ? '#fef2f2' : 
                                   suggestion.priority === 'medium' ? '#fffbeb' : '#f0fdf4'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '16px', fontWeight: '500', color: '#111827', margin: '0 0 4px 0' }}>{suggestion.action}</p>
                        <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 4px 0' }}>{suggestion.reason}</p>
                        <p style={{ fontSize: '14px', fontWeight: '500', color: '#059669', margin: 0 }}>{suggestion.impact}</p>
                      </div>
                      <span style={{
                        padding: '2px 8px',
                        fontSize: '12px',
                        fontWeight: '500',
                        borderRadius: '9999px',
                        backgroundColor: suggestion.priority === 'high' ? '#fee2e2' : 
                                       suggestion.priority === 'medium' ? '#fef3c7' : '#dcfce7',
                        color: suggestion.priority === 'high' ? '#991b1b' :
                               suggestion.priority === 'medium' ? '#92400e' : '#166534'
                      }}>
                        {suggestion.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              padding: '24px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 16px 0' }}>Recent Activities</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activities.map((activity, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#f9fafb'
                  }}>
                    <div style={{
                      padding: '8px',
                      borderRadius: '8px',
                      backgroundColor: activity.type === 'email' ? '#dbeafe' :
                                     activity.type === 'call' ? '#dcfce7' : '#fef3c7'
                    }}>
                      <span style={{ fontSize: '16px' }}>
                        {activity.type === 'email' ? '📧' :
                         activity.type === 'call' ? '📞' : '📅'}
                      </span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: 0 }}>{activity.action}</p>
                      <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>{activity.contact} • {activity.time}</p>
                    </div>
                    <span style={{
                      padding: '2px 8px',
                      fontSize: '12px',
                      fontWeight: '500',
                      borderRadius: '9999px',
                      backgroundColor: activity.status === 'completed' ? '#dcfce7' :
                                     activity.status === 'opened' ? '#dbeafe' :
                                     activity.status === 'upcoming' ? '#fef3c7' : '#f3f4f6',
                      color: activity.status === 'completed' ? '#166534' :
                             activity.status === 'opened' ? '#1d4ed8' :
                             activity.status === 'upcoming' ? '#92400e' : '#374151'
                    }}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Search and Filter */}
            <div style={{
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '16px',
                    color: '#9ca3af'
                  }}>🔍</span>
                  <input
                    type="text"
                    placeholder="Search leads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      paddingLeft: '40px',
                      paddingRight: '16px',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  <span>🔽</span>
                  Filter
                </button>
              </div>
            </div>

            {/* Leads Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {filteredLeads.map(lead => (
                <div key={lead.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  padding: '24px',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 4px 0' }}>{lead.name}</h3>
                      <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>{lead.company}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        padding: '2px 8px',
                        fontSize: '12px',
                        fontWeight: '500',
                        borderRadius: '9999px',
                        backgroundColor: lead.status === 'hot' ? '#fee2e2' : 
                                       lead.status === 'warm' ? '#fef3c7' : '#dbeafe',
                        color: lead.status === 'hot' ? '#991b1b' :
                               lead.status === 'warm' ? '#92400e' : '#1e40af'
                      }}>
                        {lead.status.toUpperCase()}
                      </span>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#f3f4f6',
                        padding: '2px 8px',
                        borderRadius: '9999px'
                      }}>
                        <span style={{ fontSize: '12px', marginRight: '4px' }}>⭐</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>{lead.score}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6b7280' }}>
                      <span style={{ marginRight: '8px' }}>📧</span>
                      {lead.email}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6b7280' }}>
                      <span style={{ marginRight: '8px' }}>📞</span>
                      {lead.phone}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span style={{ color: '#6b7280' }}>Value: <span style={{ fontWeight: '500', color: '#059669' }}>{lead.value}</span></span>
                      <span style={{ color: '#6b7280' }}>Last contact: {lead.lastContact}</span>
                    </div>
                  </div>

                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    backgroundColor: '#eff6ff',
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '16px', marginRight: '8px' }}>🤖</span>
                      <p style={{ fontSize: '14px', color: '#1e40af', margin: 0 }}>{lead.aiInsight}</p>
                    </div>
                  </div>

                  <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={() => setSelectedLead(lead)}
                      style={{
                        flex: 1,
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      View Details
                    </button>
                    <button style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      📧
                    </button>
                    <button style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      📞
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Assistant Tab */}
        {activeTab === 'ai-assistant' && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            height: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '20px' }}>🤖</span>
                AI Sales Assistant
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: '4px 0 0 0' }}>Ask me anything about your leads, sales strategy, or market insights</p>
            </div>
            
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
              {chatMessages.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '32px' }}>
                  <span style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>🤖</span>
                  <p style={{ fontSize: '16px', fontWeight: '500', margin: '0 0 8px 0' }}>Your AI assistant is ready to help!</p>
                  <p style={{ fontSize: '14px', margin: '0 0 16px 0' }}>Try asking: "What should I focus on today?" or "Analyze my hot leads"</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {chatMessages.map((message, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
                    }}>
                      <div style={{
                        maxWidth: '75%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        backgroundColor: message.sender === 'user' ? '#3b82f6' : '#f3f4f6',
                        color: message.sender === 'user' ? 'white' : '#111827'
                      }}>
                        <p style={{ fontSize: '14px', margin: 0, whiteSpace: 'pre-wrap' }}>{message.content}</p>
                      </div>
                    </div>
                  ))}
