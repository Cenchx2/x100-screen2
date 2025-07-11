import React from 'react';
import { Button } from 'react-bootstrap';
import { X, ChevronRight } from 'react-bootstrap-icons';

const AccountRelationDetails = () => {
  // Sample saved data
  const savedEntries = [
    {
      relationNo: 'REL001',
      firstName: 'Cench',
      surname: 'Appah',
      middleName: 'Kwesi',
      gender: 'Male',
      dob: '1985-05-15',
      mobile: '0771234567',
      limit: '5000'
    },
    {
      relationNo: 'REL002',
      firstName: 'Theophilus',
      surname: 'Appah',
      middleName: 'Kwesi',
      gender: 'Male',
      dob: '1990-11-22',
      mobile: '0777654321',
      limit: '7500'
    }
  ];

  return (
    <div className="p-3">
      {/* Centered Header */}
      <div className="text-center p-2 mb-3 fw-bold" style={{ backgroundColor: '#e6f2ff' }}>
        ACCOUNT RELATION DETAILS
      </div>

      {/* Field Titles Row */}
      <div className="d-flex mb-2">
        <div className="col px-2 fw-bold small text-truncate">Relation No</div>
        <div className="col px-2 fw-bold small text-truncate">First Name</div>
        <div className="col px-2 fw-bold small text-truncate">Surname</div>
        <div className="col px-2 fw-bold small text-truncate">Middle Name</div>
        <div className="col px-2 fw-bold small text-truncate">Gender</div>
        <div className="col px-2 fw-bold small text-truncate">Date of Birth</div>
        <div className="col px-2 fw-bold small text-truncate">Mobile1</div>
        <div className="col px-2 fw-bold small text-truncate">Mandate Approver Limit</div>
        <div className="flex-shrink-0 px-2" style={{ width: '80px' }}></div> {/* Empty header for buttons */}
      </div>

      {/* Saved Entries with Action Buttons */}
      {savedEntries.map((entry, index) => (
        <div key={index} className="d-flex mb-2 align-items-center">
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.relationNo}
          </div>
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.firstName}
          </div>
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.surname}
          </div>
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.middleName}
          </div>
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.gender}
          </div>
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.dob}
          </div>
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.mobile}
          </div>
          <div className="col px-2 bg-light text-truncate" style={{ 
            userSelect: 'none', 
            pointerEvents: 'none',
            minHeight: '31px',
            lineHeight: '31px'
          }}>
            {entry.limit}
          </div>
          {/* Action Buttons - in their own column */}
          <div className="flex-shrink-0 px-2 d-flex gap-1" style={{ width: '80px' }}>
            <Button 
              variant="outline-danger" 
              size="sm"
              onClick={() => console.log('Delete', entry.relationNo)}
              className="p-1"
            >
              <X size={14} />
            </Button>
            <Button 
              variant="outline-success" 
              size="sm"
              onClick={() => console.log('View', entry.relationNo)}
              className="p-1"
            >
              <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountRelationDetails;