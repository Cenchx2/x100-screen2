import React from 'react';
import { 
  Person,
  Bank2,
  People,
  JournalText,
  FileEarmarkText,
  ShieldShaded,
  PersonCheck,
  CashCoin,
  Gear,
  BoxArrowRight
} from 'react-bootstrap-icons';

const NavBar = () => {
  const navItems = [
    { id: 1, title: 'Individual', icon: <Person size={20} /> },
    { id: 2, title: 'Corporate/Bank', icon: <Bank2 size={20} /> },
    { id: 3, title: 'Corporate Relations', icon: <People size={20} /> },
    { id: 4, title: 'Account Details', icon: <JournalText size={20} /> },
    { id: 5, title: 'Account Mandate/Doc...', icon: <FileEarmarkText size={20} /> },
    { id: 6, title: 'Ebanking/Risk...', icon: <ShieldShaded size={20} /> },
    { id: 7, title: 'Account Referees', icon: <PersonCheck size={20} /> },
    { id: 8, title: 'AML', icon: <CashCoin size={20} /> },
    { id: 9, title: 'Settings', icon: <Gear size={20} /> },
    { id: 10, title: 'Logout', icon: <BoxArrowRight size={20} color="red" /> }
  ];

  return (
    <div className="d-flex flex-column align-items-center py-3">
      {navItems.map((item) => (
        <div 
          key={item.id}
          className="d-flex flex-column align-items-center justify-content-center mb-3"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
          title={item.title}
        >
          {item.icon}
          <small className="mt-1 text-center" style={{ 
            fontSize: '9px',
            fontWeight: 'bold',
            lineHeight: '1.1',
            width: '100%'
          }}>
            {item.title}
          </small>
        </div>
      ))}
    </div>
  );
};

export default NavBar;