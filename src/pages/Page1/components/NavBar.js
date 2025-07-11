import React from 'react';

const NavBar = () => {
  const menuItems = [
    "Individual",
    "Corporate/Bank",
    "Corporate Relations",
    "Account Details",
    "Account Mandate/Document",
    "Enanking/Customer Risk An...",
    "Account Referees",
    "Anti Money Laundering"
  ];

  return (
    <div className="bg-light p-2 border-bottom" style={{ width: '100%' }}>
      <div className="d-flex justify-content-between">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`btn btn-sm flex-grow-1 mx-1 ${index === 0 ? 'btn-secondary' : 'btn-outline-secondary'}`}
            style={{
              whiteSpace: 'nowrap',
              fontWeight: index === 0 ? '600' : '400',
              boxShadow: index === 0 ? '0 2px 4px rgba(0,0,0,0.15)' : 'none',
              transform: index === 0 ? 'translateY(-1px)' : 'none',
              maxWidth: 'calc(100%/8 - 8px)' // Equal width for 8 items with spacing
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;