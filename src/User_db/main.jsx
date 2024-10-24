import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserHeader from './UserHeader.jsx'
import Extrafoot from './Extrafoot.jsx'
// import UserFooter from './Footer.jsx'
import Navigation from './Navigation.jsx'
import DashboardContent from './DashboardContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserHeader/>
    <Navigation/>
    <DashboardContent/>
    <Extrafoot/>
    {/* <UserFooter/> */}
  </StrictMode>,
)
