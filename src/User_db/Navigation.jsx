import { useState } from 'react';
import DashboardContent from './DashboardContent';
import PolicySection from './PolicySection';
import ClaimsSection from './ClaimsSection';
import PaymentsSection from './PaymentsSection';
import InsuranceGraphs from './InsuranceGraphs';
import styles from './Navigation.module.css';

const Navigation = () => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('Dashboard');

  // Function to handle navigation clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  console.log("Active Section:", activeSection);

  return (
    <div className={styles.container}>
      {/* Sidebar Navigation */}
      <nav className={styles.sidebar}>
        <ul className={styles.navList}>
          <li 
            className={styles.navItem} 
            onClick={() => handleNavClick('Dashboard')}
            style={{ backgroundColor: activeSection === 'Dashboard' ? 'rgb(128, 168, 221)' : '' }}
          >
            <a href="#Dashboard">Dashboard</a>
          </li>
          <li 
            className={styles.navItem} 
            onClick={() => handleNavClick('Policies')}
            style={{ backgroundColor: activeSection === 'Policies' ? 'rgb(128, 168, 221)' : '' }}
          >
            <a href="#Policies">Policies</a>
          </li>
          <li 
            className={styles.navItem} 
            onClick={() => handleNavClick('Claims')}
            style={{ backgroundColor: activeSection === 'Claims' ? 'rgb(128, 168, 221)' : '' }}
          >
            <a href="#Claims">Claims</a>
          </li>
          <li 
            className={styles.navItem} 
            onClick={() => handleNavClick('Payments')}
            style={{ backgroundColor: activeSection === 'Payments' ? 'rgb(128, 168, 221)' : '' }}
          >
            <a href="#Payments">Payments</a>
          </li>
          <li 
            className={styles.navItem} 
            onClick={() => handleNavClick('Support')}
            style={{ backgroundColor: activeSection === 'Support' ? 'rgb(128, 168, 221)' : '' }}
          >
            <a href="#Support">Stats</a>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {activeSection === 'Dashboard' && (
          <div id="Dashboard">
            <DashboardContent />
          </div>
        )}
        {activeSection === 'Policies' && (
          <div id="Policies">
            <PolicySection />
          </div>
        )}
        {activeSection === 'Claims' && (
          <div id="Claims">
            <ClaimsSection />
          </div>
        )}
        {activeSection === 'Payments' && (
          <div id="Payments">
            <PaymentsSection />
          </div>
        )}
        {activeSection === 'Support' && (
          <div id="Support">
            <InsuranceGraphs />
          </div>
        )}
      </div>
      
      <footer className={styles.footer}>
        <p className='footer'>&copy; 2024 MassMutual Insurance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Navigation;
