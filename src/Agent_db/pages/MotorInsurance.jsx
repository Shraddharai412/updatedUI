import { useState, useEffect } from "react";
import axios from "axios";
import styles from '../styles/AddPolicy.module.css';
import Navbar from '../components/Navbar.jsx';
function MotorInsurance() {
  const [formData, setFormData] = useState({
    policyNumber: "MOTOR009",
    agentId: "",
    agentEmail: "agent4@insurance.com",
    userId: "8",
    userEmail: "user3@domain.com",
    mobileNumber: "9123456789",
    startDate: "2024-12-15",
    endDate: "2025-12-15",
    premiumAmount: "1500.00",
    coverageAmount: "50000.00",
    paymentFrequency: "Monthly",
    policyStatus: "Active",
    vehicleMake: "Honda",
    vehicleModel: "Civic",
    vehicleRegistrationNumber: "ABC1234",
    beneficiaryDetails: "Bob Johnson - Child",
    termsAndConditions: "Covers damages from accidents.",
    coverageDetails: "Third-party liability only."
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedAgentId = localStorage.getItem('agentId');
    if (storedAgentId) {
      setFormData(prevState => ({
        ...prevState,
        agentId: storedAgentId
      }));
    } else {
      console.error('AgentId not found in local storage');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach(key => {
      if (formData[key] === "" && key !== "agentId") {
        newErrors[key] = "This field is required";
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    ['agentEmail', 'userEmail'].forEach(field => {
      if (formData[field] && !emailRegex.test(formData[field])) {
        newErrors[field] = "Invalid email format";
      }
    });

    const mobileRegex = /^\d{10}$/;
    if (formData.mobileNumber && !mobileRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number format (10 digits required)";
    }

    ['premiumAmount', 'coverageAmount'].forEach(field => {
      if (formData[field] && (isNaN(formData[field]) || Number(formData[field]) <= 0)) {
        newErrors[field] = "Must be a positive number";
      }
    });

    const today = new Date();
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    if (startDate < today) {
      newErrors.startDate = "Start date cannot be in the past";
    }
    if (endDate <= startDate) {
      newErrors.endDate = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8081/api/motorinsurances', formData, {
          auth: {
            username: 'agent',
            password: 'agent'
          }
        });
        console.log('Form submitted successfully:', response.data);
        setMessage("Policy created successfully!");
        setFormData({
          policyNumber: "",
          agentId: "",
          agentEmail: "",
          userId: "",
          userEmail: "",
          mobileNumber: "",
          startDate: "",
          endDate: "",
          premiumAmount: "",
          coverageAmount: "",
          paymentFrequency: "",
          policyStatus: "",
          vehicleMake: "",
          vehicleModel: "",
          vehicleRegistrationNumber: "",
          beneficiaryDetails: "",
          termsAndConditions: "",
          coverageDetails: ""
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setMessage("Error submitting form. Please try again.");
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div>
    <Navbar onLogout={() => console.log("Logged Out")} /> 
    <div className={styles.Formbg}>
      <h1 className={styles.title}>Motor Insurance Policy Form</h1>
      {message && <div style={{ color: 'green' }}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <h3>Policy Information</h3>
        
       

        <label>Start Date<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="date" 
          name="startDate" 
          value={formData.startDate} 
          onChange={handleChange} 
        />
        {errors.startDate && <span style={{ color: 'red' }}>{errors.startDate}</span>}
        <br />

        <label>End Date<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="date" 
          name="endDate" 
          value={formData.endDate} 
          onChange={handleChange} 
        />
        {errors.endDate && <span style={{ color: 'red' }}>{errors.endDate}</span>}
        <br /><hr />

        <h3>Policyholder Information</h3>
        <label>User ID<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="userId" 
          value={formData.userId} 
          onChange={handleChange} 
          placeholder="User ID" 
        />
        {errors.userId && <span style={{ color: 'red' }}>{errors.userId}</span>}
        <br />

        <label>User Email<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="email" 
          name="userEmail" 
          value={formData.userEmail} 
          onChange={handleChange} 
          placeholder="User Email" 
        />
        {errors.userEmail && <span style={{ color: 'red' }}>{errors.userEmail}</span>}
        <br />

        <label>Mobile Number<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="mobileNumber" 
          value={formData.mobileNumber} 
          onChange={handleChange} 
          placeholder="Mobile Number" 
        />
        {errors.mobileNumber && <span style={{ color: 'red' }}>{errors.mobileNumber}</span>}
        <br />

        <label>Beneficiary Details<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="beneficiaryDetails" 
          value={formData.beneficiaryDetails} 
          onChange={handleChange} 
          placeholder="Beneficiary Name, Relation" 
        />
        {errors.beneficiaryDetails && <span style={{ color: 'red' }}>{errors.beneficiaryDetails}</span>}
        <br /><hr/>

        <h3>Vehicle Information</h3>
        <label>Vehicle Make<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="vehicleMake" 
          value={formData.vehicleMake} 
          onChange={handleChange} 
          placeholder="Vehicle Make (e.g., Toyota, Honda)" 
        />
        {errors.vehicleMake && <span style={{ color: 'red' }}>{errors.vehicleMake}</span>}
        <br />

        <label>Vehicle Model<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="vehicleModel" 
          value={formData.vehicleModel} 
          onChange={handleChange} 
          placeholder="Vehicle Model (e.g., Corolla, Civic)" 
        />
        {errors.vehicleModel && <span style={{ color: 'red' }}>{errors.vehicleModel}</span>}
        <br />

        <label>Vehicle Registration Number<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="vehicleRegistrationNumber" 
          value={formData.vehicleRegistrationNumber} 
          onChange={handleChange} 
          placeholder="Vehicle Registration Number" 
        />
        {errors.vehicleRegistrationNumber && <span style={{ color: 'red' }}>{errors.vehicleRegistrationNumber}</span>}
        <br />

        <h3>Coverage Information</h3>
        <label>Premium Amount<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="premiumAmount" 
          value={formData.premiumAmount} 
          onChange={handleChange} 
          placeholder="Premium Amount" 
        />
        {errors.premiumAmount && <span style={{ color: 'red' }}>{errors.premiumAmount}</span>}
        <br />

        <label>Coverage Amount<span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text" 
          name="coverageAmount" 
          value={formData.coverageAmount} 
          onChange={handleChange} 
          placeholder="Coverage Amount" 
        />
        {errors.coverageAmount && <span style={{ color: 'red' }}>{errors.coverageAmount}</span>}
        <br />

        <label>Payment Frequency<span style={{ color: 'red' }}>*</span></label>
        <select 
          name="paymentFrequency" 
          value={formData.paymentFrequency} 
          onChange={handleChange}
        >
          <option value="">Select Frequency</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Annually">Annually</option>
        </select>
        {errors.paymentFrequency && <span style={{ color: 'red' }}>{errors.paymentFrequency}</span>}
        <br />

        <h3>Terms and Conditions</h3>
        <label>Terms and Conditions<span style={{ color: 'red' }}>*</span></label>
        <textarea 
          name="termsAndConditions" 
          value={formData.termsAndConditions} 
          onChange={handleChange} 
          placeholder="Enter terms and conditions"
        />
        {errors.termsAndConditions && <span style={{ color: 'red' }}>{errors.termsAndConditions}</span>}
        <br />

        <label>Coverage Details<span style={{ color: 'red' }}>*</span></label>
        <textarea 
          name="coverageDetails" 
          value={formData.coverageDetails} 
          onChange={handleChange} 
          placeholder="Enter coverage details"
        />
        {errors.coverageDetails && <span style={{ color: 'red' }}>{errors.coverageDetails}</span>}
        <br />

        <button type="submit">Create Policy</button>
      </form>
    </div>
    </div>
  );
}

export default MotorInsurance;
