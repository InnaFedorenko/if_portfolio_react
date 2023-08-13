import './App.css';
// Import the Navbar component and the Outlet component from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

// Define the main App component
function App() {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar/>
      {/* Create the main content area */}
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Export the App component to make it available for other parts of the application
export default App;
