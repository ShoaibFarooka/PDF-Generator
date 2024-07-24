import React from 'react';
import '../Styles/Confirmation.css';
import { Link } from 'react-router-dom';

const name = localStorage.getItem('name');
const email = localStorage.getItem('email');

function Confirmation() {
    return (
        <div className="Confirmation">
            <h1>Form Submission Successful!</h1>
            <div className='div1'>Thank you for your Submission. We have received your form Successfully.</div>
            <div className='flex-div-column'>
                <ul>
                    <li><div className='div2'>Details of your Submission:</div></li>
                    <li><div className='div3'>Name: {name}</div></li>
                    <li><div>Email: {email}</div></li>
                    <li><div>Form ID: 123456</div></li>
                </ul>
            </div>
            <Link to='/dashboard'><button className='redirect-btn'>Go Back to homepage</button></Link>
        </div>
    );
}

export default Confirmation;
