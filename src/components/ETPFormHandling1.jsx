import React, { useState } from 'react';
import styles from './ETPStyleForms1.module.css';

function ETPFormHandling1() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    username: '',
    password: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    username: '',
    password: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    //Destructured the form input
    const { name, value } = e.target;

    //Set the form data
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name Validation
    if (!formData.name) {
      //Adding properties to formErrors object
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Age Validation (must be a number)
    if (!formData.age || isNaN(formData.age)) {
      formErrors.age = 'Age must be a valid number';
      isValid = false;
    }

    // Username Validation
    if (!formData.username) {
      formErrors.username = 'Username is required';
      isValid = false;
    }

    // Password Validation (at least 6 characters)
    if (!formData.password || formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    // Email Validation (basic check)
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Comment Validation
    if (!formData.comment) {
      formErrors.comment = 'Comment is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully');
      // You can proceed with form submission (e.g., send data to the server)
    } else {
      alert('Please fix the errors in the form');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
          />
          <span className={styles.error}>{errors.name}</span>
        </div>

        <div className={styles.inputGroup}>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={styles.inputField}
          />
          <span className={styles.error}>{errors.age}</span>
        </div>

        <div className={styles.inputGroup}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.inputField}
          />
          <span className={styles.error}>{errors.username}</span>
        </div>

        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.inputField}
          />
          <span className={styles.error}>{errors.password}</span>
        </div>

        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
          />
          <span className={styles.error}>{errors.email}</span>
        </div>

        <div className={styles.inputGroup}>
          <label>Comment:</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className={styles.inputField}
          ></textarea>
          <span className={styles.error}>{errors.comment}</span>
        </div>

        <div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ETPFormHandling1;
