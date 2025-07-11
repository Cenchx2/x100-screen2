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
    <div className="border-bottom">
      {/* CAQP Title Section - light blue background */}
      <div className="p-2" style={{ backgroundColor: '#e6f2ff' }}>
        <h6 className="mb-0 fw-bold">CAQP - Account Opening [PERSONAL]</h6>
      </div>

      {/* Boxes Section - centered below title */}
      <div className="d-flex justify-content-center p-2 bg-white">
        <div className="d-flex gap-2">
          {boxes.map((box) => (
            <Button 
              key={box.id}
              variant="light"
              className={`border rounded p-1 text-center ${activeButton === box.id ? 'bg-primary text-white' : ''}`}
              style={{
                width: '80px', 
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.1s ease'
              }}
              onClick={() => handleBoxClick(box.id)}
              onMouseOver={(e) => {
                if (activeButton !== box.id) {
                  e.currentTarget.style.backgroundColor = '#f8f9fa'
                }
              }}
              onMouseOut={(e) => {
                if (activeButton !== box.id) {
                  e.currentTarget.style.backgroundColor = ''
                }
              }}
            >
              <div className="mb-1">{React.cloneElement(box.icon, { 
                color: activeButton === box.id ? 'white' : undefined 
              })}</div>
              <div>{box.title}</div>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Customer Information Section */}
      <div className="p-3 bg-light" style={{ width: '98%', margin: '0 auto' }}>
        <div className="d-flex">
          {/* Left div (80% width) */}
          <div style={{ width: '80%', paddingRight: '15px', borderRight: '1px solid #dee2e6' }}>
            {/* Customer Category Row */}
            <div className="d-flex align-items-center mb-3">
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
              
              {/* Spacer to push buttons to the right */}
              <div style={{ flex: 1 }}></div>
              
              {/* Group of elements on the far right */}
              <div className="d-flex align-items-center">
                {/* Print Risk Button */}
                <Button variant="secondary" className="px-3 py-1 fw-bold me-2">Print Risk</Button>
                
                {/* Risk ID Field */}
                <span className="fw-bold me-2">Risk ID</span>
                <Form.Control 
                  type="text" 
                  size="sm"
                  style={{ width: '80px' }}
                  className="me-3"
                />
                
                {/* Create/View Button */}
                <Button variant="secondary" className="px-3 py-1 fw-bold">Create / View</Button>
              </div>
            </div>
            
            {/* Account / Full Name Row */}
            <div className="d-flex align-items-center">
              <span className="fw-bold me-2" style={{ minWidth: '140px' }}>Account / Full Name</span>
              <Form.Control 
                type="text" 
                size="sm"
                style={{ width: '600px' }}
              />
              
              {/* Spacer to push Short Name to the right */}
              <div style={{ flex: 1 }}></div>
              
              {/* Short Name Field on the far right */}
              <div className="d-flex align-items-center">
                <span className="fw-bold me-2">Short Name</span>
                <Form.Control 
                  type="text" 
                  size="sm"
                  style={{ width: '150px' }}
                />
              </div>
            </div>
          </div>
          
          {/* Right div (20% width) - Compact side-aligned fields */}
          <div style={{ width: '20%', paddingLeft: '15px' }}>
            <div className="d-flex align-items-center mb-2">
              <span className="fw-bold me-2" style={{ minWidth: '90px' }}>Customer ID</span>
              <Form.Control 
                type="text" 
                style={{ width: '180px' }} 
                size="sm"
              />
            </div>
            
            <div className="d-flex align-items-center">
              <span className="fw-bold me-2" style={{ minWidth: '90px' }}>Account No</span>
              <Form.Control 
                type="text" 
                style={{ width: '180px' }} 
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;