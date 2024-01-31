import React from 'react';

const Connect = () => {
  // Function to connect to MetaMask and redirect to the home page
  async function connectToMetaMaskAndRedirect() {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('MetaMask connected successfully! Redirecting to the home page...');
        // Redirect to the home page
        window.location.href = 'home'; // Change 'home.html' to your actual home page URL
      } else {
        console.error('MetaMask not detected. Please install MetaMask to use this feature.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  }

  return (
    <div>
      <title>Connect to MetaMask</title>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000000; /* Black background */
          }
          .container {
            text-align: center;
          }
          h1 {
            color: #ffffff; /* White text */
          }
          #metamaskLogo {
            width: 200px; /* Adjust the width of the logo */
            height: auto; /* Maintain aspect ratio */
          }
          button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 20px; /* Add margin to the top of the button */
          }
          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
      <div className="container">
        <img id="metamaskLogo" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png" alt="MetaMask Logo" />
        <h1>Connect to MetaMask</h1>
        {/* Moved the heading below the image */}
        <button id="connectButton" onClick={connectToMetaMaskAndRedirect}>
          Connect
        </button>
        <p id="status"></p>
      </div>
    </div>
  );
};

export default Connect;
