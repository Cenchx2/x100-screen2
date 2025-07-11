import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AccountRelationInfo = () => {
  const [activeSection, setActiveSection] = useState('personal');
  
  // Personal information fields
  const personalFields = [
    { label: 'Title', type: 'select', options: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'] },
    { label: 'Salutation', type: 'text' },
    { label: 'First Name', type: 'text' },
    { label: 'Middle Name', type: 'text' },
    { label: 'Surname', type: 'text' },
    { label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
    { label: 'Date of Birth', type: 'date' }
  ];

  const personalFieldsRight = [
    { label: 'Primary Mobile No', type: 'tel', prefix: '+231' },
    { label: 'Email', type: 'email' },
    { label: 'TIN', type: 'text' }
  ];
  
  // Identification fields
  const identificationFields = [
    { label: 'NationalID No. (NIN)', type: 'text' },
    { label: 'Other ID Type', type: 'select', options: ['Passport', 'Driver\'s License', 'Voter ID'] },
    { label: 'ID No.', type: 'text' },
    { label: 'Issuing Date', type: 'date' },
    { label: 'Issuing Place', type: 'text' },
    { label: 'ID Expiry Date', type: 'date' },
    { label: 'Issuing Auth', type: 'text' }
  ];
  
  // Address fields
  const addressFields = [
    { label: 'Flat/Villa/Hse No', type: 'text' },
    { label: 'Street Name', type: 'text' },
    { label: 'Location/GPRS', type: 'text' },
    { label: 'City', type: 'text' },
    { label: 'Country Code', type: 'text', value: 'LBR', readOnly: true },
    { label: 'Country', type: 'text', value: 'Liberia', readOnly: true }
  ];

  const renderField = (field) => {
    return (
      <div className="mb-3">
        <label className="form-label small fw-bold">{field.label}</label>
        {field.type === 'select' ? (
          <select className="form-select form-select-sm shadow-sm">
            <option value="">Select {field.label}</option>
            {field.options.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        ) : field.type === 'tel' ? (
          <div className="input-group">
            <span className="input-group-text bg-white">{field.prefix}</span>
            <input 
              type="tel" 
              className="form-control form-control-sm shadow-sm" 
              placeholder={field.label} 
            />
          </div>
        ) : (
          <input 
            type={field.type} 
            className="form-control form-control-sm shadow-sm" 
            placeholder={field.label}
            readOnly={field.readOnly}
            value={field.value || ''}
          />
        )}
      </div>
    );
  };

  const getRightColumnFields = () => {
    if (activeSection === 'personal') {
      return (
        <>
          <div className="bg-light p-3 rounded border mb-3">
            <p className="small mb-1">Enter mobile number without country code</p>
            <p className="small mb-0">Example: <span className="fw-bold">799344639</span></p>
          </div>
          {personalFieldsRight.map((field, i) => renderField(field))}
        </>
      );
    } else if (activeSection === 'identification') {
      return identificationFields.slice(4).map((field, i) => renderField(field));
    } else if (activeSection === 'address') {
      return addressFields.slice(3).map((field, i) => renderField(field));
    }
    return null;
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">Account Information</h5>
        <div className="d-flex">
          <Button 
            variant={activeSection === 'personal' ? 'primary' : 'outline-primary'} 
            size="sm"
            className="me-2"
            onClick={() => setActiveSection('personal')}
          >
            Personal
          </Button>
          <Button 
            variant={activeSection === 'identification' ? 'primary' : 'outline-primary'} 
            size="sm"
            className="me-2"
            onClick={() => setActiveSection('identification')}
          >
            Identification
          </Button>
          <Button 
            variant={activeSection === 'address' ? 'primary' : 'outline-primary'} 
            size="sm"
            onClick={() => setActiveSection('address')}
          >
            Address
          </Button>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          {(activeSection === 'personal' ? personalFields : 
            activeSection === 'identification' ? identificationFields.slice(0, 4) : 
            addressFields.slice(0, 3)).map((field, i) => renderField(field))
          }
        </div>
        <div className="col-md-6">
          {getRightColumnFields()}
        </div>
      </div>
      
      <div className="border-top pt-3 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="outline-secondary" className="shadow-sm">
            Check For Blacklisted
          </Button>
          
          <div className="d-flex align-items-center">
            <span className="fw-bold small me-2">BlackList Override Code</span>
            <input 
              type="text" 
              className="form-control form-control-sm shadow-sm"
              style={{ width: '180px' }}
            />
          </div>
          
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" className="shadow-sm">Reset</Button>
            <Button variant="primary" className="shadow-sm">
              {activeSection === 'address' ? 'Save' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRelationInfo;