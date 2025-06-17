import React, { useState } from 'react';
import { Car, Bot, TrendingUp, Users, Star, ArrowRight, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dealership: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your CRM/email
    alert('Demo request submitted! We\'ll contact you within 24 hours.');
    console.log('Lead data:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AutoDealer Pro</h1>
                <p className="text-sm text-gray-500">AI-Powered Car Sales CRM</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Live Demo
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block text-sm font-medium mb-6">
              🚀 Increase Sales by 15-30% in 90 Days
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The First CRM Built 
              <span className="text-blue-600"> Specifically for Car Dealers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stop losing sales to poor follow-up. Our AI automatically scores leads, tracks trade-ins, 
              and tells you exactly who to call first. Car dealers using our system see 15-30% sales increases.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-lg font-medium flex items-center justify-center"
              >
                Try Live Demo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 text-lg font-medium">
                Book Free Consultation
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                5-minute setup
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                30-day money back guarantee
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">See a Personalized Demo</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@dealership.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dealership Name *
                </label>
                <input
                  type="text"
                  name="dealership"
                  required
                  value={formData.dealership}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ABC Auto Sales"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 text-lg font-medium"
              >
                Get My Free Demo
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              We'll contact you within 24 hours to schedule your personalized demo
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Are You Losing Sales Due to Poor Lead Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most car dealerships are using generic CRMs that don't understand the car buying process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hot Leads Get Lost</h3>
              <p className="text-gray-600">
                Ready-to-buy customers slip through the cracks because you can't identify who needs immediate attention
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Calendar className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Poor Follow-Up Timing</h3>
              <p className="text-gray-600">
                You're calling prospects at the wrong time, missing the optimal window when they're ready to buy
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Sales Intelligence</h3>
              <p className="text-gray-600">
                Your CRM doesn't track trade-ins, financing status, or buying urgency - critical info for car sales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Finally, a CRM That Understands Car Sales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AutoDealer Pro is built specifically for automotive sales teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Lead Scoring</h3>
              <p className="text-gray-600">
                Automatically identifies your hottest prospects based on behavior, budget, and buying signals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trade-In Tracking</h3>
              <p className="text-gray-600">
                Track current vehicle, estimated trade value, and financing status for every prospect
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Follow-Up</h3>
              <p className="text-gray-600">
                AI tells you exactly when and how to follow up for maximum conversion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Real Results from Real Dealerships
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">28%</div>
              <div className="text-gray-600">Average increase in conversion rate</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">$847K</div>
              <div className="text-gray-600">Additional revenue in first year</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
              <div className="text-gray-600">Reduction in time to close</div>
            </div>
          </div>

          <blockquote className="text-xl italic text-gray-700 max-w-4xl mx-auto">
            "AutoDealer Pro transformed our sales process. We went from 15% to 28% conversion rate in just 6 weeks. 
            The AI recommendations are spot-on - it knows exactly which customers are ready to buy."
          </blockquote>
          <div className="mt-4 text-gray-600">
            — Mike Johnson, General Manager, Premier Auto Group
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Increase Your Sales by 15-30%?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 200+ dealerships already using AutoDealer Pro to sell more cars
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 text-lg font-medium"
            >
              Try Live Demo Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 text-lg font-medium">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="text-blue-100 mt-6">
            No risk • 30-day money back guarantee • Setup in 24 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-6 w-6" />
                <span className="text-xl font-bold">AutoDealer Pro</span>
              </div>
              <p className="text-gray-400">
                The first CRM built specifically for car dealerships
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Demo</li>
                <li>Integrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Training</li>
                <li>Contact</li>
                <li>Status</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  sales@autodealerpro.com
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2025 AutoDealer Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
