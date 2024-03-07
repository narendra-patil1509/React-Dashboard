import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import './Sidebar.css'
const Sidebar = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column">
                    <div>
                        <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3">
                            <span className="ms-1 fs-4 d-none d-sm-inline d-flex ">Brand</span>
                        </a>
                        <hr className="text-secondary d-none d-sm-block" />
                        <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="/" className="nav-link text-white fs-5">
                                    <i className="fs-4 bi bi-speedometer2"></i>
                                    <span className="ms-3 d-none d-sm-inline d-flex">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="/" className="nav-link text-white fs-5">
                                    <i className="fs-4 bi bi-house"></i>
                                    <span className="ms-3 d-none d-sm-inline d-flex">Home</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="/" className="nav-link text-white fs-5">
                                    <i className="fs-4 bi bi-table"></i>
                                    <span className="ms-3 d-none d-sm-inline d-flex">Orders</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="/" className="nav-link text-white fs-5">
                                    <i className="fs-4 bi bi-grid"></i>
                                    <span className="ms-3 d-none d-sm-inline d-flex">Products</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="/" className="nav-link text-white fs-5">
                                    <i className="fs-4 bi bi-people"></i>
                                    <span className="ms-3 d-none d-sm-inline d-flex">Customer</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown open">
                        <a href="/" className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="" aria-expanded="false">
                            <i className="bi bi-person-circle"></i><span className="ms-2 d-none d-sm-inline d-flex">Tolks</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <a href="#" className="dropdown-item"><span className="d-sm-inline">1</span> <span className="d-none d-sm-block">Profile</span></a>
                            <a href="#" className="dropdown-item"><span className="d-sm-inline">2</span> <span className="d-none d-sm-block">Setting</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;