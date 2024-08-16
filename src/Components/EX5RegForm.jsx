import React, { useState } from "react";

function Ex5RegForm() {
  const [data, setData] = useState({ name: "", mail: "", phone: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  function handleSubmit(e){
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(data);
  };

  return (
    <div className="ex5">
      <form onSubmit={handleSubmit}>
        <h3>My Self</h3>
        <div className="container">
          <div className="sub-container">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="sub-container">
            <label>Email</label>
            <input
              type="text"
              name="mail"
              value={data.mail}
              onChange={handleChange}
            />
          </div>
          <div className="sub-container">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
          </div>
          <div className="sub-container">
            <label>Message</label>
            <input
              type="text"
              name="message"
              value={data.message}
              onChange={handleChange}
            />
          </div>
          <button className="Ex5btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Ex5RegForm;
