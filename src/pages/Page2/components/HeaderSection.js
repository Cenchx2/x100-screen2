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
  Power 
} from 'react-bootstrap-icons';

const HeaderSection = () => {
  // Box data with icons
  const boxes = [
    { id: 1, title: 'New', icon: <FileEarmarkPlus size={16} /> },
    { id: 2, title: 'Delete', icon: <X size={16} /> },
    { id: 3, title: 'Authorise', icon: <Type size={16} className="fw-bold" /> },
    { id: 4, title: 'View', icon: <Eye size={16} /> },
    { id: 5, title: 'Ok', icon: <Check size={16} /> },
    { id: 6, title: 'Cancel', icon: <FileX size={16} /> },
    { id: 7, title: 'Reject', icon: <Ban size={16} /> },
    { id: 8, title: 'Help', icon: <Question size={16} className="rounded-circle border p-1" /> },
    { id: 9, title: 'Exit', icon: <Power size={16} color="red" /> }
  ];

  const [activeButton, setActiveButton] = useState(null);

  const handleBoxClick = (id) => {
    setActiveButton(id);
    // Reset the active state after 200ms
    setTimeout(() => setActiveButton(null), 200);
  };

  return (
    <div className="border-bottom bg-white">
      {/* Application Title Bar */}
      <div className="d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: '#0056b3' }}>
        <div className="d-flex align-items-center">
          <div className="bg-white rounded p-1 me-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <img 
              src="/usg-logo.ico" 
              alt="USG Logo" 
              style={{ 
                width: '32px', 
                height: '32px',
                objectFit: 'contain'
              }} 
            />
          </div>
          <h5 className="text-white mb-0">x100 screen2 - Account Management</h5>
        </div>
        <div className="d-flex">
          <Button variant="outline-light" size="sm" className="me-2">Settings</Button>
          <Button variant="outline-light" size="sm">Help</Button>
        </div>
      </div>
      
      {/* Context Bar */}
      <div className="d-flex justify-content-between align-items-center p-2" style={{ backgroundColor: '#e6f2ff' }}>
        <div className="d-flex align-items-center">
          <span className="fw-bold me-3">CAQP - Account Opening [PERSONAL]</span>
          <span className="badge bg-info">Active Session</span>
        </div>
        <div className="d-flex">
          <span className="me-3">User: Admin</span>
          <span>Branch: Main</span>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="d-flex justify-content-between p-2 bg-white border-bottom">
        <div className="d-flex gap-1">
          {boxes.map((box) => (
            <Button 
              key={box.id}
              variant="light"
              className={`border rounded p-1 text-center d-flex flex-column align-items-center justify-content-center ${activeButton === box.id ? 'bg-primary text-white' : ''}`}
              style={{
                width: '70px', 
                height: '50px',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.1s ease'
              }}
              onClick={() => handleBoxClick(box.id)}
            >
              <div className="mb-1">{React.cloneElement(box.icon, { 
                color: activeButton === box.id ? 'white' : undefined 
              })}</div>
              <div>{box.title}</div>
            </Button>
          ))}
        </div>
        
        <div className="d-flex align-items-center">
          <span className="fw-bold me-2">Quick Search</span>
          <Form.Control type="text" size="sm" placeholder="Search..." style={{ width: '200px' }} />
        </div>
      </div>
      
      {/* Customer Information Panel */}
      <div className="p-3 bg-white">
        <div className="d-flex flex-wrap gap-4">
          {/* Customer Category */}
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2" style={{ minWidth: '140px' }}>Customer Category</span>
            <Form.Select 
              aria-label="Customer category dropdown" 
              size="sm"
              style={{ width: '200px' }}
            >
              <option>Select category</option>
              <option value="1">Individual</option>
              <option value="2">Corporate</option>
              <option value="3">Business</option>
            </Form.Select>
          </div>
          
          {/* Account/Full Name */}
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2" style={{ minWidth: '140px' }}>Account / Full Name</span>
            <Form.Control 
              type="text" 
              size="sm"
              style={{ width: '300px' }}
            />
          </div>
          
          {/* Short Name */}
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2">Short Name</span>
            <Form.Control 
              type="text" 
              size="sm"
              style={{ width: '150px' }}
            />
          </div>
          
          {/* Risk Section */}
          <div className="d-flex align-items-center ms-auto">
            <Button variant="outline-secondary" className="px-3 py-1 fw-bold me-2">Print Risk</Button>
            <span className="fw-bold me-2">Risk ID</span>
            <Form.Control 
              type="text" 
              size="sm"
              style={{ width: '80px' }}
              className="me-3"
            />
            <Button variant="outline-secondary" className="px-3 py-1 fw-bold">Create / View</Button>
          </div>
        </div>
        
        <div className="d-flex flex-wrap gap-4 mt-3">
          {/* Customer ID */}
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2" style={{ minWidth: '90px' }}>Customer ID</span>
            <Form.Control 
              type="text" 
              style={{ width: '180px' }} 
              size="sm"
            />
          </div>
          
          {/* Account No */}
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2" style={{ minWidth: '90px' }}>Account No</span>
            <Form.Control 
              type="text" 
              style={{ width: '180px' }} 
              size="sm"
            />
          </div>
          
          {/* Status Indicator */}
          <div className="d-flex align-items-center ms-auto">
            <span className="fw-bold me-2">Status:</span>
            <span className="badge bg-success">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;