import React, { useState } from 'react';
import './styleregister.css';

function App() {
    const [activeForm, setActiveForm] = useState('registration');
    const [registrationData, setRegistrationData] = useState({
        name: '',
        age: '',
        dob: '',
        username: '',
        password: ''
    });
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [resetPasswordData, setResetPasswordData] = useState({
        email: ''
    });

    const toggleForms = (formName) => {
        setActiveForm(formName);
    };

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., send data to server for registration
        console.log('Registration submitted with:', registrationData);
        // Redirect to home page after registration
        // window.location.href = 'home.html'; // Adjust the URL as needed
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // You can handle login logic here, e.g., send data to server for authentication
        console.log('Login submitted with:', loginData);
        // Redirect to home page after login
        // window.location.href = 'home.html'; // Adjust the URL as needed
    };

    const handleResetPasswordSubmit = (e) => {
        e.preventDefault();
        // You can handle password reset logic here, e.g., send reset link to provided email
        console.log('Password reset requested for:', resetPasswordData.email);
    };

    return (
        <div className="container">
            <div className={`form ${activeForm === 'registration' ? '' : 'hidden'}`}>
                <h2>Register</h2>
                <form onSubmit={handleRegistrationSubmit}>
                    {/* ... (other input fields) */}
                    <button type="submit">Register</button>
                </form>
                <div className="form-footer">
                    <span>Already have an account? <a href="#" onClick={() => toggleForms('login')}>Login</a></span>
                </div>
            </div>

            <div className={`form ${activeForm === 'login' ? '' : 'hidden'}`}>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    {/* ... (other input fields) */}
                    <button type="submit">Login</button>
                </form>
                <div className="form-footer">
                    <span>Forgot your password? <a href="#" onClick={() => toggleForms('resetPassword')}>Reset</a></span>
                </div>
            </div>

            <div className={`form ${activeForm === 'resetPassword' ? '' : 'hidden'}`}>
                <h2>Reset Password</h2>
                <form onSubmit={handleResetPasswordSubmit}>
                    {/* ... (other input fields) */}
                    <button type="submit">Reset</button>
                </form>
                <div className="form-footer">
                    <span>Remembered your password? <a href="#" onClick={() => toggleForms('login')}>Login</a></span>
                </div>
            </div>
        </div>
    );
}

export default App;
