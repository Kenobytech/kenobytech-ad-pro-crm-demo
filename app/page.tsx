'use client'

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '20px'
        }}>
          🚗 AutoDealer Pro
        </h1>
        <p style={{
          fontSize: '24px',
          color: '#6b7280',
          marginBottom: '40px'
        }}>
          AI-Powered Car Sales Management
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>Monthly Sales</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#059669' }}>$485,000</p>
            <p style={{ color: '#059669' }}>+18% ↗️</p>
          </div>
          
          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>Active Leads</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#2563eb' }}>127</p>
            <p style={{ color: '#2563eb' }}>+23% ↗️</p>
          </div>
          
          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>Conversion Rate</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#7c3aed' }}>28%</p>
            <p style={{ color: '#7c3aed' }}>+7% ↗️</p>
          </div>
        </div>

        <div style={{
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            🚨 URGENT: Call Mike Rodriguez NOW!
          </h3>
          <p style={{ fontSize: '18px' }}>
            Appointment in 25 minutes • $45K deal ready to close
          </p>
        </div>
        
        <button style={{
          backgroundColor: '#2563eb',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          padding: '15px 40px',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)'
        }}>
          🚀 Schedule Free Demo
        </button>
      </div>
    </div>
  );
}
