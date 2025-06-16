'use client'

import React, { useState, useEffect } from 'react';
import { 
  Search, Plus, Mail, Phone, Calendar, Users, DollarSign, Target, Bot, Zap, 
  MessageSquare, BarChart3, Filter, ChevronDown, Star, Send, Lightbulb, 
  Car, CreditCard, Clock, MapPin, Settings 
} from 'lucide-react';

// Type definitions
type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  score: number;
  status: 'hot' | 'warm' | 'cold';
  budget: string;
  lastContact: string;
  interestedVehicle: string;
  tradeIn: string;
  financing: string;
  aiInsight: string;
  source: string;
  appointmentSet: boolean;
  appointmentDate: string | null;
  notes: string;
  buyingStage: string;
  followUpPriority: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
};

type Metric = {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

type AISuggestion = {
  priority: 'urgent' | 'high' | 'medium' | 'low';
  action: string;
  reason: string;
  impact: string;
  leadId: number;
};

type Appointment = {
  time: string;
  customer: string;
  vehicle: string;
  type: string;
  status: 'confirmed' | 'hot-lead';
};

type InventoryItem = {
  make: string;
  model: string;
  year: number;
  price: string;
  stock: number;
  hotLeads: number;
};

type ChatMessage = {
  sender: 'user' | 'ai';
  content: string;
  timestamp: string;
};

const CarSalesCRM = () => {
  // State with proper typing
  const [activeTab, setActiveTab] = useState<'dashboard' | 'leads' | 'appointments' | 'inventory' | 'ai-coach'>('dashboard');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data with proper typing
  const leads: Lead[] = [
    { 
      id: 1, 
      name: 'Mike Rodriguez',
      // ... rest of lead properties ...
    },
    // ... other leads ...
  ];

  const metrics: Metric[] = [
    { title: 'Monthly Sales', value: '$485,000', change: '+18%', icon: DollarSign, color: 'text-green-600' },
    // ... other metrics ...
  ];

  const aiSuggestions: AISuggestion[] = [
    { 
      priority: 'urgent', 
      action: 'Call Mike Rodriguez NOW', 
      reason: 'Appointment in 2 hours', 
      impact: '$45,000 deal closing today',
      leadId: 1
    },
    // ... other suggestions ...
  ];

  const todayAppointments: Appointment[] = [
    { time: '9:00 AM', customer: 'Lisa Martinez', vehicle: '2024 Toyota RAV4', type: 'Test Drive', status: 'confirmed' },
    // ... other appointments ...
  ];

  const inventory: InventoryItem[] = [
    { make: 'Honda', model: 'Accord', year: 2024, price: '$28,500', stock: 12, hotLeads: 3 },
    // ... other inventory items ...
  ];

  const simulateCarSalesAI = (message: string): string => {
    const responses = [
      "🚗 **Market Analysis**: Based on recent inventory movement...",
      // ... other responses ...
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage: ChatMessage = { 
      sender: 'user', 
      content: newMessage, 
      timestamp: new Date().toISOString() 
    };
    setChatMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponse: ChatMessage = { 
        sender: 'ai', 
        content: simulateCarSalesAI(newMessage), 
        timestamp: new Date().toISOString() 
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.interestedVehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ... rest of your helper functions (getStatusColor, getPriorityColor, etc.)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header and other JSX remains the same */}
      {/* Just ensure all props passed to components are type-safe */}
      
      {/* Example of typed props in JSX */}
      {selectedLead && (
        <LeadDetailModal 
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  );
};

// Additional typed component example
const LeadDetailModal = ({ 
  lead, 
  onClose 
}: { 
  lead: Lead; 
  onClose: () => void 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      {/* Modal content using the typed lead prop */}
      <h2>{lead.name}</h2>
      <p>{lead.interestedVehicle}</p>
      {/* ... */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CarSalesCRM;
