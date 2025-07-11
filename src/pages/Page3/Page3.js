import React from 'react';
import HeaderSection from './components/HeaderSection';
import NavBar from './components/NavBar';
import AccountRelationInfo from './components/AccountRelationInfo';
import AccountRelationDetails from './components/AccountRelationDetails';

const Page3 = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <HeaderSection />
      
      <div className="d-flex flex-grow-1">
        {/* Main Content Area */}
        <div className="flex-grow-1 d-flex flex-column p-4" style={{ overflow: 'auto' }}>
          <div className="row g-4">
            <div className="col-md-8">
              <div className="card border-0 shadow-sm h-100">
                <AccountRelationInfo />
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <NavBar />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="card border-0 shadow-sm">
              <AccountRelationDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;