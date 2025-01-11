import React, { useState } from 'react'
import "./SimplePage.css"

const SimpleHtmlPage = () => {
   
        const [data, setData] = useState([
            { id: 1, name: "Aditi kushwaha", age: 28, email: "Aditikush23@example.com" },
            { id: 2, name: "Rohit Sharma", age: 32, email: "Sharmarohit2001@gmail.com" },
            { id: 3, name: "Shivam Tiwari", age: 40, email: "Shivatiwari1999@gmial.com" },


        ])
        const handleChange = (id, field, value) => {
            const updatedData = data.map((row) =>
                row.id === id
                    ? { ...row, [field]: value } // Create a new row object with the updated field
                    : row // Return the row unchanged if the ID doesn't match
            );
            setData(updatedData); // Update state with the new array
        };
        
        const handleSave = () => {
            // Simulate preparing data for API call
            console.log("Data ready to post:", data);
            alert("Data is ready to post to the API! Check console for details.");
        }
    



    return (
        <div className='simplehtmlpage'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row) =>
                        <tr key={row.id}>
                            <td>{row.id}</td>

                            <td>
                                <input className="editable" type="text" value={row.name}onChange={(e) => handleChange(row.id, "name", e.target.value)}
                                />
                            </td>
                            <td>
                                <input className="editable" type="text" value={row.age} onChange={(e) => handleChange(row.id,"age" , e.target.value, )} />
                            </td>
                            <td>
                                <input className="editable" type="text" value={row.email} onChange={(e) => handleChange(row.id,  "email",e.target.value)} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>


            <button onClick={handleSave}>Save Data</button>
        </div>
    )
}

export default SimpleHtmlPage
