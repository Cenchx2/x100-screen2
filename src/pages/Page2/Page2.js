import React from 'react';
import HeaderSection from './components/HeaderSection';
import NavBar from './components/NavBar';
import AccountRelationInfo from './components/AccountRelationInfo';
import AccountRelationDetails from './components/AccountRelationDetails';

const Page2 = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <HeaderSection />
      
      <div className="d-flex flex-grow-1">
        {/* Left Navigation Panel - fixed width */}
        <div className="bg-light" style={{ 
          width: '100px',  // Fixed width
          minWidth: '100px', // Prevents collapsing
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          zIndex: 1,
          flexShrink: 0 // Prevents shrinking
        }}>
          <NavBar />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-grow-1 d-flex flex-column p-3" style={{ 
          overflow: 'auto',
          marginLeft: '10px'
        }}>
          <div className="card mb-4 shadow-sm">
            <AccountRelationInfo />
          </div>
          
          <div className="card shadow-sm flex-grow-1">
            <AccountRelationDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;