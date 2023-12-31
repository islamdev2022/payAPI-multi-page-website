import React, { useState } from 'react';
const logos={
       
        position:"relative",
        right:"-140px",
        top:"30px"
       
    }
    const logosTop={
        marginBottom:"40px",
        display:"flex",
        gap:"40px"
    }
    const logosBottom={
        display:"flex",
        gap:"40px",
        marginLeft:"10px"
    }
    const join={
        fontFamily:"'Public Sans-Regular',Helvetica",
        fontSize:"20px",
        lineHeight:"28px",
height:"100px",
width:"410px",
position:"relative",
top:"30px",
color:"#556571",


    }

const Contact = () => {
 const [form, setForm] = useState({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: '',
 });

 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
 };
 const [checked, setChecked] = useState(false);

 const handleChangeIcon = () => {
   setChecked(!checked);
 };
 return (
    <>
    <h1>Submit a help request and we’ll get in touch shortly.</h1>
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />
        <div className='checkC'>
            <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChangeIcon}
        className="checkbox-input"
      />
      <span className={`checkbox-custom ${checked ? 'checked' : ''}`}>
        {checked && <img src="/assets/shared/desktop/icon-check-white.svg" alt="Checked" className="checkbox-icon" />}
      </span>
    </label>
    <p className='checkDes'>Stay up-to-date with company announcements and updates to our API</p>
        </div>
        
    <br />
        <button type="submit">Submit</button>
      </form>
      <div style={logos}>
        <h2 style={join}>
        join the thousands of innovators already building with us
        </h2>
        <div style={logosTop}>
        <img src="/assets/shared/desktop/tesla.svg" alt="tesla"/>
        <img src="/assets/shared/desktop/microsoft.svg" alt="microsoft" />
        <img src="/assets/shared/desktop/hewlett-packard.svg" alt="hp" />
        </div>
        <div style={logosBottom}>
        <img src="/assets/shared/desktop/oracle.svg" alt="oracle" />
        <img src="/assets/shared/desktop/google.svg" alt="google" width={120} />
        <img src="/assets/shared/desktop/nvidia.svg" alt="nvidia" />
        </div>

    </div>
    </div>
    </>
 );
};

export default Contact;