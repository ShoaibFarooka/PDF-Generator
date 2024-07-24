import React from 'react';
// import { useState, useEffect } from 'react';
import '../Styles/Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard({ setIsAuthenticated }) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        setIsAuthenticated(false);
    }
    return (
        <div className="Dashboard">
            <div className='header'>
                <div className='header-text'>
                    Project Dashboard
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className='flex-div'>
                <div className='list-div'>
                    <ul>
                        <li>
                            <Link to='/formbox'>
                                <div className='common-div'>
                                    <div><b>Project 946</b></div>
                                    <div className='icons' style={{ color: '#008000' }}>Edit</div>
                                </div>
                                <div className='common-div'>
                                    <div>Status: Active</div>
                                    <div className='icons' style={{ color: '#B20000' }}>Delete</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/formbox'>
                                <div className='common-div'>
                                    <div><b>Project 987</b></div>
                                    <div className='icons' style={{ color: '#008000' }}>Edit</div>
                                </div>
                                <div className='common-div'>
                                    <div>Status: Active</div>
                                    <div className='icons' style={{ color: '#B20000' }}>Delete</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/formbox'>
                                <div className='common-div'>
                                    <div><b>Project 976</b></div>
                                    <div className='icons' style={{ color: '#008000' }}>Edit</div>
                                </div>
                                <div className='common-div'>
                                    <div>Status: Active</div>
                                    <div className='icons' style={{ color: '#B20000' }}>Delete</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div className='common-div'>
                                <div><b>Project 986</b></div>
                                <div className='icons' style={{ color: '#008000' }}>Edit</div>
                            </div>
                            <div className='common-div'>
                                <div>Status: Active</div>
                                <div className='icons' style={{ color: '#B20000' }}>Delete</div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className='sidebar'>
                    <div className='sidebar-title'>
                        <b>Filters and Sorting</b>
                    </div>
                    <div className='sidebar-body'>
                        <div>Date</div>
                        <div>Status</div>
                        <div>Caegory</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
