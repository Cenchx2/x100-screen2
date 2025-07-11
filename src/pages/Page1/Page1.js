import React from 'react';
import HeaderSection from './components/HeaderSection';
import NavBar from './components/NavBar';
import AccountRelationInfo from './components/AccountRelationInfo';
import AccountRelationDetails from './components/AccountRelationDetails';

const Page1 = () => {
  return (
   <div className="container-fluid p-0" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <HeaderSection />
      <NavBar />
      
      {/* Main Content */}
      <div className="bg-white">
        <AccountRelationInfo />
        <AccountRelationDetails />
      </div>
    </div>
  );
};

export default Page1;