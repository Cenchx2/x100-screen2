import React from 'react';
import { Button } from 'react-bootstrap';
import { X, ChevronRight, } from 'react-bootstrap-icons';

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
      limit: '5000',
      status: 'Active'
    },
    {
      relationNo: 'REL002',
      firstName: 'Theophilus',
      surname: 'Appah',
      middleName: 'Kwesi',
      gender: 'Male',
      dob: '1990-11-22',
      mobile: '0777654321',
      limit: '7500',
      status: 'Pending'
    },
    {
      relationNo: 'REL003',
      firstName: 'Sarah',
      surname: 'Johnson',
      middleName: 'Anne',
      gender: 'Female',
      dob: '1988-07-30',
      mobile: '0775551234',
      limit: '10000',
      status: 'Active'
    }
  ];

  // Table columns
  const columns = [
    { key: 'relationNo', label: 'Relation No' },
    { key: 'firstName', label: 'First Name' },
    { key: 'surname', label: 'Surname' },
    { key: 'middleName', label: 'Middle Name' },
    { key: 'gender', label: 'Gender' },
    { key: 'dob', label: 'Date of Birth' },
    { key: 'mobile', label: 'Mobile1' },
    { key: 'limit', label: 'Mandate Approver Limit' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' }
  ];

  // Status badge colors
  const getStatusBadge = (status) => {
    switch(status.toLowerCase()) {
      case 'active': return 'bg-success';
      case 'pending': return 'bg-warning text-dark';
      case 'inactive': return 'bg-secondary';
      default: return 'bg-info';
    }
  };

  return (
    <div className="p-3" style={{ marginLeft: '20px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Account Relation Details</h5>
      </div>
      
      <div className="table-responsive">
        <table className="table table-hover table-sm">
          <thead className="table-light">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className={col.key === 'actions' ? 'text-end' : ''}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {savedEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.relationNo}</td>
                <td>{entry.firstName}</td>
                <td>{entry.surname}</td>
                <td>{entry.middleName}</td>
                <td>{entry.gender}</td>
                <td>{entry.dob}</td>
                <td>{entry.mobile}</td>
                <td>{entry.limit}</td>
                <td>
                  <span className={`badge ${getStatusBadge(entry.status)}`}>
                    {entry.status}
                  </span>
                </td>
                <td className="text-end">
                  <div className="d-flex justify-content-end gap-1">
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => console.log('Delete', entry.relationNo)}
                      className="p-1"
                      title="Delete"
                    >
                      <X size={14} />
                    </Button>
                    <Button 
                      variant="outline-success" 
                      size="sm"
                      onClick={() => console.log('View', entry.relationNo)}
                      className="p-1"
                      title="View Details"
                    >
                      <ChevronRight size={14} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination and Summary */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="small text-muted">
          Showing 1 to {savedEntries.length} of {savedEntries.length} entries
        </div>
        <nav>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled"><button className="page-link">Previous</button></li>
            <li className="page-item active"><button className="page-link">1</button></li>
            <li className="page-item"><button className="page-link">2</button></li>
            <li className="page-item"><button className="page-link">3</button></li>
            <li className="page-item"><button className="page-link">Next</button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AccountRelationDetails;