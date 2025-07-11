import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { 
  Person, 
  Bank2,
  People,
  JournalText,
  FileEarmarkText,
  ShieldShaded,
  PersonCheck,
  CashCoin
} from 'react-bootstrap-icons';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('individual');
  
  const navItems = [
    { id: 'individual', title: 'Individual', icon: <Person size={20} /> },
    { id: 'corporate', title: 'Corporate/Bank', icon: <Bank2 size={20} /> },
    { id: 'relations', title: 'Corporate Relations', icon: <People size={20} /> },
    { id: 'details', title: 'Account Details', icon: <JournalText size={20} /> },
    { id: 'mandate', title: 'Account Mandate/Document', icon: <FileEarmarkText size={20} /> },
    { id: 'risk', title: 'Ebanking/Customer Risk An...', icon: <ShieldShaded size={20} /> },
    { id: 'referees', title: 'Account Referees', icon: <PersonCheck size={20} /> },
    { id: 'aml', title: 'Anti Money Laundering', icon: <CashCoin size={20} /> }
  ];

  return (
    <div>
      <h5 className="border-bottom pb-2 mb-3">Quick Navigation</h5>
      
      <div className="d-flex flex-column">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'primary' : 'light'}
            className={`d-flex align-items-center justify-content-start text-start mb-2 ${activeTab === item.id ? 'shadow-sm' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="me-2">{item.icon}</span>
            <span>{item.title}</span>
          </Button>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-top">
        <h6 className="mb-3">Recent Activities</h6>
        <div className="small">
          <div className="d-flex mb-2">
            <div className="bg-primary rounded-circle me-2" style={{ width: '8px', height: '8px', marginTop: '6px' }}></div>
            <div>Account created on 2023-07-15</div>
          </div>
          <div className="d-flex mb-2">
            <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px', marginTop: '6px' }}></div>
            <div>Profile updated today at 14:20</div>
          </div>
          <div className="d-flex">
            <div className="bg-warning rounded-circle me-2" style={{ width: '8px', height: '8px', marginTop: '6px' }}></div>
            <div>Security verification pending</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;