import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { 
  FileEarmarkPlus,
  X, 
  Type, 
  Eye, 
  Check, 
  FileX, 
  Ban, 
  Question, 
  Power,
  Search
} from 'react-bootstrap-icons';

const HeaderSection = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleBoxClick = (id) => {
    setActiveButton(id);
    setTimeout(() => setActiveButton(null), 200);
  };

  // Action buttons with icons
  const actionButtons = [
    { id: 1, title: 'New', icon: <FileEarmarkPlus size={16} /> },
    { id: 2, title: 'Delete', icon: <X size={16} /> },
    { id: 3, title: 'Authorise', icon: <Type size={16} /> },
    { id: 4, title: 'View', icon: <Eye size={16} /> },
    { id: 5, title: 'Ok', icon: <Check size={16} /> },
    { id: 6, title: 'Cancel', icon: <FileX size={16} /> },
    { id: 7, title: 'Reject', icon: <Ban size={16} /> },
    { id: 8, title: 'Help', icon: <Question size={16} /> },
    { id: 9, title: 'Exit', icon: <Power size={16} color="#dc3545" /> }
  ];

  return (
    <div className="bg-white border-bottom">
      {/* Top Application Bar */}
      <div className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#1e3a8a' }}>
        <div className="d-flex align-items-center">
          <div className="me-3">
            <img 
              src="/usg-logo.ico" 
              alt="USG Logo" 
              style={{ 
                width: '36px', 
                height: '36px',
                objectFit: 'contain'
              }} 
            />
          </div>
          <h4 className="text-white mb-0 fw-light">x100 <span className="fw-bold">screen2</span></h4>
          <div className="ms-4 text-light">CAQP - Account Opening [PERSONAL]</div>
        </div>
        
        <div className="d-flex align-items-center">
          <div className="input-group input-group-sm me-3" style={{ width: '280px' }}>
            <span className="input-group-text bg-white border-end-0">
              <Search size={14} />
            </span>
            <input 
              type="text" 
              className="form-control border-start-0" 
              placeholder="Search accounts, customers..." 
            />
          </div>
          
          <div className="d-flex align-items-center text-white">
            <div className="bg-light text-dark rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
              <span className="fw-bold">C</span>
            </div>
            <div>
              <div className="small">Cench</div>
              <div className="small">Administrator</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Bar */}
      <div className="d-flex justify-content-between p-2 bg-light border-bottom">
        <div className="d-flex align-items-center">
          <div className="d-flex gap-1">
            {actionButtons.map((button) => (
              <Button 
                key={button.id}
                variant="light"
                className={`rounded-pill px-3 py-1 d-flex align-items-center ${activeButton === button.id ? 'bg-primary text-white' : ''}`}
                onClick={() => handleBoxClick(button.id)}
              >
                <span className="me-1">{button.icon}</span>
                <span>{button.title}</span>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="d-flex align-items-center">
          <span className="badge bg-success me-3">Online</span>
          <span className="text-muted small">Last saved: Today, 14:32</span>
        </div>
      </div>
      
      {/* Customer Information Section */}
      <div className="p-3">
        <div className="row g-3">
          <div className="col-md-3">
            <div className="fw-bold small mb-1">Customer Category</div>
            <Form.Select size="sm" className="shadow-sm">
              <option>Select category</option>
              <option>Individual</option>
              <option>Corporate</option>
              <option>Business</option>
            </Form.Select>
          </div>
          
          <div className="col-md-5">
            <div className="fw-bold small mb-1">Account / Full Name</div>
            <Form.Control 
              type="text" 
              size="sm"
              className="shadow-sm"
              placeholder="Enter full name"
            />
          </div>
          
          <div className="col-md-2">
            <div className="fw-bold small mb-1">Short Name</div>
            <Form.Control 
              type="text" 
              size="sm"
              className="shadow-sm"
              placeholder="Short name"
            />
          </div>
          
          <div className="col-md-2 d-flex align-items-end">
            <Button variant="outline-primary" className="w-100 shadow-sm">Save</Button>
          </div>
        </div>
        
        <div className="row g-3 mt-2">
          <div className="col-md-3">
            <div className="fw-bold small mb-1">Customer ID</div>
            <Form.Control 
              type="text" 
              size="sm"
              className="shadow-sm"
              placeholder="CUST-001"
            />
          </div>
          
          <div className="col-md-3">
            <div className="fw-bold small mb-1">Account No</div>
            <Form.Control 
              type="text" 
              size="sm"
              className="shadow-sm"
              placeholder="ACC-2023-001"
            />
          </div>
          
          <div className="col-md-6 d-flex align-items-center">
            <Button variant="outline-secondary" className="me-2 shadow-sm">Print Risk</Button>
            <div className="d-flex align-items-center me-3">
              <span className="fw-bold small me-2">Risk ID</span>
              <Form.Control 
                type="text" 
                size="sm"
                style={{ width: '80px' }}
                className="shadow-sm"
              />
            </div>
            <Button variant="outline-secondary" className="shadow-sm">Create / View</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;