import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AccountRelationInfo = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  // Personal Information Fields
  const personalFields = [
    { label: 'Title', type: 'select', options: ['Mr.', 'Mrs.', 'Ms.'] },
    { label: 'Salutation', type: 'text', placeholder: 'Salutation' },
    { label: 'First Name', type: 'text', placeholder: 'First Name' },
    { label: 'Middle Name', type: 'text', placeholder: 'Middle Name' },
    { label: 'Surname', type: 'text', placeholder: 'Surname' },
    { label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
    { label: 'Date of Birth', type: 'date' },
    { label: 'Primary Mobile No', type: 'phone', prefix: '+231', example: '799344639' },
    { label: 'Email', type: 'email', placeholder: 'Email' },
    { label: 'TIN', type: 'text', placeholder: 'Tax Identification Number' }
  ];
  
  // Identification Fields
  const identificationFields = [
    { label: 'NationalID No. (NIN)', type: 'text', placeholder: 'NIN' },
    { label: 'Other ID Type', type: 'select', options: ['Passport', 'Driver\'s License', 'Voter ID'] },
    { label: 'ID No.', type: 'text', placeholder: 'ID Number' },
    { label: 'Issuing Date', type: 'date' },
    { label: 'Issuing Place', type: 'text', placeholder: 'Issuing Place' },
    { label: 'ID Expiry Date', type: 'date' },
    { label: 'Issuing Auth', type: 'text', placeholder: 'Issuing Authority' }
  ];
  
  // Address Fields
  const addressFields = [
    { label: 'Flat/Villa/Hse No', type: 'text', placeholder: 'House Number' },
    { label: 'Street Name', type: 'text', placeholder: 'Street Name' },
    { label: 'Location/GPRS', type: 'text', placeholder: 'Location' },
    { label: 'City', type: 'text', placeholder: 'City' },
    { label: 'Country Code', type: 'text', value: 'LBR', readOnly: true },
    { label: 'Country', type: 'text', value: 'LIBERIA', readOnly: true }
  ];

  const renderField = (field) => {
    switch (field.type) {
      case 'select':
        return (
          <select className="form-select form-select-sm">
            <option>Select {field.label}</option>
            {field.options.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>
        );
      
      case 'phone':
        return (
          <div className="d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text">{field.prefix}</span>
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder={field.label} 
              />
            </div>
            <span className="ms-2 small text-muted">eg. {field.example}</span>
          </div>
        );
      
      case 'date':
        return <input type="date" className="form-control form-control-sm" />;
      
      default:
        return (
          <input 
            type={field.type} 
            className="form-control form-control-sm" 
            placeholder={field.placeholder || field.label}
            readOnly={field.readOnly}
            value={field.value || ''}
          />
        );
    }
  };

  return (
    <div className="p-3" style={{ marginLeft: '20px' }}>
      {/* Tab Navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Information
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'identification' ? 'active' : ''}`}
            onClick={() => setActiveTab('identification')}
          >
            Identification
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'address' ? 'active' : ''}`}
            onClick={() => setActiveTab('address')}
          >
            Address
          </button>
        </li>
      </ul>
      
      {/* Form Fields */}
      <div className="row g-3 mb-4">
        {(activeTab === 'personal' ? personalFields : 
          activeTab === 'identification' ? identificationFields : addressFields)
          .map((field, index) => (
            <div key={index} className="col-md-6">
              <label className="fw-bold small">{field.label}</label>
              {renderField(field)}
            </div>
          ))
        }
      </div>
      
      {/* Action Buttons */}
      <div className="d-flex justify-content-between border-top pt-3">
        <Button variant="outline-secondary" className="w-25">
          Check For Blacklisted
        </Button>
        
        <div className="d-flex align-items-center">
          <span className="fw-bold small me-2">BlackList Override Code</span>
          <input 
            type="text" 
            className="form-control form-control-sm"
            style={{ width: '200px' }}
          />
        </div>
        
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" className="w-100">Reset</Button>
          <Button variant="primary" className="w-100">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountRelationInfo;