import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='bg-white sidebar p-2'>
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className='brand-name fs-4'>Tolks</span>
      </div>
      <hr className='text-dark' />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
        <i className="bi bi-speedometer2 me-3 fs-5"></i>
        <span className='fs-5'>Dashboard</span>
        </a>
        <a className="list-group-item py-2">
        <i className="bi bi-house me-3 fs-5"></i>
        <span className='fs-5'>Home</span>
        </a>
        <a className="list-group-item py-2">
        <i className="bi bi-table me-3 fs-5"></i>
        <span className='fs-5'>Products</span>
        </a>
        <a className="list-group-item py-2">
        <i className="bi bi-clipboard-data me-3 fs-5"></i>
        <span className='fs-5'>Report</span>
        </a>
        <a className="list-group-item py-2">
        <i className="bi bi-people me-3 fs-5"></i>
        <span className='fs-5'>Customers</span>
        </a>
        <a className="list-group-item py-2">
        <i className="bi bi-power me-3 fs-5"></i>
        <span className='fs-5'>Logout</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
