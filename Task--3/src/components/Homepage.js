import React from 'react'
import { useState } from "react";
import './Homepage.css'

const Homepage = () => {
    const [headersData, setHeadersData] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
  
    const postData = async () => {
      try {
        const response = await fetch("https://chimpu.online/api/post.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ phonenumber: phoneNumber }),
        });
  
        if (response.ok) {
          const headers = {};
          for (let [key, value] of response.headers.entries()) {
            headers[key] = value;
          }
          setHeadersData(headers);
        } else {
          console.error("Error posting data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };                  
  
    return (
        <div className='homepage'>
          <h1>Chimpu Online</h1>
          <div className='main-entry'>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text"id="phoneNumber"value={phoneNumber}onChange={(e) => setPhoneNumber(e.target.value)}/>
            <button onClick={postData}> Submit </button>
          </div>
          {headersData && (
            <div className='responce'>
              <h2>Response Headers</h2>
              <ul>
                {Object.entries(headersData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };
    
export default Homepage
