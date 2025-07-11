import React from 'react';
import { Button } from 'react-bootstrap';

const AccountRelationInfo = () => {
  return (
    <div className="p-3">
      {/* Single Header */}
      <div className="text-center p-2 mb-3 fw-bold" style={{ backgroundColor: '#e6f2ff' }}>
        ACCOUNT RELATION INFORMATION
      </div>
      
      <div className="d-flex">
        {/* Left Section (50% width) */}
        <div style={{ width: '50%', paddingRight: '15px' }}>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="fw-bold small">Title</label>
              <select className="form-select form-select-sm">
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">Salutation</label>
              <input type="text" className="form-control form-control-sm" placeholder="Salutation" />
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">First Name</label>
              <input type="text" className="form-control form-control-sm" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">Middle Name</label>
              <input type="text" className="form-control form-control-sm" placeholder="Middle Name" />
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">Surname</label>
              <input type="text" className="form-control form-control-sm" placeholder="Surname" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">Gender</label>
              <select className="form-select form-select-sm">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">Date of Birth</label>
              <input type="date" className="form-control form-control-sm" />
            </div>
            
            {/* Mobile Number with Country Code and Example */}
            <div className="col-12">
              <label className="fw-bold small">Primary Mobile No</label>
              <div className="d-flex align-items-center">
                <div className="input-group" style={{ width: '400px' }}>
                  <span className="input-group-text">+231</span>
                  <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    placeholder="Mobile Number" 
                  />
                </div>
                <span className="ms-2 small text-muted">eg. 799344639</span>
              </div>
            </div>
            
            {/* Email and TIN on same row */}
            <div className="col-md-6">
              <label className="fw-bold small">Email</label>
              <input 
                type="email" 
                className="form-control form-control-sm" 
                placeholder="Email" 
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">TIN</label>
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Tax Identification Number" 
              />
            </div>
          </div>
        </div>
        
        {/* Right Section (50% width) */}
        <div style={{ width: '50%', paddingLeft: '15px' }}>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="fw-bold small">NationalID No. (NIN)</label>
              <input type="text" className="form-control form-control-sm" placeholder="NIN" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">Other ID Type</label>
              <select className="form-select form-select-sm">
                <option>Passport</option>
                <option>Driver's License</option>
                <option>Voter ID</option>
              </select>
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">ID No.</label>
              <input type="text" className="form-control form-control-sm" placeholder="ID Number" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">Issuing Date</label>
              <input type="date" className="form-control form-control-sm" />
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">Issuing Place</label>
              <input type="text" className="form-control form-control-sm" placeholder="Issuing Place" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">Flat/Villa/Hse No</label>
              <input type="text" className="form-control form-control-sm" placeholder="House Number" />
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">Location/GPRS</label>
              <input type="text" className="form-control form-control-sm" placeholder="Location" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">City</label>
              <input type="text" className="form-control form-control-sm" placeholder="City" />
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">Country Code</label>
              <input type="text" className="form-control form-control-sm" value="LBR" readOnly />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">ID Expiry Date</label>
              <input type="date" className="form-control form-control-sm" />
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">Issuing Auth</label>
              <input type="text" className="form-control form-control-sm" placeholder="Issuing Authority" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">Expiry Date</label>
              <input type="date" className="form-control form-control-sm" />
            </div>
            
            <div className="col-md-6">
              <label className="fw-bold small">Street Name</label>
              <input type="text" className="form-control form-control-sm" placeholder="Street Name" />
            </div>
            <div className="col-md-6">
              <label className="fw-bold small">LBR</label>
              <input type="text" className="form-control form-control-sm" value="LBERIA" readOnly />
            </div>
          </div>
        </div>
      </div>
      
      {/* Updated Blacklist Section - Full width spread out */}
      <div className="d-flex justify-content-between align-items-center border-top pt-3">
        <div className="d-flex align-items-center" style={{ width: '33%' }}>
          <Button variant="secondary" className="w-50">
            Check For Blacklisted
          </Button>
        </div>
        
        <div className="d-flex align-items-center justify-content-center" style={{ width: '33%' }}>
          <span className="fw-bold small me-2">BlackList Override Code</span>
          <input 
            type="text" 
            className="form-control form-control-sm"
            style={{ width: '250px' }}
          />
        </div>
        
        <div className="d-flex justify-content-end" style={{ width: '33%' }}>
          <Button variant="primary" className="w-50">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountRelationInfo;