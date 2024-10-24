import 'bootstrap/dist/css/bootstrap.min.css'; // Correct Bootstrap import
import styles from '../styles/ExtraFooter.module.css'; // Import your CSS module

const ExtraFooter = () => {
  return (
    <div className="extra-footer bg-light py-4 border-top">
      <div className="container">
        <div className="row">
          {/* Accounts Column */}
          <div className="col-md-2">
            <h5>Accounts</h5>
            <ul className={`list-unstyled ${styles['list-unstyled']}`}>
              <li className={styles['list-item']}>Mobile App</li>
              <li className={styles['list-item']}>Login</li>
              <li className={styles['list-item']}>Sign Up</li>
              <li className={styles['list-item']}>Digital Access</li>
              <li className={styles['list-item']}>FAQs</li>
              <li className={styles['list-item']}>Claims</li>
              <li className={styles['list-item']}>Billing and Payments</li>
            </ul>
          </div>
          {/* Company Column */}
          <div className="col-md-2">
            <h5>Company</h5>
            <ul className={`list-unstyled ${styles['list-unstyled']}`}>
              <li className={styles['list-item']}>About MassMutual</li>
              <li className={styles['list-item']}>Newsroom</li>
              <li className={styles['list-item']}>Sustainability</li>
              <li className={styles['list-item']}>Blog</li>
              <li className={styles['list-item']}>Careers</li>
              <li className={styles['list-item']}>Contact Us</li>
              <li className={styles['list-item']}>U.S. & International Affiliates</li>
              <li className={styles['list-item']}>Financial Strength</li>
              <li className={styles['list-item']}>Web Accessibility</li>
            </ul>
          </div>
          {/* Solutions Column */}
          <div className="col-md-2">
            <h5>Solutions</h5>
            <ul className={`list-unstyled ${styles['list-unstyled']}`}>
              <li className={styles['list-item']}>For Individuals and Families</li>
              <li className={styles['list-item']}>For Employers</li>
              <li className={styles['list-item']}>For Institutions</li>
            </ul>
          </div>
          {/* Privacy & Security Column */}
          <div className="col-md-2">
            <h5>Privacy & Security</h5>
            <ul className={`list-unstyled ${styles['list-unstyled']}`}>
              <li className={styles['list-item']}>Privacy & Security Center</li>
              <li className={styles['list-item']}>Preventing Fraud</li>
            </ul>
          </div>
          {/* Information for Policyowners Column */}
          <div className="col-md-2">
            <h5>Information for Policyowners</h5>
            <ul className={`list-unstyled ${styles['list-unstyled']}`}>
              <li className={styles['list-item']}>Product/Fund Performance & Regulatory Documents</li>
              <li className={styles['list-item']}>Disaster Relief</li>
              <li className={styles['list-item']}>Domestic Violence Hotline</li>
              <li className={styles['list-item']}>Modal Charge Disclosure and APR Calculator</li>
            </ul>
          </div>
          {/* For Financial Professionals Column */}
          <div className="col-md-2">
            <h5>For Financial Professionals</h5>
            <ul className={`list-unstyled ${styles['list-unstyled']}`}>
              <li className={styles['list-item']}>Overview</li>
              <li className={styles['list-item']}>MassMutual Strategic Distributors</li>
              <li className={styles['list-item']}>Worksite</li>
              <li className={styles['list-item']}>Compass</li>
              <li className={styles['list-item']}>C&L Express</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraFooter;
