import React, { useState } from "react";

const Contact = () =>{
    const [formData, setFormData] = useState({
        name: "",
        email: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
      };
    
      return (
        <div style={{ margin: "50px" }} >
        <h1 className="font-bold text-4xl">Contact Us Page</h1>
          <form onSubmit={handleSubmit} className="flex m-3 ">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}
export default Contact;