import React from 'react';
import { Button } from 'react-bootstrap';
import { X, ChevronRight, Pencil, ArrowDown } from 'react-bootstrap-icons';

const AccountRelationDetails = () => {
  // Sample saved data
  const savedEntries = [
    {
      id: 'REL001',
      firstName: 'Cench',
      surname: 'Appah',
      middleName: 'Kwesi',
      gender: 'Male',
      dob: '15/05/1985',
      mobile: '0771234567',
      limit: '5,000.00',
      status: 'Active'
    },
    {
      id: 'REL002',
      firstName: 'Theophilus',
      surname: 'Appah',
      middleName: 'Kwesi',
      gender: 'Male',
      dob: '22/11/1990',
      mobile: '0777654321',
      limit: '7,500.00',
      status: 'Active'
    },
    {
      id: 'REL003',
      firstName: 'Sarah',
      surname: 'Johnson',
      middleName: 'Anne',
      gender: 'Female',
      dob: '30/07/1988',
      mobile: '0775551234',
      limit: '10,000.00',
      status: 'Pending'
    }
  ];

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Account Relations Details</h5>
      </div>
      
      <div className="table-responsive">
        <table className="table table-sm table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Relation No</th>
              <th>
                  <span>First Name</span>
              </th>
              <th>Surname</th>
              <th>Middle Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Mobile1</th>
              <th className="text-end">Mandate Approver Limit</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedEntries.map((entry, index) => (
              <tr key={index}>
                <td className="fw-semibold">{entry.id}</td>
                <td>{entry.firstName}</td>
                <td>{entry.surname}</td>
                <td>{entry.middleName}</td>
                <td>{entry.gender}</td>
                <td>{entry.dob}</td>
                <td>{entry.mobile}</td>
                <td className="text-end">{entry.limit}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    <Button variant="outline-primary" size="sm" className="p-1" title="Edit">
                      <Pencil size={14} />
                    </Button>
                    <Button variant="outline-danger" size="sm" className="p-1" title="Delete">
                      <X size={14} />
                    </Button>
                    <Button variant="outline-success" size="sm" className="p-1" title="View">
                      <ChevronRight size={14} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="d-flex justify-content-between align-items-center mt-4 pt-2 border-top">
        <div className="small text-muted">
          Showing {savedEntries.length} of {savedEntries.length} relations
        </div>
        
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" size="sm" className="d-flex align-items-center">
            <ArrowDown className="me-1" size={12} /> Export
          </Button>
          <Button variant="outline-secondary" size="sm">Print</Button>
          <Button variant="primary" size="sm">Save All</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountRelationDetails;